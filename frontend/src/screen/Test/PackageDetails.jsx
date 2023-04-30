import { StyleSheet, View, Image, Text, TouchableOpacity, ScrollView  } from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import useAxios from '../../hooks/useAxios';

const Details = (props) => {
    const navigation = useNavigation()

    const goToSchedulings = () => {
        navigation.navigate("Chọn hồ sơ xét nghiệm", {testPackage: pack});
    };

    return (
        <View className="items-center w-full min-h-full">
            <View className="w-full h-60">
                <Image
                    src={props.imageURL}
                    className="object-cover w-full h-full overflow-hidden"
                    alt={props.title}
                />
            </View>
            <View className="-mt-2 p-4 bg-white rounded-t-xl w-full max-w-s shadow-sm">
                <Text className=" mb-2 text-slate-900 text-2xl font-bold">{props.title}</Text>
                <Text className="text-slate-900 text-base font-normal">
                Đơn vị cung cấp: {props.hospital}
                </Text>
                <Text className="text-slate-900 text-base font-normal">
                Địa chỉ: {props.address}
                </Text>
                <View className="h-px my-2 bg-gray-300" />
                <Text className="text-slate-900 text-base font-normal">
                    Giá đặt khám: {props.price}
                </Text>
                
                <TouchableOpacity style={styles.bgColor} className="w-full mt-2 p-2 text-center rounded-lg border"
                    onPress={goToSchedulings}
                    >
                    <Text className="text-white text-base text-center font-bold">Đặt lịch hẹn</Text>
                </TouchableOpacity>
            </View>

            <View className="mt-1.5 p-4 bg-white w-full max-w-s shadow-sm">
                <Text className="mb-1.5 text-slate-900 text-xl font-bold">Mô tả chi tiết</Text>
                <Text className="text-slate-900 text-base font-normal text-justify">
                {props.description}
                </Text>
            </View>
        </View>
)}

export default function PackageDetails({navigation, route}) {
    const id = route.params.id
    const [pack, setPackage] = React.useState({})
    const axios = useAxios()

    React.useEffect(() => {
        console.log("ID:", id)
        if (!id) {
            return
        }
        axios.get(`/test_package/${id}`)
            .then(res => res.data.data)
            .then(p => {
                setPackage({
                    id: p.testPackageId,
                    title: p.name,
                    hospital: p.hospital.name,
                    address: p.hospital.address,
                    imageURL: p.avatar || "https://insmart.com.vn/wp-content/uploads/2021/05/BV-108-2.jpg",
                    price: p.price,
                    description: p.description
                })
            })
            .catch(err => {
                console.log(JSON.stringify(err))
            })
    }, [id])

    return (
        <KeyboardAwareScrollView>
            <ScrollView pagingEnabled={true}>
                <Details key={`package-detail-${pack.id}`} id={pack.id}  title={pack.title} address={pack.address} hospital={pack.hospital} imageURL={pack.imageURL} price={pack.price} description={pack.description} />
            </ScrollView>
        </KeyboardAwareScrollView>  

    )
}

const styles = StyleSheet.create({ 
    bgColor: {
      backgroundColor: "#24DCE2",
      borderColor: "#24DCE2"
    },
  });