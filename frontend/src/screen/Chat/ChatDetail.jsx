import { Text, View, Image } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { TouchableOpacity } from "react-native-gesture-handler"
import React, { useCallback, useEffect } from "react";
import { GiftedChat, InputToolbar, Bubble, Send } from "react-native-gifted-chat";

export default function ChatDetail({ navigation, route }) {
    const { user } = route.params;
    const [message, setMessage] = React.useState("h");
    const [messages, setMessages] = React.useState([]);

    const mess = [
        {
            _id: "29ce6fe8-cf96-496e-bdc9-5cb4af4ffcb9",
            text: "Cháu bé mới 14 tháng tuổi, nặng 8 kg còn bé quá không nên mổ bây giờ. Khi cháu được 24 tháng thì có thể mổ được. Chúng tôi hàng năm có tổ chức các đợt mổ nhân đạo cho các cháu có khe hở môi vòm miệng. Gia đình có thể lên đăng ký cho Cháu tại Khoa Phẫu thuật Hàm mặt và Tạo hình - Bệnh viện TƯQĐ 108.",
            type: "TEXT",
            chatId: "80d48db0-164f-490e-9bce-bea1e49866b0",
            userId: "2d683fbb-39aa-4428-8b44-c09394f8641d",
            createdAt: new Date(),
            updatedAt: "2023-04-27T11:35:05.000Z",
            user: {
                _id: "2d683fbb-39aa-4428-8b44-c09394f8641d",
                name: "Vu Hoang Anh",
                avatar: null
            }
        },
        {
            _id: "29ce6fe8-cf96-496e-bdc9-5cb4af4ffcb8",
            text: "Con gái tôi 14 tháng nặng 8kg, cháu bị hở vòm, gia đình tôi muốn phẫu thuật cho con. Xin hỏi bệnh viện về việc phẫu thuật hở vòm cho cháu? Chi phí và các dịch vụ ạ?",
            type: "TEXT",
            chatId: "80d48db0-164f-490e-9bce-bea1e49866b0",
            userId: "2d683fbb-39aa-4428-8b44-c09394f8641d",
            createdAt: new Date(),
            updatedAt: "2023-04-27T11:34:05.000Z",
            user: {
                _id: "2d683fbb-39aa-4428-8b44-c09394f8641e",
                name: "Vu Van T",
                avatar: null
            }
        },
        {
            _id: "29ce6fe8-cf96-496e-bdc9-5cb4af4ffcb7",
            text: "Chào bạn, tôi có thể giúp gì cho bạn.",
            type: "TEXT",
            chatId: "80d48db0-164f-490e-9bce-bea1e49866b0",
            userId: "2d683fbb-39aa-4428-8b44-c09394f8641d",
            createdAt: new Date(),
            updatedAt: "2023-04-27T11:33:05.000Z",
            user: {
                _id: "2d683fbb-39aa-4428-8b44-c09394f8641d",
                name: "Vu Hoang Anh",
                avatar: null
            }
        },
        {
            _id: "29ce6fe8-cf96-496e-bdc9-5cb4af4ffcb6",
            text: "Chào bác sĩ",
            type: "TEXT",
            chatId: "80d48db0-164f-490e-9bce-bea1e49866b0",
            userId: "2d683fbb-39aa-4428-8b44-c09394f8641d",
            createdAt: new Date(),
            updatedAt: "2023-04-27T11:32:05.000Z",
            user: {
                _id: "2d683fbb-39aa-4428-8b44-c09394f8641e",
                name: "Vu Van T",
                avatar: null
            }
        },
    ]

    useEffect(() => {
        setMessages(mess);
    }, []);

    const onSend = useCallback((messages = []) => {
        setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
        console.log(messages)
    }, []);

    const SendIcon = (props) => {
        return (
            <Send {...props} className="items-center mr-3">
                <View className="items-center m-2" >
                    <Ionicons name="send" size={24} color={"#24DCE2"} />
                </View>
            </Send>
        )
    }

    const customInputToolbar = props => {
        return (
            <InputToolbar
                {...props}
                containerStyle={{
                    backgroundColor: '#DCDCDC',
                    borderTopWidth: 0,
                    borderRadius: 20,
                    marginHorizontal: 10,
                    marginVertical: 5
                }}
            />
        );
    };

    const customBubble = props => {
        return (
            <Bubble
            {...props}
            wrapperStyle={{
              left: {
                backgroundColor: '#DCDCDC',
              },
            }}
          />
        )
    }

    return (
        <>
            <View>
                <View className="pt-10 bg-white flex-row" />
                <View className="bg-white flex-row items-center border-b border-gray-200">
                    <TouchableOpacity
                        className="m-3"
                        onPress={() => { navigation.navigate("Đoạn chat") }}
                    >
                        <Ionicons name="arrow-back" size={24} color="#24CDE2" />
                    </TouchableOpacity>
                    <View className="my-3 flex-row items-center">
                        <Image
                            src={user.avatar || `https://cdn-icons-png.flaticon.com/512/147/147133.png`}
                            className="w-10 h-10 rounded-full mr-3"
                        />
                        <Text className="text-lg font-bold">{user.name}</Text>
                    </View>
                </View>
            </View>
            <Text>{message}</Text>
            <GiftedChat
                messages={messages}
                user={{
                    _id: "2d683fbb-39aa-4428-8b44-c09394f8641e",

                }}
                onSend={messages => onSend(messages)}
                renderSend={props => SendIcon(props)}
                renderInputToolbar={props => customInputToolbar(props)}
                renderBubble = {props => customBubble(props)}
                renderChatFooter={() => {
                    return (
                        <View className="h-5"></View>
                    )
                }}
            />
        </>
    )
}