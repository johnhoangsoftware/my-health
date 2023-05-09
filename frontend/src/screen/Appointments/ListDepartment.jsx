import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import * as Animatable from 'react-native-animatable';
import React from "react";

export default function ListDepartment({ route, navigation }) {
    const { profile, hospital } = route.params;

    const [selected, setSelected] = React.useState(null);

    const choose = (department) => {
        setSelected(department)
    }

    const DepartmentOption = (props) => {
        return (
            <>
                <TouchableOpacity
                    onPress={() => choose(props)}
                    className="m-2 p-2 h-20 w-2/5 flex-row items-center text-center rounded-lg float-left bg-white shadow-sm"
                    style={(selected != null && selected.title == props.title) ? styles.focus : styles.none}
                >
                    <View className="ml-1 bg-slate-50 h-16 w-16 rounded-full items-center justify-center">
                        <Animatable.View className="bg-gray-100 h-16 w-16 rounded-full items-center justify-center" animation="fadeIn" easing="ease-in-out-quad" iterationCount={10}></Animatable.View>
                        <Image source={props.image} className='object-scale-down h-16 w-16 rounded-full absolute' />
                    </View>
                    <Text
                        style={(selected != null && selected.title == props.title) ? styles.textColor : styles.none}
                        className="left-2 w-16 text-left break-normal font-medium justify-center"
                        numberOfLines={3}
                    >
                        {props.name}
                    </Text>
                </TouchableOpacity>
            </>
        )
    }

    const departments = [
        {
            name: "Khoa nội tim mạch",
            title: "heart",
            image: require("./../../assets/department-icon/heart.png")
        },
        {
            name: "Khoa đông y",
            title: "oriental",
            image: require("./../../assets/department-icon/oriental.png")
        },
        {
            name: "Khoa nội tổng quát",
            title: "internal",
            image: require("./../../assets/department-icon/internal.png")
        },
        {
            name: "Khoa thẩm mỹ",
            title: "beauty",
            image: require("./../../assets/department-icon/beauty.png")
        },
        {
            name: "Khoa sản",
            title: "obstetrics",
            image: require("./../../assets/department-icon/obstetrics.png")
        },
        {
            name: "Khoa răng hàm mặt",
            title: "tooth",
            image: require("./../../assets/department-icon/tooth.png")
        },
        {
            name: "Khoa cấp cứu",
            title: "emergency",
            image: require("./../../assets/department-icon/emergency.png")
        },
        {
            name: "Khoa xét nghiệm",
            title: "blood",
            image: require("./../../assets/department-icon/blood.png")
        },
        {
            name: "Khoa da liễu",
            title: "skin",
            image: require("./../../assets/department-icon/skin.png")
        },
        {
            name: "Khoa tâm lý",
            title: "mental",
            image: require("./../../assets/department-icon/mental.png")
        },
        {
            name: "Khoa chấn thương chỉnh hình",
            title: "bone",
            image: require("./../../assets/department-icon/bone.png")
        },
        {
            name: "Khoa khám bệnh",
            title: "check",
            image: require("./../../assets/department-icon/check.png")
        },
        {
            name: "Khoa nhi",
            title: "kid",
            image: require("./../../assets/department-icon/kid.png")
        },
        {
            name: "Khoa thần kinh",
            title: "brain",
            image: require("./../../assets/department-icon/brain.png")
        },
        {
            name: "Khoa mắt",
            title: "eyes",
            image: require("./../../assets/department-icon/eye.png")
        },
    ];

    const departmentList = [];
    for (i = 0; i < departments.length; i += 2) {
        if (i + 1 < departments.length) {
            item1 = departments.at(i);
            item2 = departments.at(i + 1);
            departmentList.push(
                <View className="w-screen flex-row justify-center">
                    <DepartmentOption key={item1.title} title={item1.title} name={item1.name} image={item1.image} />
                    <DepartmentOption key={item2.title} title={item2.title} name={item2.name} image={item2.image} />
                </View>
            )
        } else {
            item = departments.at(i)
            departmentList.push(
                <View className="w-screen flex-row justify-center">
                    <DepartmentOption key={item.title} title={item.title} name={item.name} image={item.image} />
                </View>
            )
        }
    }

    const chooseNext = () => {
        navigation.navigate("Đặt lịch", { profile: profile, hospital: hospital, department: selected })
    }

    return (
        <View className="items-center">
            <ScrollView className="w-screen mb-8">
                {departmentList}
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

const styles = StyleSheet.create({
    textColor: {
        color: "white",
        fontWeight: "bold"
    },
    focus: {
        backgroundColor: "#24DCE2",
    },
    none: {
        fontWeight: "normal"
    },
});