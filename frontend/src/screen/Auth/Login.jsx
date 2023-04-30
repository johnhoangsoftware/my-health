import { StyleSheet, Text, TouchableOpacity, View, Image, TextInput, ScrollView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { FontAwesome, Feather } from '@expo/vector-icons'
import React, { useContext } from 'react';

import { AuthContext } from '../../component/context';
import useAxios from '../../hooks/useAxios';

export default function Login({navigation}) {
  const [data, setData] = React.useState({
    username: '',
    password: '',
    check_userChange: false,
    check_pwChange: false
  })

  const [checkLogin, setCheckLogin] = React.useState(true);
  const { login } = useContext(AuthContext)
  
  const axios = useAxios()

  const userChange = (val) => {
    if (val.length != 0) {
      setData({
        ... data,
        username: val,
        check_userChange: true
      });
    } else {
      setData({
        ... data,
        username: val,
        check_userChange: false
      });
    }
  }

  const pwChange = (val) => {
    if (val.length != 0) {
      setData({
        ... data,
        password: val,
        check_pwChange: true
      });
    } else {
      setData({
        ... data,
        password: val,
        check_pwChange: false
      });
    }
  }

  const loginHandle = (username, password) => {
    axios.post(`/auth/login`, {
      email: username,
      password: password
    }).then(res => {
      console.log(res.data.data)
      if (res.status === 200) {
        const {userId, role, token} =  res.data.data
        login(userId, role, token) 
      }
    }).catch(err => {
      console.log(JSON.stringify(err))
      setCheckLogin(false);
    })
  }

  return (
    <KeyboardAwareScrollView>
      <ScrollView pagingEnabled={true}>
      <View style={styles.circle1} />
      <View style={styles.circle2} />
      
        <View style={styles.container} className="relative flex-2 items-center justify-center h-screen">
          <Text className="font-bold text-2xl text-center mb-10">Chào mừng bạn{"\n"} đến với MyHealth</Text>
          {/* <Image source={require('./../../assets/img-login.jpg')} className='object-cover h-48 w-screen' /> */}
          <View className="space-y-3 m-5 items-center">
            <View className='bg-gray-200 rounded-full mx-5 px-3 py-2 w-80 flex-row items-center'>
                {data.check_userChange ?
                  <FontAwesome name='user-o' size={20} color="black" />
                  : <FontAwesome name='user-o' size={20} color="gray" />
                }
                
                <TextInput 
                  className="pl-2" placeholder='Tên đăng nhập'
                  onChangeText={(val) => userChange(val)}
                  />
            </View>     
            <View className='bg-gray-200 rounded-full mx-5 px-3 py-2 w-80 flex-row items-center'>
                {data.check_pwChange ? 
                  <Feather name='lock' size={20} color="black" />
                  : <Feather name='lock' size={20} color="gray" />
                } 
                <TextInput
                  secureTextEntry={true}
                  className="pl-2 w-72" placeholder='Mật khẩu'
                  onChangeText={(val) => pwChange(val)}
                  />
            </View> 
            {!checkLogin ? 
            <Text className="text-red-500 text-center">Bạn đã nhập sai tên đăng nhập hoặc mật khẩu</Text>
            : null}
            <TouchableOpacity>
              <Text style={styles.textColor} className="font-bold text-center mt-5">Quên mật khẩu</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              onPress={() => {loginHandle(data.username, data.password)}}
              className="rounded-md items-center my-2 w-72" style={styles.bgColor}
            >
              <Text className="font-bold text-center mx-5 w-80 py-3 text-white">Đăng nhập</Text>
            </TouchableOpacity>
            <View className="flex-row justify-center mb-10">
              <Text>Chưa có tài khoản? </Text>
              <TouchableOpacity 
                onPress={() => navigation.navigate("SignupScreen")}
                >
                <Text style={styles.textColor} className="font-bold">Đăng ký</Text>
              </TouchableOpacity>
              </View>
          </View>        
        </View>
      </ScrollView>
    </KeyboardAwareScrollView>  
  );
}

const styles = StyleSheet.create({
  circle1: {
    position: "absolute",
    width: 250,
    height: 250,
    borderRadius: 250/2,
    left: 8,
    top: -114,
    backgroundColor: 'rgba(36, 220, 226, 0.3)'
  },
  circle2: {
    position: "absolute",
    width: 250,
    height: 250,
    borderRadius: 250/2,
    left: -117,
    top: -42,
    backgroundColor: 'rgba(36, 220, 226, 0.3)'
  },
  container: {
    top: 100 
  }, 
  textColor: {
    color: "#24DCE2"
  },
  bgColor: {
    backgroundColor: "#24DCE2"
  }
});