import { StyleSheet, View, Image, Text, TouchableOpacity, ScrollView, Alert } from "react-native";
import React, { useState } from "react";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default function Scheduling({navigation}) {

    const [chosenTime, chooseTime] = useState(null);
    const [chosenDay, chooseDay] = useState(null);

    const choose = (time) => {
        chooseTime(time);
    }

    const chooseThisDay = (time) => {
        chooseDay(time);
    }

    const goToSchedulings = () => {
        if (chosenDay == null) {
            Alert.alert("Vui lòng chọn ngày khám.", "");
        }
        else if (chosenTime == null) {
            Alert.alert("Vui lòng chọn giờ khám.","");
        } else {
            navigation.navigate("Đặt lịch xét nghiệm");
        }
    };

    const daysInWeek = {
        0 : "Chủ nhật",
        1 : "Thứ 2",
        2 : "Thứ 3",
        3 : "Thứ 4",
        4 : "Thứ 5",
        5 : "Thứ 6",
        6 : "Thứ 7"
    };
    
    const days = [];

    const getDate = () => {
        let separator = "/";
        let date = new Date();
        let num = 7;

        while(num--) {     
            let dayInWeek = date.getDay();      
            let day = date.getDate();
            let month = date.getMonth() + 1;
            days.push({day: `${daysInWeek[dayInWeek]}`, date: `${day}${separator}${month<10?`0${month}`:`${month}`}`});
            date.setDate(date.getDate()+1);
        }

        days[0].day = "Hôm nay";
    }

    getDate();

    const times = ["05:30", "06:00", "06:30", "07:00", "07:30", "08:00", "08:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30",
    "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", ];

    TimeOption = (props) => {
        return (
            <>
            <TouchableOpacity onPress={() => choose(props.time)} style={chosenTime==props.time ? styles.focus : styles.none} className="m-auto mb-2 p-2 w-20 items-center text-center rounded-lg border">
                <Text style={chosenTime==props.time ? styles.textColor : styles.none} className="w-fit text-center font-medium justify-center">{props.name}</Text>
            </TouchableOpacity>
            </>
        )
    
    }

    const timeOptions=[];
    times.forEach((item) => {
        timeOptions.push(<TimeOption key={item} time={item} name={item} />)
    })


    DayOption = (props) => {
        return (
            <>
            <TouchableOpacity onPress={() => chooseThisDay(props.date)} style={chosenDay==props.date ? styles.focus : styles.none} className="mx-1 mt-2 px-2 py-4 w-20 items-center text-center rounded-lg border">
                <Text style={chosenDay==props.date ? styles.textColor : styles.none} className="w-fit m-auto text-center font-medium justify-center">{props.day}</Text>
                <Text style={chosenDay==props.date ? styles.textColor : styles.none} className="w-fit m-auto text-center font-medium justify-center">{props.date}</Text>
            </TouchableOpacity>
            </>
        )
    
    }

    const dayOptions=[];
    days.forEach((item) => {
        dayOptions.push(<DayOption key={item.date} day={item.day} date={item.date} />)
    })

    return (
        <KeyboardAwareScrollView>
            <ScrollView pagingEnabled={true}>

                <View className="my-2 mx-1 py-2 bg-white rounded-xl w-fit max-w-s shadow-sm">
                    <Text className="ml-2.5 text-slate-900 text-xl font-bold">
                        Thời gian lấy mẫu
                    </Text>
                    <View className="h-0.5 w-fit my-1 bg-gray-200" />
                    <Text style={styles.textColor} className="ml-2.5 mt-1 text-base font-semibold uppercase">
                        Ngày khám
                    </Text>

                    <ScrollView 
                    className="w-fit ml-2.5 mt-0.5" 
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    >
                        <View className="flex-row mb-3">
                                    {dayOptions}               
                        </View>
                    </ScrollView>
                    <View className="h-0.5 w-fit my-1 bg-gray-200" />

                    <Text style={styles.textColor} className="ml-2.5 mt-1 text-slate-900 text-base font-semibold uppercase">
                        Giờ khám
                    </Text>

                    <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap' }} className="mx-2.5 mt-2.5 mb-0.5">
                        {timeOptions}                    
                    </View>
                    <TouchableOpacity style={styles.bgColor} className="mx-3.5 mt-2.5 mb-2 w-fit p-2 text-center rounded-lg border" onPress={goToSchedulings}>
                            <Text className="text-white text-base text-center font-bold">Tiếp tục</Text>
                    </TouchableOpacity>
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
    focus: {
        borderColor: "#24DCE2",
        color: "#24DCE2",
    },
    none: {
        fontWeight: "normal",
        backgroundColor: "#FFFFFF",
        borderColor: "#526060",
        color: "#526060",
    },
  });