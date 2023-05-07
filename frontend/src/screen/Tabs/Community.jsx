import { View, Text, TouchableOpacity, Image, TextInput, ScrollView } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import Post from "../../component/Post/Post"
import { StatusBar } from "expo-status-bar";

export default function Community({ navigation }) {
    const posts = [
        {
            postId: "8c5fdcd4-1a5b-4029-bcd1-087bcd5cccdd",
            topic: "eye",
            content: "Em chào mọi người, mọi người cho em hỏi bệnh nhân tiểu đường cần kiêng những gì ạ? ",
            media: "https://exploratory.io/note/kanaugust/Rename-Multiple-Columns-2613369153527243/note_content/libs/exploratory/images/p1.png",
            authId: "2764319f-7d99-43e7-a4d5-850380b1fd77",
            createdAt: "2023-04-15T03:51:38.000Z",
            updatedAt: "2023-04-15T03:51:38.000Z",
            numberOfComments: 3,
            auth: {
                userId: "2764319f-7d99-43e7-a4d5-850380b1fd77",
                firstName: "Vu Hoang",
                lastName: "Anh",
                avatar: null
            }
        },
    ];

    const dateToString = (d) => {
        return d.getHours() + ":" + d.getMinutes() + " " + d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear();
    }

    const postList = [];
    posts.forEach((post) => {
        postList.push(
            <TouchableOpacity onPress={() => { navigation.navigate("Post Detail", { post: post }) }}>
                <Post
                    key={post.post_id}
                    user_id={post.auth.firstName + " " + post.auth.lastName}
                    createdAt={dateToString(new Date(post.createdAt))}
                    avatar={post.auth.avatar || "https://cdn-icons-png.flaticon.com/512/3607/3607444.png"}
                    content={post.content}
                    numberOfComments={post.numberOfComments}
                />
            </TouchableOpacity>
        )
    })

    return (
        <>
            <StatusBar />
            <View className="flex-row items-center pt-12 pb-2 px-5 bg-white border border-gray-300">
                <View>
                    <Text className="font-bold text-2xl">Cộng đồng</Text>
                </View>
                <View className="space-x-2 flex-row mx-3 right-3 bottom-2 absolute">
                    <TouchableOpacity className="bg-slate-100 rounded-full p-2">
                        <Ionicons name="search" size={24} />
                    </TouchableOpacity>
                    <TouchableOpacity className="bg-slate-100 rounded-full p-2">
                        <Ionicons name="notifications" size={24} />
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView className="flex-1">
                <TouchableOpacity
                    className="flex-row items-center bg-white py-5 w-screen"
                    onPress={() => navigation.navigate("New Post")}
                >
                    <Image
                        src="https://i.etsystatic.com/isla/28f779/58119197/isla_fullxfull.58119197_gwg8k1wg.jpg?version=0"
                        className="w-10 h-10 rounded-full ml-3"
                    />
                    <Text className="text-base ml-3 text-gray-500">Chia sẻ thông tin của bạn</Text>
                    <View className="right-3 absolute">
                        <Ionicons name="images" size={28} color={"green"} />
                    </View>
                </TouchableOpacity>

                <View>
                    {postList}
                </View>
            </ScrollView>
        </>

    )
}