import { View, Image, Text, TouchableOpacity } from "react-native"
import { Ionicons } from "@expo/vector-icons"

export default function (props) {
    return (
        <View className="bg-white mt-3">
            <View className="flex-row items-center w-screen px-3 mt-3">
                <Image
                    src={props.avatar}
                    className="w-10 h-10 rounded-full"
                />
                <View>
                    <Text className="font-semibold text-lg ml-3">{props.user_id}</Text>
                    <Text className="text-gray-400 ml-3 text-sm">{props.createdAt}</Text>
                </View>
            </View>
            <View className="my-3 px-3">
                <Text>{props.content}</Text>
            </View>
            {/* <View className="w-100">
                <Image 
                    src="https://vinmec-prod.s3.amazonaws.com/images/20190926_103801_467718_dai-thao-duong.max-1800x1800.jpg" 
                    className="object-contain w-screen aspect-video"
                />
            </View> */}
            <TouchableOpacity className="flex-row m-3 mt-0 pt-3 space-x-1 border-t border-gray-300">
                <Ionicons name="chatbox-outline" size={20} color={"gray"} />
                <Text className="text-gray-500">{props.numberOfComments} bình luận</Text>
            </TouchableOpacity>
        </View>
    )
}
