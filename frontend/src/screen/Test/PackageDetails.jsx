import { StyleSheet, View, Image, Text, TouchableOpacity, ScrollView  } from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


export default function PackageDetails({navigation}) {

    const goToSchedulings = () => {
        navigation.navigate("Đặt lịch hẹn");
    };

    const pack = {
        title: "Gói xét nghiệm tại nhà",
        hospital: "Bệnh viện Trung ương Quân đội 108",
        address: "1B Trần Hưng Đạo, Bạch Đằng, Hai Bà Trưng, Hà Nội",
        imageURL: "https://insmart.com.vn/wp-content/uploads/2021/05/BV-108-2.jpg",
        price: "500.000",
        description: "Lấy máu xét nghiệm tại nhà giúp khách hàng chủ động tầm soát bệnh lý định kỳ, sớm phát hiện các bệnh lý bất thường để từ đó có hướng điều trị phù hợp. Bên cạnh đó, dịch vụ còn giúp người bệnh theo dõi tiến triển của một số bệnh lý chuyển hóa như: đường máu, mỡ máu, men gan, gout,… từ đó bệnh nhân có hướng điều chỉnh chế độ ăn uống và sinh hoạt hợp lý, nâng cao chất lượng sức khỏe. \nGiá dịch vụ xét nghiệm tại nhà được niêm yết theo đúng bảng giá khách hàng sử dụng dịch vụ tại bệnh viện, phòng khám và chỉ chỉ mất thêm phụ phí đi lại là 500.000đ/ lần lấy mẫu và xét nghiệm."
    }

    const Details = (props) => {
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
                        Giá đặt khám: {props.price}đ
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

    return (
        <KeyboardAwareScrollView>
            <ScrollView pagingEnabled={true}>

                <Details key={pack.title} title={pack.title} address={pack.address} hospital={pack.hospital} imageURL={pack.imageURL} price={pack.price} description={pack.description} />
                
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