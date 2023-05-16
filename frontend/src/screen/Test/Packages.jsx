import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import useAxios from "../../hooks/useAxios";

export default function Packages({ navigation }) {
    const axios = useAxios();
    const [packages, setPackages] = React.useState([]); // [1]
    const goToPackageDetails = (pack) => {
        navigation.navigate("Chi tiết gói khám", { testPackage: pack });
    };

    const goToSchedulings = (pack) => {
        navigation.navigate("Hồ sơ xét nghiệm", { testPackage: pack });
    };


    React.useEffect(() => {
        axios.get("/test_package")
            .then(res => res.data.data)
            .then(data => {
                setPackages(data.map(pk => ({
                    id: pk.testPackageId,
                    title: pk.name,
                    hospital: pk.hospital.name,
                    address: pk.hospital.address,
                    image: require("./../../assets/demo-img/hospital.jpg"),
                    price: pk.price,
                    description: pk.description
                })))
            })
    }, [])
    // console.log("Packages:", packages, " sizes:", packages.length)

    // const packages = [
    //     {
    //         title: "Gói xét nghiệm tại nhà",
    //         hospital: "Bệnh viện Trung ương Quân đội 108",
    //         image: require("./../../assets/demo-img/hospital.jpg"),
    //         price: "500.000"
    //     },
    //     {
    //         title: "Gói thăm khám tổng quát tại nhà",
    //         hospital: "Bệnh viện Trung ương Quân đội 108",
    //         image: require("./../../assets/demo-img/hospital.jpg"),
    //         price: "500.000"
    //     },
    //     {
    //         title: "Gói thăm khám và xét nghiệm tại nhà",
    //         hospital: "Bệnh viện Trung ương Quân đội 108",
    //         image: require("./../../assets/demo-img/hospital.jpg"),
    //         price: "700.000"
    //     },
    // ];

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
                            onPress={() => goToPackageDetails(props)}
                        >
                            <Text style={styles.textColor} className="text-center text-base font-bold">Xem chi tiết</Text>
                        </TouchableOpacity>
                        <View style={{ width: '4%' }}></View>
                        <TouchableOpacity style={styles.bgColor} className="mt-2 p-2 text-center rounded-lg border float-right"
                            onPress={() => goToSchedulings(props)}
                        >
                            <Text className="text-white text-base text-center font-bold">Đặt lịch hẹn</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }

    const packageList = [];
    packages.forEach((pack) => {
        packageList.push(<PackageBrief key={`package-${pack.id}`} id={pack.id} title={pack.title} image={pack.image} price={pack.price} />)
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