import { TouchableOpacity, View, Text, KeyboardAvoidingView } from "react-native"
import { FontAwesome5 } from "@expo/vector-icons"
import { ScrollView, TextInput } from "react-native-gesture-handler";
import React from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function CreateMedicalRecord() {
    const [data, setData] = React.useState({
        fullname: null,
        gender: "Nam",
        dateOfBirth: null,
        relationship: null,
        phone: null,
        address: null
    })

    const [checkData, setCheckData] = React.useState({
        fullname: true,
        dateOfBirth: true,
        relationship: true,
        phone: true,
        address: true

    })
    const checkDateOfBirth = (val) => {
        var d_reg = /^([0-9]{4})\/(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])$/;
        if (d_reg.test(val)) {
            console.log("Date follows mm/dd/yyyy format");
        }
        else {
            console.log("Invalid date format");
        }
    }

    const submit = () => {
        if (data.fullname == null) {
            setCheckData({ ...data, fullname: false })
        } else {
            setCheckData({ ...data, fullname: true })
        }
        if (data.dateOfBirth == null) {
            setCheckData({ ...data, dateOfBirth: false })
        } else {
            setCheckData({ ...data, dateOfBirth: true })
        }
        if (data.relationship == null) {
            setCheckData({ ...data, relationship: false })
        } else {
            setCheckData({ ...data, relationship: true })
        }
        if (data.phone == null) {
            setCheckData({ ...data, phone: false })
        } else {
            setCheckData({ ...data, phone: true })
        }
        if (data.address == null) {
            setCheckData({ ...data, address: false })
        } else {
            setCheckData({ ...data, address: true })
        }
        checkDateOfBirth(data.dateOfBirth)
    }

    return (
        <KeyboardAwareScrollView className="h-screen bg-white p-3 space-y-2">
            <ScrollView>
                <View className="mt-2 mx-2">
                    <Text>Họ và tên</Text>
                    <TextInput
                        className="rounded-lg border border-gray-400 p-1 my-1 px-3"
                        placeholder="Nhập họ tên"
                        onChangeText={(val) => setData({ ...data, fullname: val })}
                    />
                    {!checkData.fullname && <Text className="text-red-500">Vui lòng điền trường này</Text>}
                </View>
                <View className="mt-2 mx-2">
                    <Text>Giới tính</Text>
                    <View className="flex-row space-x-3">
                        {
                            data.gender == "Nam" ?
                                <FontAwesome5 name="dot-circle" size={24} color="#24DCE2" />
                                :
                                <TouchableOpacity
                                    onPress={() => setData({ ...data, gender: "Nam" })}
                                >
                                    <FontAwesome5 name="circle" size={24} color="gray" />
                                </TouchableOpacity>
                        }
                        <Text>Nam</Text>
                        {
                            data.gender == "Nữ" ?
                                <FontAwesome5 name="dot-circle" size={24} color="#24DCE2" /> :
                                <TouchableOpacity onPress={() => setData({ ...data, gender: "Nữ" })} >
                                    <FontAwesome5 name="circle" size={24} color="gray" />
                                </TouchableOpacity>
                        }
                        <Text>Nữ</Text>
                    </View>
                </View>
                <View className="mt-2 mx-2">
                    <Text>Ngày sinh</Text>
                    <TextInput
                        className="rounded-lg border border-gray-400 p-1 my-1 px-3"
                        placeholder="yyyy/MM/dd"
                        onChangeText={(val) => setData({ ...data, dateOfBirth: val })}
                    />
                    {!checkData.dateOfBirth && <Text className="text-red-500">Vui lòng điền trường này</Text>}
                </View>
                <View className="mt-2 mx-2">
                    <Text>Mối quan hệ</Text>
                    <TextInput
                        className="rounded-lg border border-gray-400 p-1 my-1 px-3"
                        placeholder="Bố, Mẹ,..."
                        onChangeText={(val) => setData({ ...data, relationship: val })}
                    />
                    {!checkData.relationship && <Text className="text-red-500">Vui lòng điền trường này</Text>}
                </View>
                <View className="mt-2 mx-2">
                    <Text>Số điện thoại</Text>
                    <TextInput
                        className="rounded-lg border border-gray-400 p-1 my-1 px-3"
                        placeholder="0982xxxxxxx"
                        onChangeText={(val) => setData({ ...data, phone: val })}
                    />
                    {!checkData.phone && <Text className="text-red-500">Vui lòng điền trường này</Text>}
                </View>
                <View className="mt-2 mx-2">
                    <Text>Địa chỉ</Text>
                    <TextInput
                        className="rounded-lg border border-gray-400 p-1 my-1 px-3"
                        placeholder="Số 19 ngõ 8 đường X, ...."
                        onChangeText={(val) => setData({ ...data, address: val })}
                    />
                    {!checkData.address && <Text className="text-red-500">Vui lòng điền trường này</Text>}
                </View>
                <View className="items-center">
                    <TouchableOpacity
                        className="my-5 py-2 items-center w-3/5 rounded-lg"
                        style={{ backgroundColor: "#24DCE2" }}
                        onPress={() => submit()}
                    >
                        <Text className="text-white font-bold">Tạo hồ sơ</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </KeyboardAwareScrollView>
    )
}