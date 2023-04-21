import { StyleSheet, View, Image, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default function Notification({navigation}) {

    const drugs = [
        {
            name: "2 viên bù nước",
            time: "09:30",
            date: "Hôm nay",
        },
        {
            name: "1 viên hoạt huyết",
            time: "09:30",
            date: "Hôm nay",
        },
        {
            name: "1 viên vitamin sau ăn",
            time: "11:30",
            date: "Hôm nay",
        }
    ];

    const checkSchedules = [
        {
            name: "Xét nghiệm máu",
            time: "07:30",
            date: "Hôm nay",
        },
        {
            name: "Khám tổng quát định kỳ",
            time: "09:30",
            date: "10/5",
        }
    ];

    const DrugNoti = (props) => {
        return (
            <>
            <View className="h-0.5 w-full bg-gray-200" />
            <TouchableOpacity className="px-2 py-1 h-16 w-full flex-row items-center text-center rounded-lg">
                <View className="ml-2 border-gray-600 h-6 w-6 rounded-full items-center justify-center border">
                    {/* <Image alt="Overdue" source={require("../../assets/home-icon/past.png")} className='object-scale-down h-6 w-6 rounded-full'/> */}
                </View>
                <View className="left-3 w-full flex-row">
                    <Text className="w-2/3 h-fit my-auto text-left break-normal font-semibold justify-center">{props.name}</Text>
                    <View className="w-1/5 float-right mr-3">
                        <Text className="text-right break-normal font-semibold justify-center">{props.date=="Hôm nay" ? props.time : props.time + ",\n" + props.date}</Text>
                    </View>
                </View>
            </TouchableOpacity>
            </>
        )
    }

    const ScheduleNoti = (props) => {
        return (
            <>
            <View className="h-0.5 w-full bg-gray-200" />
            <TouchableOpacity className="px-2 py-1 h-16 w-full flex-row items-center text-center rounded-lg">
                <View className="ml-2 border-gray-600 h-6 w-6 rounded-full items-center justify-center border">
                    {/* <Image alt="Overdue" source={require("../../assets/home-icon/past.png")} className='object-scale-down h-6 w-6 rounded-full'/> */}
                </View>
                <View className="left-3 w-full flex-row">
                    <Text className="w-2/3 h-fit my-auto text-left break-normal font-semibold justify-center">{props.name}</Text>
                    <View className="w-1/5 float-right mr-3">
                        <Text className="text-right break-normal font-semibold justify-center">{props.date=="Hôm nay" ? props.time : props.time + ",\n" + props.date}</Text>
                    </View>
                </View>
            </TouchableOpacity>
            </>
        )
    }

    const drugList=[];
    drugs.forEach((item) => {
        drugList.push(<DrugNoti key={item.name} name={item.name} time={item.time} date={item.date} />)
    })

    const checkNotiList=[];
    checkSchedules.forEach((item) => {
        checkNotiList.push(<ScheduleNoti key={item.name} name={item.name} time={item.time} date={item.date} />)
    })

    return (
        <KeyboardAwareScrollView>
            <ScrollView pagingEnabled={true}>
                
                <View className="mt-2 mx-2 pt-2 bg-white rounded-xl w-fit max-w-s shadow-sm">
                    <Text style={styles.textColor} className="ml-2.5 mb-1 text-slate-900 text-lg font-bold">
                        Lịch uống thuốc
                    </Text>
                    {drugList}                    
                </View>

                <View className="m-2 pt-2 bg-white rounded-xl w-fit max-w-s shadow-sm">
                    <Text style={styles.textColor} className="ml-2.5 mb-1 text-slate-900 text-lg font-bold">
                        Lịch khám
                    </Text>
                    {checkNotiList}                    
                </View>
              
            </ScrollView>
        </KeyboardAwareScrollView>  

    )
}

const styles = StyleSheet.create({ 
    textColor: {
        color: "#24DCE2",
        fontWeight: "bold"
    },
    bgColor: {
        backgroundColor: "#24DCE2",
        borderColor: "#24DCE2"
    },
  });