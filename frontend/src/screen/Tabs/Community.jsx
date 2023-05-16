import React from 'react'
import { View, Text, TouchableOpacity, Image, TextInput, ScrollView } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import Post from "../../component/Post/Post"
import { StatusBar } from "expo-status-bar";
import useAxios from '../../hooks/useAxios'

const DEFAULT_AVATAR = "https://static.vecteezy.com/system/resources/previews/001/223/214/original/female-doctor-wearing-a-medical-mask-vector.jpg";

export default function Community({ navigation }) {
    const [posts, setPosts] = React.useState([])
    const axios = useAxios()

    const dateToString = React.useMemo(() => (d) => {
        return d.getHours() + ":" + d.getMinutes() + " " + d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear();
    }, [])

    React.useEffect(() => {
        axios.get("/post")
            .then(res => res.data.data)
            .then(res => {
                setPosts(res.posts)
            })
            .catch(err => {
                console.log(JSON.stringify(err))
            })
    }, [])
    // const postList = [];
    // posts.forEach((post) => {
    //     postList.push(
    //         <TouchableOpacity onPress={() => { navigation.navigate("Post Detail", { post: post }) }}>
    //             <Post
    //                 key={post.post_id}
    //                 user_id={post.auth.firstName + " " + post.auth.lastName}
    //                 createdAt={post.createdAt}
    //                 avatar={post.auth.avatar || "https://cdn-icons-png.flaticon.com/512/3607/3607444.png"}
    //                 content={post.content}
    //                 numberOfComments={post.numberOfComments}
    //             />
    //         </TouchableOpacity>
    //     )
    // })

    return (
        <>
            <StatusBar />
            <View className="flex-row items-center pt-12 pb-2 px-5 bg-white border border-gray-300">
                <View>
                    <Text className="font-bold text-2xl">Cộng đồng</Text>
                </View>
                <View className="space-x-2 flex-row mx-3 right-3 bottom-2 absolute">
                    <TouchableOpacity className="bg-slate-100 rounded-full p-2"
                        onPress={() => navigation.navigate("Tìm kiếm bài viết")}
                    >
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
                    {
                        posts.map((post, index) => {
                            return (
                                <TouchableOpacity
                                    key={`post-${post.post_id}-${index}`}
                                    onPress={() => { navigation.navigate("Post Detail", { post: post }) }}
                                >
                                    <Post
                                        key={post.post_id}
                                        user_id={post.auth.name}
                                        createdAt={dateToString(new Date(post.createdAt))}
                                        avatar={post.auth.avatar || DEFAULT_AVATAR}
                                        content={post.content}
                                        numberOfComments={post.numberOfComments}
                                    />
                                </TouchableOpacity>
                            )
                        })
                    }
                </View>
            </ScrollView>
        </>
    )
}