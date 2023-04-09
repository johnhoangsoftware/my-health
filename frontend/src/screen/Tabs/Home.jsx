import { View, Text, TouchableOpacity, ScrollView, TextInput, StyleSheet, Image } from "react-native"
import React from "react";
import { Ionicons } from "@expo/vector-icons"
import { LinearGradient } from "expo-linear-gradient";


export default function Home({navigation}) {
    const [search, setSearch] = React.useState({
        inputSearch: null,
        isSearch: false
    })

    const hospitals = [
        {
            name: "Bệnh viện Trung ương Quân đội 108",
            address: "1B Trần Hưng Đạo, Bạch Đằng, Hai Bà Trưng, Hà Nội",
            imageURL: "https://insmart.com.vn/wp-content/uploads/2021/05/BV-108-2.jpg"
        },
        {
            name: "Bệnh viện Bạch Mai",
            address: "Số 78 đường Giải Phóng, Phương Mai, Đống Đa, Hà Nội, ",
            imageURL: "https://bcp.cdnchinhphu.vn/Uploaded/hoangtrongdien/2020_02_18/kh%C3%A1m-b%E1%BB%87nh-%E1%BB%9F-b%E1%BB%87nh-vi%E1%BB%87n-B%E1%BA%A1ch-Mai-1-1024x449.jpg"
        },
        {
            name: "Bệnh viện E Hà Nội",
            address: "89 Trần Cung, Nghĩa Tân, Cầu Giấy, Hà Nội",
            imageURL: "https://image.congan.com.vn/thumbnail/CATP-480-2020-8-19/bv-e.jpg"
        },
        {
            name: "Bệnh viện Răng Hàm Mặt Trung ương Hà Nội",
            address: "40B Tràng Thi, Hoàn Kiếm, Hà Nội",
            imageURL: "https://thuocdantoc.vn/wp-content/uploads/2019/07/benh-vien-rang-ham-mat-trung-uong-ha-noi.jpg"
        },
        {
            name: "Bệnh viện Đa khoa Y học cổ truyền",
            address: "Số 8 đường Phạm Hùng, Cầu Giấy, Hà Nội",
            imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLPvRsbo3PT_vfP2ITEPhc3HuObPosxH0BkHK3BXRgAK5ctccIqf23kM8lwdDhzI0_8gc&usqp=CAU"
        },
    ];
    const hospitalList = [];
    hospitals.forEach((hospital) => {
        hospitalList.push(
            <InfoHospital key={hospital.name} name={hospital.name} address={hospital.address} imageURL={hospital.imageURL} />)
    })

    const items = [
        {
            title: "Xét nghiệm tại nhà",
            image: require("./../../assets/home-icon/blood-test.png")
        },
        {
            title: "Xem lịch khám",
            image: require("./../../assets/home-icon/calendar.png")
        },
        {
            title: "Danh sách bác sĩ",
            image: require("./../../assets/home-icon/shortlist.png")
        },
    ];
    const itemList=[];

    items.forEach((item) => {
        itemList.push(<Item key={item.title} title={item.title} image={item.image} />)
    })
    
    const searchChange = (val) => {
        if (val.length != 0) {
            setSearch({
              inputSearch: val,
              isSearch: true
            });
        } else {
            setSearch({
                inputSearch: val,
                isSearch: false
            });
        }
    }

    const searchInfo = () => {
        // todo: search screen
    }

    const notification = () => {
        // todo: notification screen
    }

    return ( 
        <ScrollView
                horizontal={false}
                showsVerticalScrollIndicator={true}
            >
            <LinearGradient 
                colors={['#ffffff', 'rgba(36, 220, 226, 0.5)']}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                className="w-100"
            >
                <View className="flex-row items-center mt-10 mx-5 space-x-2">
                    <View className='bg-gray-200 rounded-full px-3 py-1 w-80 flex-row items-center'>
                        {search.isSearch ?
                        <Ionicons name='search' size={20} color="black" />
                        : <Ionicons name='search' size={20} color="gray" />
                        }
                    
                        <TextInput 
                        className="pl-2" placeholder='Nhập tên bác sĩ/bệnh viên'
                        onChangeText={(val) => searchChange(val)}
                        onEndEditing={() => searchInfo()}
                        />
                    </View>  
                    <TouchableOpacity onPress={() => notification()}>
                        <Ionicons name="notifications-outline" size={28} />
                    </TouchableOpacity>
                </View>
                
                <Text className="font-bold mx-5 mt-5 text-xl" >Đặt khám</Text>
                <ScrollView 
                    className="flex-1 m-5 mt-3" 
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    >
                    {hospitalList}
                </ScrollView>
                <View>
                    {itemList}
                </View>
            
            </LinearGradient>
        </ScrollView>
    );
}

const InfoHospital = (props) => {
    return (
        <View className="bg-white rounded-xl w-40 h-64 mr-4">
            <Image 
                src={props.imageURL}
                className="object-scale-down w-40 h-28 rounded-t-xl overflow-hidden"                
                />
            <View className="px-2 py-1 space-y-1">
                <Text className="font-semibold h-9" numberOfLines={2}>{props.name}</Text>
                <Text className="text-gray-500 text-xs h-12" numberOfLines={3}>{props.address}</Text>
                <TouchableOpacity >
                    <Text className="font-semibold text-base bg-cyan-400 rounded-full text-center text-white m-1 p-1">Đặt khám</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const Item = (props) => {
    return (
        <View className="bg-white mx-5 mb-5 h-24 flex-row items-center rounded-lg">
            <View className="ml-2 bg-cyan-100 h-16 w-16 rounded-full items-center justify-center">
                <Image source={props.image} className='object-scale-down h-10 w-10' />
            </View>
            <Text className="ml-3 font-semibold text-lg">{props.title}</Text>
            <View className="right-3 absolute">
                <Ionicons name="caret-forward" size={24} color="#24DCE2" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    scrollView: {
        top: 100,
        height: 100,
    },
    img: {
        borderRadius: 40,
        overflow: "hidden",
        resizeMode: "cover"
    }
  });