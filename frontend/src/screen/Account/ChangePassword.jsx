import { View, Text, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import React from "react";

export default function ChangePassword() {
    const [oldPass, setOldPass] = React.useState(null);
    const [newPass, setNewPass] = React.useState(null);
    const [reNewPass, setReNewPass] = React.useState(null);
    const [color, setColor] = React.useState("#9ca3af");
    const [messageOldPass, setMessageOldPass] = React.useState(null);
    const [messageReNewPass, setMessageReNewPass] = React.useState(null);
    
    const changeReNewPass = (val) => {
        setReNewPass(val);
        if (val != newPass) {
            setColor("red");
        } else {
            setColor("#9ca3af")
        }
    }

    const submit = () => {
        // check old pass
        
        // check new pass vs re new pass
        if (newPass != reNewPass) {
            setMessageReNewPass("Mật khẩu mới không khớp nhau!")
        }

        // ghép api
    }

    return (
        <View className="h-screen bg-white p-3 space-y-2">
            <Text className="text-base">Mật khẩu cũ</Text>
            <TextInput
                className="rounded-lg border border-gray-400 p-1 my-1 px-3"
                placeholder="Nhập mật khẩu cũ của bạn"
                secureTextEntry={true}
                onChangeText={(val) => setOldPass(val)}
            />
            {messageOldPass && <Text className="text-red-500" >{messageOldPass}</Text>}
            

            <Text className="text-base">Mật khẩu mới</Text>
            <TextInput
                className="rounded-lg border border-gray-400 p-1 my-1 px-3"
                placeholder="Nhập mật khẩu mới của bạn"
                secureTextEntry={true}
                onChangeText={(val) => setNewPass(val)}
            />

            <Text className="text-base">Nhập lại mật khẩu mới</Text>
            <TextInput
                className="rounded-lg border p-1 my-1 px-3"
                placeholder="Nhập lại mật khẩu của bạn"
                style={{borderColor: color}}
                secureTextEntry={true}
                onChangeText={(val) => changeReNewPass(val)}
            />
            {messageReNewPass && <Text className="text-red-500" >{messageReNewPass}</Text>}
            <View className="items-center">
                <TouchableOpacity 
                    className="my-5 py-2 items-center w-3/5 rounded-lg"
                    style={{ backgroundColor: "#24DCE2" }}
                    onPress={() => submit()}
                >
                    <Text className="text-white font-bold">Xác nhận</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}