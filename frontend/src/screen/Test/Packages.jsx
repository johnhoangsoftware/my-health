import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default function Packages({navigation}) {
    const goToPackageDetails = () => {
        navigation.navigate("Chi tiết gói khám");
    };

    const goToSchedulings = () => {
        navigation.navigate("Đặt lịch hẹn");
    };

    const packages = [
        {
            title: "Gói xét nghiệm tại nhà",
            image: require("./../../assets/demo-img/hospital.jpg"),
            price: "500.000"
        },
        {
            title: "Gói thăm khám tổng quát tại nhà",
            image: require("./../../assets/demo-img/hospital.jpg"),
            price: "500.000"
        },
        {
            title: "Gói thăm khám và xét nghiệm tại nhà",
            image: require("./../../assets/demo-img/hospital.jpg"),
            price: "700.000"
        },
    ];

    PackageBrief = (props) => {
        return (
        <View className="mt-2 ml-1 mr-1 bg-white rounded-xl w-fit max-w-s shadow-sm">
            <View className="w-fit m-2 -mb-4 h-56">
                <Image
                    source={props.image}
                    className="object-cover w-full rounded-xl"
                    alt={props.title}
                />
            </View>
            <View className="m-3 mt-0 mb-2 flex">
                <Text className="text-slate-900 text-lg font-bold">
                    {props.title}
                </Text>
                <Text className="text-slate-900 text-base -mt-1 font-normal">
                    Giá đặt khám: {props.price}đ
                </Text>
                <View className="flex-row">
                    <TouchableOpacity style={styles.borderColor} className="mt-2 p-2 text-center rounded-lg border float-left"
                        onPress={goToPackageDetails}
                        >
                        <Text style={styles.textColor} className="text-center text-base font-bold">Xem chi tiết</Text>
                    </TouchableOpacity>
                    <View style={{width: '4%'}}></View>
                    <TouchableOpacity style={styles.bgColor} className="mt-2 p-2 text-center rounded-lg border float-right"
                        onPress={goToSchedulings}
                        >
                        <Text className="text-white text-base text-center font-bold">Đặt lịch hẹn</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )}

    const packageList = [];
    packages.forEach((pack) => {
        packageList.push(<PackageBrief key={pack.title} title={pack.title} image={pack.image} price={pack.price}/>)
    })


    return (
        <KeyboardAwareScrollView>
            <ScrollView pagingEnabled={true}>
                <View className="items-center">

                    {packageList}
            
                </View>
            </ScrollView>
        </KeyboardAwareScrollView>  
    )
}


const styles = StyleSheet.create({ 
    textColor: {
      color: "#24DCE2"
    },
    bgColor: {
      backgroundColor: "#24DCE2",
      borderColor: "#24DCE2",
      width: "48%"
    },
    borderColor: {
        borderColor: "#24DCE2",
        width: "48%"
    },
  });