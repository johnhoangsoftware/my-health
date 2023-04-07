import { createStackNavigator } from "@react-navigation/stack";
import Login from "./Auth/Login";
import Signup from "./Auth/Signup";
import Home from "./Tabs/Home";

const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) => (
    <RootStack.Navigator screenOptions={{headerMode: 'none'}}>
        <RootStack.Screen name="LoginScreen" component={Login} />
        <RootStack.Screen name="SignupScreen" component={Signup} />
    </RootStack.Navigator>
)

export default RootStackScreen;