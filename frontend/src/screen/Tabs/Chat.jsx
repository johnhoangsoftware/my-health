import React from "react"
import { View, TextInput, Text, Image, TouchableOpacity, StatusBar } from "react-native"
import { Ionicons, FontAwesome5 } from "@expo/vector-icons"
import useAxios from '../../hooks/useAxios'
import useAuth from '../../hooks/useAuth'

export default function Chat({ navigation }) {
    const [search, setSearch] = React.useState({
        inputSearch: null,
        isSearch: false
    })
    const [chatList, setChatList] = React.useState([])
    const axios = useAxios()


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

    React.useEffect(() => {
        console.log("Fetch chat")
        axios.get("/chat")
            .then(res => {
                if (res.status === 200) {
                    setChatList(res.data.data)
                }
            }).catch(err => {
                console.log(JSON.stringify(err))
            })
    }, [])

    return (
        <View className="bg-white flex-1">
            <StatusBar />
            <View className="flex-row items-center pt-10 pb-2 px-5 bg-white border border-gray-300 justify-center">
                <Text className="font-bold text-xl text-center">Đoạn chat</Text>
            </View>
            <View className="flex-1 items-center">
                <View className='bg-gray-200 rounded-full m-3 px-3 py-2 w-11/12 flex-row items-center'>
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
                    {
                        chatList.length > 0 &&
                        chatList.map((c, index) => {
                            return (
                                <TouchableOpacity onPress={() => navigation.navigate("Chat Detail", { user: c.user })}
                                >
                                    <ChatItem
                                        key={`chat-item-${index}-${c.chatId}`}
                                        chatItem={{
                                            chatId: c.chatId,
                                            user: c.user,
                                            lastMessage: c.messages[0]
                                        }}
                                    />
                                </TouchableOpacity>
                            )
                        })
                    }
                    {/* test chat detail */}
                    <TouchableOpacity className="bg-red-500 p-5" onPress={() => navigation.navigate("Chat Detail", { user: {_id: "2d683fbb-39aa-4428-8b44-c09394f8641d", name: "Vu Van T"}})}>
                        <Text>Click</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const ChatItem = ({ chatItem }) => {
    const [auth, setAuth] = React.useState({})

    React.useEffect(() => {
        (async function () {
            const u = await useAuth()
            setAuth(u)
        })()
    }, [])

    return (
        <View className="mx-4 my-2 flex-col ">
            <View className="flex-row items-center w-screen px-3">
                <Image
                    src={chatItem.user.avatar || `https://cdn-icons-png.flaticon.com/512/147/147133.png`}
                    className="w-16 h-16 rounded-full"
                />
                <View className="w-72">
                    <Text className="font-semibold text-base ml-3">{chatItem.user.name}</Text>
                    <Text className="text-gray-400 ml-3 text-sm" numberOfLines={1}>
                        {
                            Object.keys(auth).length > 0 && auth.id === chatItem.lastMessage.sender.userId ?
                                "You"
                                :
                                chatItem.lastMessage.sender.name
                        }
                        : {chatItem.lastMessage.content}
                    </Text>
                </View>
            </View>
        </View>
    )
}