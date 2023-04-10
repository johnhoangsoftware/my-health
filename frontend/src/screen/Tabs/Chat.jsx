import React from "react"
import { View, TextInput, Text, Image, TouchableOpacity } from "react-native"
import { Ionicons, FontAwesome5 } from "@expo/vector-icons"

export default function Chat() {
    const [search, setSearch] = React.useState({
        inputSearch: null,
        isSearch: false
    })

    const chats = [
        {
            chat_id: 3,
            user_id: "Nguyễn Văn An",
            avatar: "https://cdn-icons-png.flaticon.com/512/147/147133.png",
            last_message: "Không có gì, chúc bạn mau khỏe"
        },
        {
            chat_id: 2,
            user_id: "Hoàng Thu Hương",
            avatar: "https://i.pinimg.com/originals/a6/58/32/a65832155622ac173337874f02b218fb.png",
            last_message: "Bạn nên thường xuyên tập thể dục hơn"
        },
        {
            post_id: 1,
            user_id: "Nguyễn Thị Lan",
            avatar: "https://cdn.icon-icons.com/icons2/2643/PNG/512/female_woman_person_people_avatar_icon_159366.png",
            last_message: "Đó là biểu hiện bình thường ở trẻ nhỏ, bạn không cần quá lo lắng"
        },
        
    ];
    const chatList = [];
    chats.forEach((item) => {
        chatList.push(
            <ChatItem
                key={item.chat_id}
                user_id={item.user_id}
                avatar={item.avatar}
                last_message={item.last_message}
            />
        )
    })

    const searchChange = (val) => {
        if (val.length != 0) {
            setSearch({
              inputSearch: val,
              isSearch: true
            });
        } else {
            setSearch({
                inputSearch: val,
                isSearch: false
            });
        }
    }

    const searchInfo = () => {
        
    }

    return (
        <View className="flex-1 items-center">
            <View className='bg-gray-200 rounded-full m-3 px-3 py-1 w-11/12 flex-row items-center'>
                {search.isSearch ?
                <Ionicons name='search' size={20} color="black" />
                : <Ionicons name='search' size={20} color="gray" />
                }                    
                <TextInput 
                    className="pl-2" placeholder='Nhập tên bác sĩ'
                    onChangeText={(val) => searchChange(val)}
                    onEndEditing={() => searchInfo()}
                />
            </View>  
            <View>
                {chatList}
            </View>
        </View>
    )
}

const ChatItem = (props) => {
    return (
        <TouchableOpacity className="mx-4 my-2 flex-col">
            <View className="flex-row items-center w-screen px-3">
                <Image 
                    src={props.avatar}
                    className="w-16 h-16 rounded-full"
                    />
                <View className="w-72">
                    <Text className="font-semibold text-base ml-3">{props.user_id}</Text> 
                    <Text className="text-gray-400 ml-3 text-sm" numberOfLines={1}>{props.last_message}</Text>
                </View>
            </View>
        </TouchableOpacity> 
    )
}