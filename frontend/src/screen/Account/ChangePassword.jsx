import { View, Text, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-gesture-handler";
export default function ChangePassword() {
    return (
        <View className="h-screen bg-white p-3 space-y-2">
            <Text className="text-base">Mật khẩu cũ</Text>
            <TextInput
                className="rounded-lg border border-gray-400 p-1 my-1 px-3"
                placeholder="Nhập mật khẩu cũ của bạn"
                secureTextEntry={true}
            />

            <Text className="text-base">Mật khẩu mới</Text>
            <TextInput
                className="rounded-lg border border-gray-400 p-1 my-1 px-3"
                placeholder="Nhập mật khẩu mới của bạn"
                secureTextEntry={true}
            />

            <Text className="text-base">Nhập lại mật khẩu </Text>
            <TextInput
                className="rounded-lg border border-gray-400 p-1 my-1 px-3"
                placeholder="Nhập lại mật khẩu của bạn"
                secureTextEntry={true}
            />
            <View className="items-center">
                <TouchableOpacity className="my-5 py-2 items-center w-3/5 rounded-lg"
                    style={{ backgroundColor: "#24DCE2" }}
                >
                    <Text className="text-white font-bold">Xác nhận</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}