import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native"
import { AuthContext } from "../../component/context";
import React, { useEffect, useRef } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Ionicons, FontAwesome, Feather, AntDesign, MaterialCommunityIcons, Entypo } from "@expo/vector-icons";

export default function Account() {
    const { logout } = React.useContext(AuthContext);
    const [username, setUsername] = React.useState(null)

    const logoutClick = () => {
        logout();
    }

    useEffect(() => {
        setTimeout(async () => {
            let username
            try {
                username = await AsyncStorage.getItem("username");
            } catch (error) {
                console.log(error)
            }
            setUsername(username)
        }, 500);
    }, []);


    return (
        <View className="flex-1 items-center bg-white">
            <View className="w-full h-60">
                <Image
                    src="https://png.pngtree.com/thumb_back/fh260/background/20210115/pngtree-abstract-medical-wallpaper-template-design-banner-background-image_519861.jpg"
                    className="object-cover w-full h-full overflow-hidden"
                />
            </View>
            <View className="-mt-2 p-4 bg-white rounded-t-xl w-full max-w-s shadow-sm">
                <Text className="pt-24 text-center mb-2 text-slate-900 text-2xl font-bold">{username}</Text>
                <View className="m-auto flex-row space-x-5">
                    <TouchableOpacity style={styles.bg} className="p-3 rounded-lg flex-row items-center justify-center w-40">
                        <Feather name="edit" size={24} color={"white"} />
                        <Text className="w-20 ml-3 font-bold text-white">Chỉnh sửa thông tin</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.bg} className="p-3 rounded-lg flex-row items-center justify-center w-40">
                        <Feather name="eye" size={24} color={"white"} />
                        <Text className="w-20 ml-3 font-bold text-white">Xem trang cá nhân</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View className="top-28 p-1.5 w-56 h-56 rounded-full absolute items-center justify-center bg-white">
                <Image
                    src="https://i.etsystatic.com/isla/28f779/58119197/isla_fullxfull.58119197_gwg8k1wg.jpg?version=0"
                    className="w-full h-full object-cover rounded-full"
                />
            </View>

            <View className="border-t border-slate-300 w-screen items-center">
                <TouchableOpacity className="w-screen">
                    <Item title="Hồ sơ khám bệnh" />
                </TouchableOpacity>
                <TouchableOpacity className="w-screen">
                    <Item title="Tạo lịch nhắc" />
                </TouchableOpacity>
                <TouchableOpacity className="w-screen">
                    <Item title="Đổi mật khẩu" />
                </TouchableOpacity>
                <TouchableOpacity className="w-screen" onPress={() => { logout() }}>
                    <Item title="Đăng xuất" />
                </TouchableOpacity>
            </View>
        </View>

    )
}

const Item = (props) => {
    return (
        <View className="flex-row w-11/12 p-4 border-b border-gray-300 items-center">
            <View className>
                {
                    props.title == "Hồ sơ khám bệnh"
                    && <AntDesign name="profile" size={24} color="orange" />
                }
                {
                    props.title == "Tạo lịch nhắc"
                    && <FontAwesome name="calendar-plus-o" size={24} color="green" />
                }
                {
                    props.title == "Đổi mật khẩu"
                    && <MaterialCommunityIcons name="form-textbox-password" size={24} color="blue" />
                }
                {
                    props.title == "Đăng xuất"
                    && <Ionicons name="exit-outline" size={24} color="red" />
                }
            </View>
            <Text className="text-base ml-5">{props.title}</Text>
            <View className="right-3 absolute">
                <Entypo name="chevron-right" size={20} color="lightgray" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    bg: {
        backgroundColor: "#24DCE2",
    },
    borderAvatar: {

    }
})