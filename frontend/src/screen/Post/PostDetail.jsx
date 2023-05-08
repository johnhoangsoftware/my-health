import { Text, View, TouchableOpacity, Image, KeyboardAvoidingView, ScrollView, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Post from "../../component/Post/Post";
import React from "react";


const DEFAULT_AVATAR = "https://cdn-icons-png.flaticon.com/512/3607/3607444.png";

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

    ]

    const listComment = []

    comments.forEach((comment) => {
        listComment.push(
            <Comment key={comment.commentId} comment={comment} />
        )
    })

    const [comment, setComment] = React.useState(null);
    const writeComment = (val) => {
        setComment(val)
    }

    const sendCommnet = () => {
        // ghep api
        setComment(null)
    }

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
                    <Text className="font-semibold text-lg ml-3">{post.auth.firstName + " " + post.auth.lastName}</Text>
                </View>
            </View>
            <ScrollView className="h-4/5">
                <Post
                    key={post.post_id}
                    user_id={post.auth.firstName + " " + post.auth.lastName}
                    createdAt={post.createdAt}
                    avatar={post.auth.avatar || "https://cdn-icons-png.flaticon.com/512/3607/3607444.png"}
                    content={post.content}
                    numberOfComments={post.numberOfComments}
                />

                <View className="mb-20">
                    <View className="border-t border-gray-300 mx-3" />
                    {listComment}
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