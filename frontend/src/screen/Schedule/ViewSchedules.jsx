import { View, Text, TouchableOpacity, Modal, Pressable, ScrollView } from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
// import Profile from "../../component/Utils/Profile";
import React from "react";

export default function ViewSchedules({ navigation, route }) {
    // const { profile, hospital, department, date, hour } = route.params;

    const profile = {
        id: 2,
        fullname: "Nguyễn Văn An",
        sex: "Nam",
        dateOfBirth: "30/4/1975",
        relationship: "Bố",
        numberphone: "0982978510",
        address: "Số 67, ngõ 10, đường Tôn Thất Tùng, Đống Đa, Hà Nội"
    };

    const schedule = {
        hospital: "Bệnh viện Trung ương Quân đội 108",
        department: "Khoa nội tổng quát",
        date: "23/4/2023",
        hour: "09:30",
    }

    const Info = (props) => {
        return (
            <View className="mx-4 my-2 p-5 rounded-md bg-white shadow-sm">
                <View className="my-3">
                    <View className="flex-row py-1 border-b border-gray-200">
                        <Text>Họ tên</Text>
                        <Text className="right-0 bottom-1 absolute">{props.fullname}</Text>
                    </View>
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
                    <View className="flex-row py-1 border-b border-gray-200">
                        <Text>Chuyên khoa</Text>
                        <Text className="right-0 bottom-1 absolute">{props.department}</Text>
                    </View>
                    <View className="flex-row py-1 border-b border-gray-200">
                        <Text>Ngày khám</Text>
                        <Text className="right-0 bottom-1 absolute">{props.date}</Text>
                    </View>
                    <View className="flex-row py-1 border-b border-gray-200">
                        <Text>Giờ khám</Text>
                        <Text className="right-0 bottom-1 absolute">{props.hour}</Text>
                    </View>
                    <View className="flex-row py-1">
                        <Text>Bệnh viện</Text>
                        <Text className="right-0 top-1 absolute w-2/3 text-right">{props.hospital}</Text>
                    </View>
                </View>
            </View>
        )
    }

    const [modalVisible, setModalVisible] = React.useState(false);

    return (
        <KeyboardAwareScrollView>
            <ScrollView pagingEnabled={true}>
            <Text className="text-lg font-bold ml-4 mt-4" style={{ color: "#24DCE2" }}>Thông tin lịch khám</Text>
            <Info
                fullname={profile.fullname}
                sex={profile.sex}
                dateOfBirth={profile.dateOfBirth}
                relationship={profile.relationship}
                numberphone={profile.numberphone}
                address={profile.address}
                hospital={schedule.hospital}
                department={schedule.department}
                date={schedule.date}
                hour={schedule.hour}
            />
            </ScrollView>
        </KeyboardAwareScrollView> 
    )
}