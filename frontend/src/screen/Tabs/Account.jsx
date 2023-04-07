import { View, Text, TouchableOpacity } from "react-native"
import { AuthContext } from "../../component/context";
import React from "react";

export default function Account() {
    const { logout } = React.useContext(AuthContext);

    return (
        <View className="flex-1 items-center justify-center">
            <Text>Account</Text>
            <TouchableOpacity 
                onPress={() => {logout()}}
                >
                <Text className="font-bold text-white mt-16 p-3 bg-red-600">Logout</Text>
              </TouchableOpacity>
        </View>
    )
}