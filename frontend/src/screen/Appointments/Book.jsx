import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import React from "react";

export default function Book({ navigation, route }) {
    const { profile, hospital, department } = route.params;

    const [selectedDate, setSelectedDate] = React.useState(null);
    const [selectedHour, setSelectedHour] = React.useState(null);
    const dates = [];

    const getNextDay = (date) => {
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        if (day == 31 && month == 12) {
            return new Date(year + 1, 0, 1);
        }
        if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
            if (day == 29 && month == 2) {
                return new Date(year, 2, 1);
            }
        }
        if ((month == 1 || month == 3 || month == 5 || month == 7
            || month == 8 || month == 10 || month == 12) && day == 31) {
            return new Date(year, month, 1);
        }
        if ((month == 4 || month == 6 || month == 9 || month == 11) && day == 30) {
            return new Date(year, month, 1)
        }
        if (month == 2 && day == 28) {
            return new Date(year, 2, 1);
        }
        return new Date(year, month - 1, day + 1);
    }

    const convertNumbertoDay = (val) => {
        switch (val) {
            case 0: return "Chủ nhật";
            case 1: return "Thứ hai";
            case 2: return "Thứ ba";
            case 3: return "Thứ tư";
            case 4: return "Thứ năm";
            case 5: return "Thứ sáu";
            case 6: return "Thứ bảy";
        }
    }

    let date = new Date();
    for (let i = 0; i < 7; i++) {
        dates.push({
            date: date.toDateString(),
            day: convertNumbertoDay(date.getDay()),
            shortDate: date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear(),
        })
        date = getNextDay(date);
    }

    const DateBox = (props) => {
        return (
            <TouchableOpacity
                className="items-center bg-slate-100 w-1/4 rounded-md p-2 m-2 border border-gray-200"
                onPress={() => { setSelectedDate(props) }}
                style={(selectedDate != null && selectedDate.date == props.date) ? styles.focus : null}
            >
                <Text className="font-bold" style={(selectedDate != null && selectedDate.date == props.date) ? styles.textColor : null}>{props.day}</Text>
                <Text style={(selectedDate != null && selectedDate.date == props.date) ? styles.textColor : null}>{props.shortDate}</Text>
            </TouchableOpacity>
        )
    }

    const listDate = [];
    dates.forEach((d) => {
        listDate.push(
            <DateBox key={d.date} date={d.date} day={d.day} shortDate={d.shortDate} />
        )
    })

    const hours = [
        { hour: "7:00", available: true },
        { hour: "7:30", available: true },
        { hour: "8:00", available: false },
        { hour: "8:30", available: true },
        { hour: "9:00", available: false },
        { hour: "9:30", available: true },
        { hour: "10:00", available: true },
        { hour: "11:30", available: true },
        { hour: "14:00", available: false },
        { hour: "14:30", available: true },
        { hour: "15:00", available: false },
        { hour: "15:30", available: false },
        { hour: "16:00", available: false },
        { hour: "16:30", available: true },
    ]
    const HourBox = (props) => {
        if (props.available) {
            return (
                <TouchableOpacity
                    className="items-center bg-slate-100 w-1/5 rounded-md p-2 m-2 border border-gray-200"
                    onPress={() => { setSelectedHour(props.hour) }}
                    style={(selectedHour != null && selectedHour == props.hour) ? styles.focus : null}
                >
                    <Text style={(selectedHour != null && selectedHour == props.hour) ? styles.textColor : null}>{props.hour}</Text>
                </TouchableOpacity>
            )
        }
        return (
            <View
                className="items-center bg-gray-300 w-1/5 rounded-md p-2 m-2 border border-gray-300"
            >
                <Text>{props.hour}</Text>
            </View>
        )
    }

    const listHour = [];
    hours.forEach((h) => {
        listHour.push(
            <HourBox key={h.hour} hour={h.hour} available={h.available} />
        )
    })

    const chooseNext = () => {
        navigation.navigate("Xác nhận", { profile: profile, hospital: hospital, department: department, date: selectedDate, hour: selectedHour })
    }

    return (
        <View className="flex-1">
            <View className="bg-white mt-3">
                <Text className="text-lg font-bold ml-8 mt-2">Ngày khám</Text>
                <View className="flex flex-row flex-wrap items-center justify-center w-screen overflow-hidden my-2">
                    {listDate}
                </View>
            </View>
            {selectedDate &&
                <View className="bg-white mt-3">
                    <Text className="text-lg font-bold ml-8 mt-2">Giờ khám</Text>
                    <View className="flex flex-row flex-wrap items-center justify-center w-screen overflow-hidden my-2">
                        {listHour}
                    </View>
                </View>
            }
            {
                (selectedDate && selectedHour) &&
                <TouchableOpacity
                    className="m-auto w-1/3 p-2 mt-4 mb-8 rounded" style={{ backgroundColor: "#24DCE2" }}
                    onPress={chooseNext}
                >
                    <Text className="text-white font-bold text-center">Tiếp theo</Text>
                </TouchableOpacity>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    textColor: {
        color: "white",
    },
    focus: {
        backgroundColor: "#24DCE2",
        borderColor: "#24DCE2",
        borderTopColor: "#24DCE2",
        borderBottomColor: "#24DCE2"
    },

});