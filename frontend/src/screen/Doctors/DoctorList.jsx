import { StyleSheet, View, Image, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default function DoctorList({navigation}) {

    const [department, chooseDepartment] = useState("all");
    const [dName, setDName] = useState("Tất cả");

    const choose = (title) => {
        chooseDepartment(title);
        setDName(getDName(title));
    }

    const getDName = (title) => {
        let name = "";
        departments.forEach((item) => {if (item.tittle === title) name = item.name}); 
        if (name === "") {
            departments2.forEach((item) => {if (item.tittle === title) name = item.name;}); 
        }
        return name;
    } 

    const departments = [
        {
            name: "Tất cả",
            tittle: "all",
            image: require("./../../assets/department-icon/all.png")
        },
        {
            name: "Khoa chấn thương chỉnh hình",
            tittle: "bone",
            image: require("./../../assets/department-icon/bone.png")
        },
        {
            name: "Khoa khám bệnh",
            tittle: "check",
            image: require("./../../assets/department-icon/check.png")
        },
        {
            name: "Khoa đông y",
            tittle: "oriental",
            image: require("./../../assets/department-icon/oriental.png")
        },
        {
            name: "Khoa nội tổng quát",
            tittle: "internal",
            image: require("./../../assets/department-icon/internal.png")
        },
        {
            name: "Khoa thẩm mỹ",
            tittle: "beauty",
            image: require("./../../assets/department-icon/beauty.png")
        }
    ];
    const departments2 = [
        {
            name: "Khoa nhi",
            tittle: "kid",
            image: require("./../../assets/department-icon/kid.png")
        },
        {
            name: "Khoa ngoại tổng quát",
            tittle: "external",
            image: require("./../../assets/department-icon/external.png")
        },
        {
            name: "Khoa thần kinh",
            tittle: "brain",
            image: require("./../../assets/department-icon/brain.png")
        },
        {
            name: "Khoa mắt",
            tittle: "eyes",
            image: require("./../../assets/department-icon/eye.png")
        },
        {
            name: "Khoa chẩn đoán ảnh - chức năng",
            tittle: "photo",
            image: require("./../../assets/department-icon/photo.png")
        },
        {
            name: "Khoa vật lý trị liệu",
            tittle: "physical",
            image: require("./../../assets/department-icon/physical.png")
        }
    ];
    const doctors = [
        {
            name: "Nguyễn Thị A",
            department: "Khoa nhi",
            stars: 5,
            imageURL: "https://static.vecteezy.com/system/resources/previews/001/223/214/original/female-doctor-wearing-a-medical-mask-vector.jpg"
        },
        {
            name: "Nguyễn Văn A",
            department: "Khoa ngoại tổng quát",
            stars: 4,
            imageURL: "https://static.vecteezy.com/system/resources/previews/000/371/879/original/vector-a-doctor-at-clinic-background.jpg"
        },
        {
            name: "Nguyễn Thị B",
            department: "Khoa thần kinh",
            stars: 3,
            imageURL: "https://static.vecteezy.com/system/resources/previews/001/223/214/original/female-doctor-wearing-a-medical-mask-vector.jpg"
        },
        {
            name: "Nguyễn Văn B",
            department: "Khoa mắt",
            stars: 5,
            imageURL: "https://static.vecteezy.com/system/resources/previews/000/371/879/original/vector-a-doctor-at-clinic-background.jpg"
        },
        {
            name: "Nguyễn Thị C",
            department: "Khoa chẩn đoán ảnh - chức năng",
            stars: 4,
            imageURL: "https://static.vecteezy.com/system/resources/previews/001/223/214/original/female-doctor-wearing-a-medical-mask-vector.jpg"
        },
        {
            name: "Nguyễn Văn C",
            department: "Khoa vật lý trị liệu",
            stars: 5,
            imageURL: "https://static.vecteezy.com/system/resources/previews/000/371/879/original/vector-a-doctor-at-clinic-background.jpg"
        }
    ];

    const DepartmentOption = (props) => {
        return (
            <>
            <TouchableOpacity onPress={() => choose(props.tittle)} style={department==props.tittle ? styles.focus : styles.none} className="mt-2 p-2 h-20 w-40 flex-row items-center text-center rounded-lg border float-left">
                <View className="ml-2 bg-transparent h-16 w-16 rounded-full items-center justify-center">
                    <Image source={props.image} className='object-scale-down h-16 w-16 rounded-full' />
                </View>
                <Text style={department==props.tittle ? styles.textColor : styles.none} className="left-3 w-14 text-left break-normal font-medium justify-center">{props.name}</Text>
            </TouchableOpacity>
            <View style={{width: '1.25%'}}></View>
            </>
        )
    }

    const DoctorBrief = (props) => {
        return (
            <>
            <View className="h-0.5 w-full bg-gray-200" />
            <TouchableOpacity onPress={() => navigation.navigate("Thông tin bác sĩ")} style={department==props.tittle ? styles.focus : styles.none} className="p-2 h-20 w-full flex-row items-center text-center rounded-lg">
                <View className="ml-2 bg-transparent h-16 w-16 rounded-full items-center justify-center">
                    <Image src={props.image} className='object-scale-down h-16 w-16 rounded-full' />
                </View>
                <View className="left-3 w-full">
                    <Text className="w-fit text-left break-normal font-semibold justify-center">{props.name}</Text>
                    <View className="flex-row">
                        <MaterialIcons name={props.stars >= 1 ? "star" : "star-border"} size={25} style={props.stars >= 1 ? styles.starSelected : styles.starUnselected} />
                        <MaterialIcons name={props.stars >= 2 ? "star" : "star-border"} size={25} style={props.stars >= 2 ? styles.starSelected : styles.starUnselected} />
                        <MaterialIcons name={props.stars >= 3 ? "star" : "star-border"} size={25} style={props.stars >= 3 ? styles.starSelected : styles.starUnselected} />
                        <MaterialIcons name={props.stars >= 4 ? "star" : "star-border"} size={25} style={props.stars >= 4 ? styles.starSelected : styles.starUnselected} />
                        <MaterialIcons name={props.stars == 5 ? "star" : "star-border"} size={25} style={props.stars == 5 ? styles.starSelected : styles.starUnselected} />
                    </View>
                    <Text className="w-fit text-left break-normal font-normal justify-center">{props.department}</Text>
                    <View className="w-fit absolute ml-60 mt-4">
                        <Ionicons name="caret-forward" size={24} color="#24DCE2" />
                    </View>
                </View>
            </TouchableOpacity>
            <View style={{width: '1.25%'}}></View>
            </>
        )
    }

    const departmentOptions=[];
    departments.forEach((item) => {
        departmentOptions.push(<DepartmentOption tittle={item.tittle} name={item.name} image={item.image}/>)
    })
    const departmentOptions2=[];
    departments2.forEach((item) => {
        departmentOptions2.push(<DepartmentOption tittle={item.tittle} name={item.name} image={item.image}/>)
    })
    
    const doctorList=[];
    doctors.forEach((item) => {
        doctorList.push(<DoctorBrief key={item.name} name={item.name} department={item.department} stars={item.stars} image={item.imageURL}/>)
    })

    return (
        <KeyboardAwareScrollView>
            <ScrollView pagingEnabled={true}>

                <View className="mt-2 ml-1 mr-1 pt-2 bg-white rounded-xl w-fit max-w-s shadow-sm">
                    <Text style={styles.textColor} className="ml-2.5 text-slate-900 text-lg font-bold">
                        Chọn chuyên khoa
                    </Text>
                    <View className="h-0.5 w-full my-1 bg-gray-200" />

                    <ScrollView 
                    className="w-fit p-2 -mb-3 h-56" 
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    >
                        <View className="grid-rows-2 grid-flow-col">
                            <View className="flex-row mb-2 pr-20">
                                    {departmentOptions}               
                            </View>
                            <View className="flex-row pr-14">
                                    {departmentOptions2}               
                            </View>
                        </View>
                    </ScrollView>
                </View>
                
                <View className="mt-2 ml-1 mr-1 pt-2 bg-white rounded-xl w-fit max-w-s shadow-sm">
                    <Text style={styles.textColor} className="ml-2.5 mb-1 text-slate-900 text-lg font-bold">
                        Danh sách bác sĩ - {dName}
                    </Text>
                    {doctorList}
                    
                </View>

            </ScrollView>
        </KeyboardAwareScrollView>  

    )
}

const styles = StyleSheet.create({ 
    starUnselected: {
        color: "#aaa",
    },
    starSelected: {
        color: "#ffb300",
    },
    textColor: {
        color: "#24DCE2",
        fontWeight: "bold"
    },
    bgColor: {
        backgroundColor: "#24DCE2",
        borderColor: "#24DCE2"
    },
    focus: {
        borderColor: "#24DCE2",
        color: "#24DCE2",
        borderWidth: "4px"
    },
    none: {
        fontWeight: "normal"
    },
  });