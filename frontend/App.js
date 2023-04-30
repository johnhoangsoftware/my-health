import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootStackScreen from './src/screen/RootStackScreen'
import { AuthContext } from './src/component/context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from '@expo/vector-icons'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Community from './src/screen/Tabs/Community';
import Chat from './src/screen/Tabs/Chat';
import Account from './src/screen/Tabs/Account';
import HomeStack from './src/screen/HomeStack';

const Tab = createBottomTabNavigator();

export default function App() {
  // const [isLoading, setIsLoading] = React.useState(true);
  // const [userToken, setUserToken] = React.useState(null);
  const [isLogin, setIsLogin] = React.useState(false);

  const initialLoginState = {
    isLoading: true,
    user: {
      id: null,
      role: null
    },
    userToken: null,
  }

  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case 'RETRIEVE_TOKEN':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGIN':
        return {
          ...prevState,
          username: action.id,
          user: action.user,
          userToken: action.token,
          isLoading: false,
        };
      case 'SIGNUP':
        return {
          // ...prevState,
          // username: action.id,
          // userToken: action.token,
          // isLoading: false,
        };
      case 'LOGOUT':
        return {
          ...initialLoginState,
          isLoading: false
        };
    }
  }

  const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState)

  const authContext = React.useMemo(() => ({
    login: async (userId, userRole, userToken) => {
      setTimeout(() => {
        setIsLogin(true);
      }, 500);
      setIsLogin(false);

      try {
        await AsyncStorage.setItem('userToken', userToken)
        await AsyncStorage.setItem('user', JSON.stringify({id: userId, role: userRole}))
      } catch (e) {
        console.log(e);
      }
      dispatch({ type: 'LOGIN', user: {id: userId, role: userRole}, token: userToken })
    },
    signup: async () => {
      // let userToken
      // try {
      //   userToken = "signup";
      //   await AsyncStorage.setItem('userToken', userToken)
      // } catch (e) {
      //   console.log(e)
      // }
      // dispatch({ type: 'SIGNUP', id: username, token: userToken })
    },
    logout: async () => {
      try {
        await AsyncStorage.removeItem('userToken')
      } catch (e) {
        console.log(e);
      }
      dispatch({ type: 'LOGOUT' })
    }
  }), []);

  useEffect(() => {
    setTimeout(async () => {
      let userToken
      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch (e) {
        console.log(e);
      }
      dispatch({ type: 'RETRIEVE_TOKEN', token: userToken })
    }, 1000);
  }, []);

  if (loginState.isLoading) {
    return (
      <View className="flex-1 items-center justify-center" >
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {loginState.userToken != null ? (
          <Tab.Navigator
            screenOptions={({ route }) => {
              return ({
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName;
                  if (route.name === "Trang chủ") {
                    iconName = focused ? 'home' : 'home-outline';
                  } else if (route.name == 'Cộng đồng') {
                    iconName = focused ? 'md-people' : 'people-outline';
                  } else if (route.name == 'Chat') {
                    iconName = focused ? 'chatbubble-ellipses' : 'chatbubble-ellipses-outline';
                  } else {
                    iconName = focused ? 'person-circle' : 'person-circle-outline';
                  }
                  return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: '#24dce2',
                tabBarInactiveTintColor: 'gray',
                headerShown: false,
              });
            }}
          >
              <Tab.Screen name="Trang chủ" component={HomeStack} />
              <Tab.Screen name="Cộng đồng" component={Community} />
              <Tab.Screen name="Chat" component={Chat} />
              <Tab.Screen name="Tài khoản" component={Account} />
          </Tab.Navigator> 
        )
          : <RootStackScreen />}
      </NavigationContainer>

    </AuthContext.Provider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Color: {
    color: "#24dce2",
  }
});
