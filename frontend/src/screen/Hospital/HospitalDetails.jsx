import { StyleSheet, View, Image, Text, TouchableOpacity, ScrollView  } from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


export default function HospitalDetails({navigation}) {

    const goToSchedulings = () => {
        navigation.navigate("Đặt lịch hẹn");
    };

    const hospital = {
        title: "Bệnh viện Trung ương Quân đội 108",
        address: "1B Trần Hưng Đạo, Bạch Đằng, Hai Bà Trưng, Hà Nội",
        imageURL: "https://insmart.com.vn/wp-content/uploads/2021/05/BV-108-2.jpg",
        description: "Bệnh viện TWQĐ 108 được thành lập ngày 1 tháng 4 năm 1951. Trải qua hai cuộc kháng chiến chống giặc ngoại xâm, chiến tranh bảo vệ Tổ quốc và thời kỳ đổi mới xây dựng đất nước, Bệnh viện đã hoàn thành xuất sắc nhiệm vụ cứu chữa và chăm sóc sức khỏe cho bộ đội và nhân dân, đóng góp xứng đáng cho ngành Quân y, nền y học nước nhà và thắng lợi vĩ đại chung của toàn dân tộc. \nNgày nay, Bệnh viện TWQĐ 108 phát triển không ngừng, chính quy, khoa học và hiện đại; là Bệnh viện đa khoa, chuyên khoa sâu, tuyến cuối toàn quân, Bệnh viện hạng đặc biệt quốc gia, cơ sở bảo vệ, chăm sóc sức khỏe cho các đồng chí lãnh đạo cao cấp nhất của Đảng, Nhà nước, Quân đội ta và nước bạn Lào, Campuchia. \nViện nghiên cứu khoa học y dược lâm sàng và đào tạo sau đại học tới bậc học tiến sĩ. "
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
                    Địa chỉ: {props.address}
                    </Text>
                    <View className="h-px my-2 bg-gray-300" />
                    
                    <TouchableOpacity style={styles.bgColor} className="w-full mt-2 p-2 text-center rounded-lg border"
                        onPress={goToSchedulings}
                        >
                        <Text className="text-white text-base text-center font-bold">Đặt khám</Text>
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

                <Details key={hospital.title} title={hospital.title} address={hospital.address} hospital={hospital.title} imageURL={hospital.imageURL} description={hospital.description} />
                
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