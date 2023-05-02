import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Chat from "./Tabs/Chat";
import ChatDetail from "./Chat/ChatDetail";

const Stack = createStackNavigator();
export default function ChatStack() {
    return (
        <Stack.Navigator initialRoutName="Đoạn chat">
            <Stack.Screen
                name="Đoạn chat"
                component={Chat}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Chat Detail"
                component={ChatDetail}
                options={{ headerShown: false }}
                // navigationOptions={({ navigation, route }) => ({
                //     headerLeft: (
                //         <Ionicons
                //             labelVisible={false}
                //             title="Trở về"
                //             style={{ color: "#24dce2" }}
                //         />
                //     ),
                //     header: (
                //         <Text>Huong</Text>
                //     )
                // })}
            />
        </Stack.Navigator>
    )
}