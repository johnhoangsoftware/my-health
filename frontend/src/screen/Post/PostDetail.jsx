import React from "react";
import { Text, View, TouchableOpacity, Image, KeyboardAvoidingView, ScrollView, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Post from "../../component/Post/Post";
import useAxios from "../../hooks/useAxios";

const DEFAULT_AVATAR = "https://cdn-icons-png.flaticon.com/512/3607/3607444.png";

<<<<<<< HEAD
const Comment = (props) => {
    console.log(props.comment)
    const dateToString = React.useMemo(() => (d) => {
        return d.getHours() + ":" + d.getMinutes() + " " + d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear();
    }, [])

    return (
        <View className=" flex-row m-3">
            <Image
                src={props.comment.auth.avatar || DEFAULT_AVATAR}
                className="aspect-square rounded-full"
                style={{ width: "12%" }}
            />
            <View
                className="bg-gray-100 ml-3 rounded-lg w-11/12 px-3 py-1"
                style={{ width: "85%" }}
            >
                <Text className="font-bold">
                    {props.comment.auth.name} {" "}
                    <Text className="font-light">{ dateToString(new Date(props.comment.createdAt))}</Text>
                </Text>
                <Text>{props.comment.content}</Text>
            </View>

        </View>
    )
}
=======
export default function PostDetail({ navigation, route }) {
    const { post } = route.params;

    const comments = [
        {
            commentId: "becf5b6a-da9e-4d1b-81a4-65f2b2ca042e",
            content: "bệnh nhân tiểu đường không nên ăn thịt lợn mẽ, nội tạng động vật, da của gia cầm",
            authId: "2764319f-7d99-43e7-a4d5-850380b1fd78",
            postId: "8c5fdcd4-1a5b-4029-bcd1-087bcd5cccdd",
            createdAt: "2023-04-15T03:57:34.000Z",
            updatedAt: "2023-04-15T03:57:34.000Z",
            auth: {
                userId: "2764319f-7d99-43e7-a4d5-850380b1fd78",
                firstName: "Nguyễn Bình",
                lastName: "An",
                avatar: "https://gtjai.com.vn/wp-content/uploads/2021/07/avt.png"
            }
        },
        {
            commentId: "becf5b6a-da9e-4d1b-81a4-65f2b2ca042f",
            content: "không nên ăn bánh kẹo ngọt, mứt, siro, các loại nước có ga, ...",
            authId: "2764319f-7d99-43e7-a4d5-850380b1fd79",
            postId: "8c5fdcd4-1a5b-4029-bcd1-087bcd5cccdd",
            createdAt: "2023-04-15T03:57:34.000Z",
            updatedAt: "2023-04-15T03:57:34.000Z",
            auth: {
                userId: "2764319f-7d99-43e7-a4d5-850380b1fd79",
                firstName: "Nguyễn Thanh",
                lastName: "Huyền",
                avatar: "https://cdn-icons-png.flaticon.com/256/219/219969.png"
            }
        },
        {
            commentId: "becf5b6a-da9e-4d1b-81a4-65f2b2ca042g",
            content: "Em cảm ơn ạ",
            authId: "2764319f-7d99-43e7-a4d5-850380b1fd77",
            postId: "8c5fdcd4-1a5b-4029-bcd1-087bcd5cccdd",
            createdAt: "2023-04-15T03:57:34.000Z",
            updatedAt: "2023-04-15T03:57:34.000Z",
            auth: {
                userId: "2764319f-7d99-43e7-a4d5-850380b1fd77",
                firstName: "Vu Hoang",
                lastName: "Anh",
                avatar: null
            }
        },
>>>>>>> origin/Huong

export default function PostDetail({ navigation, route }) {
    console.log("is MINE::", route.params.isMine)
    const [post, setPost] = React.useState(route.params.post || {})
    const [comments, setComments] = React.useState([])
    const [comment, setComment] = React.useState("");

    const axios = useAxios()

    const writeComment = (val) => {
        setComment(val)
    }
    
    const dateToString = React.useMemo(() => (d) => {
        return d.getHours() + ":" + d.getMinutes() + " " + d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear();
    }, [])

    const sendCommnet = () => {
        axios.post(`/post/${post.postId}/comments`, {
            content: comment
        })
            .then(res => {
                if (res.status === 200) {
                    setComment("")
                    setComments(prev => [
                        ...prev,
                        res.data.data
                    ])
                    setPost(prev => ({
                        ...prev,
                        numberOfComments: prev.numberOfComments + 1
                    }))
                }
            })
            .catch(err => {
                console.log(JSON.stringify(err))
            })
    }

    React.useEffect(() => {
        axios.get(`/post/${post.postId}/comments`)
            .then(res => res.data.data)
            .then(cmt => {
                console.log(cmt)
                setComments(cmt)
            })  
            .catch(err => {
                console.log(JSON.stringify(err))
            })
    }, [])

    return (
        <KeyboardAvoidingView
            className="bg-white"
            style={{ height: "100%" }}
        >
            <View className="pt-10 flex-row" />
            <View className="flex-row items-center justify-center border-b border-gray-200">
                <TouchableOpacity
                    className="m-3 absolute left-0"
                    onPress={() => navigation.goBack(null)}
                >
                    <Ionicons name="arrow-back" size={24} color="black" />
                </TouchableOpacity>
                <View className="my-3 flex-row items-center">
                    <Text className="font-semibold text-lg ml-3">{post.auth.name}</Text>
                </View>
            </View>
            <ScrollView className="h-4/5">
                <Post
<<<<<<< HEAD
                    key={post.postId}
                    user_id={post.auth.name}
                    createdAt={dateToString(new Date(post.createdAt))}
                    avatar={post.auth.avatar || DEFAULT_AVATAR}
=======
                    key={post.post_id}
                    user_id={post.auth.firstName + " " + post.auth.lastName}
                    createdAt={post.createdAt}
                    avatar={post.auth.avatar || "https://cdn-icons-png.flaticon.com/512/3607/3607444.png"}
>>>>>>> origin/Huong
                    content={post.content}
                    numberOfComments={post.numberOfComments}
                />

                <View className="mb-20">
                    <View className="border-t border-gray-300 mx-3" />
                    {
                        comments.map((cmt, index) => {
                            return <Comment
                                    key={cmt.commentId}
                                    comment={cmt} 
                                />
                        })
                    }
                </View>
            </ScrollView>
            <KeyboardAvoidingView className="w-screen absolute bottom-0">
                <View className="flex-row bg-white items-center justify-center px-5">
                    <TextInput
                        className="bg-gray-100 w-11/12 my-2 rounded-full p-2 px-5"
                        placeholder="Viết bình luận ..."
                        id="comment"
                        value={comment}
                        onChangeText={(val) => writeComment(val)}
                    />
                    {
                        comment ?
                            <TouchableOpacity
                                className="w-1/12 ml-3"
                                onPress={() => sendCommnet()}
                            >
                                <Ionicons name="send" color={"#24CDE2"} size={24} />
                            </TouchableOpacity> :
                            <View className="w-1/12 ml-3">
                                <Ionicons name="send" color={"gray"} size={24} />
                            </View>
                    }
                </View>
            </KeyboardAvoidingView>
        </KeyboardAvoidingView>
    )
}

const Comment = (props) => {
    return (
        <View className=" flex-row m-3">
            <Image
                src={props.comment.auth.avatar || "https://cdn-icons-png.flaticon.com/512/3607/3607444.png"}
                className="aspect-square rounded-full"
                style={{ width: "12%" }}
            />
            <View
                className="bg-gray-100 ml-3 rounded-lg w-11/12 px-3 py-1"
                style={{ width: "85%" }}
            >
                <Text className="font-bold">{props.comment.auth.firstName + " " + props.comment.auth.lastName}</Text>
                <Text>{props.comment.content}</Text>
            </View>

        </View>
    )
}