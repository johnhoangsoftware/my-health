import { View, Text } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"
import { Feather, AntDesign } from '@expo/vector-icons';

export default function Profile(props) {
    return (
        <View className="mx-4 my-2 p-5 rounded-md bg-white shadow-md shadow-gray-500">
            <View className="flex-row">
                {
                    props.selected ? <AntDesign name="checkcircle" size={20} color="green" />
                        : <Feather name="circle" size={20} color="black" />
                }
                <Text className="ml-4 font-bold text-base">{props.fullname}</Text>
            </View>
            <View className="my-3">
                <View className="flex-row py-1 border-b border-gray-200">
                    <Text>Giới tính</Text>
                    <Text className="right-0 bottom-1 absolute">{props.sex}</Text>
                </View>
                <View className="flex-row py-1 border-b border-gray-200">
                    <Text>Ngày sinh</Text>
                    <Text className="right-0 bottom-1 absolute">{props.dateOfBirth}</Text>
                </View>
                <View className="flex-row py-1 border-b border-gray-200">
                    <Text>Mối quan hệ</Text>
                    <Text className="right-0 bottom-1 absolute">{props.relationship}</Text>
                </View>
                <View className="flex-row py-1 border-b border-gray-200">
                    <Text>Số điện thoại</Text>
                    <Text className="right-0 bottom-1 absolute">{props.numberphone}</Text>
                </View>
                <View className="flex-row py-1">
                    <Text>Địa chỉ</Text>
                    <Text className="right-0 top-1 absolute w-2/3 text-right">{props.address}</Text>
                </View>
            </View>
        </View>
    )
}