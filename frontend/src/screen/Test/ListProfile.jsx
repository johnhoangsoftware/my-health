import { View, Text, TouchableOpacity } from "react-native"
import { Ionicons } from '@expo/vector-icons';
import { ScrollView } from "react-native-gesture-handler";
import Profile from "../../component/Utils/Profile";
import React, { useEffect } from "react";

export default function ListProfileTest({ navigation, route }) {
    const [selected, setSelected] = React.useState(null);

    const { testPackage } = route.params;

    const chooseNext = () => {
        navigation.navigate("Chọn lịch xét nghiệm", { profile: selected, testPackage: testPackage })
    }

    const profiles = [
        {
            id: 2,
            fullname: "Nguyễn Văn An",
            sex: "Nam",
            dateOfBirth: "30/4/1975",
            relationship: "Bố",
            numberphone: "0982978510",
            address: "Số 67, ngõ 10, đường Tôn Thất Tùng, Đống Đa, Hà Nội"
        },
        {
            id: 3,
            fullname: "Vũ Thanh Thủy",
            sex: "Nữ",
            dateOfBirth: "19/8/1979",
            relationship: "Mẹ",
            numberphone: "0982974858",
            address: "Số 67, ngõ 10, đường Tôn Thất Tùng, Đống Đa, Hà Nội"
        },
        {
            id: 1,
            fullname: "Nguyễn Văn Thương",
            sex: "Nam",
            dateOfBirth: "5/8/1997",
            relationship: "Bản thân",
            numberphone: "0982978508",
            address: "Số 67, ngõ 10, đường Tôn Thất Tùng, Đống Đa, Hà Nội"
        },
    ]
    const listProfile = []
    profiles.forEach((profile) => {
        listProfile.push(
            <TouchableOpacity key={profile.id} onPress={() => { setSelected(profile) }}>
                <Profile
                    selected={selected != null && profile.id == selected.id}
                    fullname={profile.fullname}
                    sex={profile.sex}
                    dateOfBirth={profile.dateOfBirth}
                    relationship={profile.relationship}
                    numberphone={profile.numberphone}
                    address={profile.address}
                />
            </TouchableOpacity>
        )
    })

    return (
        <View>
            <TouchableOpacity className="flex-row m-4 mb-2 p-5 rounded-md bg-white shadow-md shadow-gray-500">
                <Text className="text-base font-bold w-11/12" style={{ color: "#24DCE2" }}>Thêm hồ sơ</Text>
                <Ionicons name="add-circle" size={24} color="#24DCE2" />
            </TouchableOpacity>
            <ScrollView className="mb-20">
                {listProfile}
                {
                    selected &&
                    <TouchableOpacity
                        className="m-auto w-1/3 p-2 mt-4 mb-8 rounded" style={{ backgroundColor: "#24DCE2" }}
                        onPress={chooseNext}
                    >
                        <Text className="text-white font-bold text-center">Tiếp theo</Text>
                    </TouchableOpacity>
                }

            </ScrollView>
        </View>
    )
}