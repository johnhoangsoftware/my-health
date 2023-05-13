import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import useAxios from "../../hooks/useAxios";
//import { getDepartmentItemFromName } from "./../../component/Utils/DepartmentChecker";

export default function ListDepartment({ route, navigation }) {
    const { profile, hospital } = route.params;
    const [departments, setDepartments] = React.useState([]);
    const [selected, setSelected] = React.useState(null);
    const axios = useAxios()

    const checkDepartments = [
        {
            key: "heart",
            name: "Khoa nội tim mạch",
            title: "heart",
            image: require("./../../assets/department-icon/heart.png")
        },
        {
            key : "oriental",
            name: "Khoa đông y",
            title: "oriental",
            image: require("./../../assets/department-icon/oriental.png")
        },
        {
            key : "medicine",
            name: "Khoa dược",
            title: "medicine",
            image: require("./../../assets/department-icon/medicine.png")
        },
        {
            key:    "internal",
            name: "Khoa nội tổng quát",
            title: "internal",
            image: require("./../../assets/department-icon/internal.png")
        },
        {
            key: "external",
            name: "Khoa ngoại tổng quát",
            title: "external",
            image: require("./../../assets/department-icon/check.png")
        },
        {
            key : "beauty",
            name: "Khoa thẩm mỹ",
            title: "beauty",
            image: require("./../../assets/department-icon/beauty.png")
        },
        {
            key: "obstetrics",
            name: "Khoa sản",
            title: "obstetrics",
            image: require("./../../assets/department-icon/obstetrics.png")
        },
        {
            key: "tooth",
            name: "Hóa răng hàm mặt",
            title: "tooth",
            image: require("./../../assets/department-icon/tooth.png")
        },
        {
            key: "ear",
            name: "Khoa tai mũi họng",
            title: "ear",
            image: require("./../../assets/department-icon/ear.png")
        },
        {
            key: "emergency",
            name: "Khoa cấp cứu",
            title: "emergency",
            image: require("./../../assets/department-icon/emergency.png")
        },
        {
            key : "blood",
            name: "Khoa xét nghiệm",
            title: "blood",
            image: require("./../../assets/department-icon/blood.png")
        },
        {
            key: "skin",
            name: "Khoa da liễu",
            title: "skin",
            image: require("./../../assets/department-icon/skin.png")
        },
        {
            key: "mental",
            name: "Khoa tâm lý",
            title: "mental",
            image: require("./../../assets/department-icon/mental.png")
        },
        {
            key: "bone",
            name: "Khoa chấn thương chỉnh hình",
            title: "bone",
            image: require("./../../assets/department-icon/bone.png")
        },
        {
            key: "check",
            name: "Khoa khám bệnh",
            title: "check",
            image: require("./../../assets/department-icon/check.png")
        },
        {
            key : "kid",
            name: "Khoa Nhi",
            title: "kid",
            image: require("./../../assets/department-icon/kid.png")
        },
        {
            key : "brain",
            name: "Khoa thần kinh",
            title: "brain",
            image: require("./../../assets/department-icon/brain.png")
        },
        {
            key: "eyes",
            name: "Khoa mắt",
            title: "eyes",
            image: require("./../../assets/department-icon/eye.png")
        },
    ];

    function getDepartmentItemFromName(name) {
        var defaultItem =         {
            key: "eyes",
            name: "Khoa mắt",
            title: "eyes",
            image: require("./../../assets/department-icon/eye.png")
        }
        //var defaultItem = "heart";
        for (var i = 0; i < checkDepartments.length; i++) {
            if (checkDepartments.at(i).name == name) {
                // console.log(checkDepartments.at(i).name, " ", name, "=> ", checkDepartments.at(i).name == name, "=> ", checkDepartments.at(i));
                defaultItem = checkDepartments.at(i);
            }
        }
        
        // checkDepartments.forEach((item) => {
        //     if (item.name == name) {
        //         defaultItem = item;
        //     }
        // })
        return defaultItem;
    }

    const choose = (department) => {
        setSelected(department)
    }

    React.useEffect(() => {
        console.log("Hospital Id",hospital);
        axios.get(`/hospital/${hospital.id}/department`)
            .then(res => res.data.data)
            .then(data => {
                
                setDepartments(data.map(department => ({
                    key: department.departmentId,
                    name: department.name,
                    title: getDepartmentItemFromName(department.name).title,
                    image: getDepartmentItemFromName(department.name).image
                })))
            }).catch(function (err) {
                console.error(err);
            })
    }, [])

    const DepartmentOption = (props) => {
        console.log("Props key:" , props)
        return (
            <>
                <TouchableOpacity
                    onPress={() => choose(props)}
                    className="m-2 p-2 h-20 w-2/5 flex-row items-center text-center rounded-lg float-left bg-white shadow-sm"
                    style={(selected != null && selected.id == props.id) ? styles.focus : styles.none}
                >
                    <View className="ml-2 bg-slate-100 h-16 w-16 rounded-full items-center justify-center">
                        <Image source={props.image} className='object-scale-down h-16 w-16 rounded-full' />
                    </View>
                    <Text
                        style={(selected != null && selected.id == props.id) ? styles.textColor : styles.none}
                        className="left-3 w-14 text-left break-normal font-medium justify-center"
                        numberOfLines={3}
                    >
                        {props.name}
                    </Text>
                </TouchableOpacity>
            </>
        )
    }



    const departmentList = [];

    for (i = 0; i < departments.length; i += 2) {
        if (i + 1 < departments.length) {
            item1 = departments.at(i);
            item2 = departments.at(i + 1);
            departmentList.push(
                <View className="w-screen flex-row justify-center">
                    <DepartmentOption key={item1.key} id = {item1.key}  title={item1.title} name={item1.name} image={item1.image}  />
                    <DepartmentOption key={item2.key} id = {item2.key} title={item2.title} name={item2.name} image={item2.image} />
                </View>
            )
        } else {
            item = departments.at(i)
            departmentList.push(
                <View className="w-screen flex-row justify-center">
                    <DepartmentOption key={item.key} id={item.key} title={item.title} name={item.name} image={item.image} />
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