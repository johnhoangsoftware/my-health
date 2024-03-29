import { View, Text, TouchableOpacity } from "react-native"
import { Ionicons } from '@expo/vector-icons';
import { ScrollView } from "react-native-gesture-handler";
import Profile from "../../component/Utils/Profile";
import useAxios from "../../hooks/useAxios";
import React, { useEffect } from "react";
import useSocket from "../../hooks/useSocket";

const toProfile = (profile) => {
    return {
        id: profile.medicalRecordId,
        fullname: profile.name,
        sex: profile.gender,
        dateOfBirth: profile.birthDay.split('T')[0],
        relationship: profile.relationship,
        numberphone: profile.phone,
        address: profile.address
    }
}

export default function ListProfile({ navigation, route }) {
    const onlyShow = route.params.onlyShow || false
    const [selected, setSelected] = React.useState(null);
    const [profiles, setProfiles] = React.useState([])
    const axios = useAxios()
    const socket = useSocket()

    useEffect(() => {
        axios.get("/patient/medical_record")
            .then(res => res.data.data)
            .then(data => {
                setProfiles(data.map(profile => toProfile(profile)))
            })
            .catch(err => {
                console.log(JSON.stringify(err))
            })
    }, [])
    
    useEffect(() => {
        const deleteMedicalRecordListener = (id) => {
            setProfiles(prev => prev.filter(i => i.id !== id))
        }

        const newMedicalRecord = (data) => {
            console.log(data)
            setProfiles(prev => [...prev, toProfile(data)])
        }

        socket.on('delete medical record', deleteMedicalRecordListener)
        socket.on('medical record', newMedicalRecord)
        return () => {
            socket.off('delete medical record', deleteMedicalRecordListener)
            socket.off('medical record', newMedicalRecord)
        }
    }, [socket])

    const { hospital } = route.params;

    const chooseNext = () => {
        navigation.navigate("Chọn chuyên khoa", { profile: selected, hospital: hospital })
    }

    return (
        <View>
            <TouchableOpacity
                onPress={() => { navigation.navigate("Tạo hồ sơ") }}
                className="flex-row m-4 mb-2 p-5 rounded-md bg-white shadow-sm"
            >
                <Text className="text-base font-bold w-11/12" style={{ color: "#24DCE2" }}>Thêm hồ sơ</Text>
                <Ionicons name="add-circle" size={24} color="#24DCE2" />
            </TouchableOpacity>
            <ScrollView className="mb-20">
                {
                    profiles.map(profile => {
                        return (
                            onlyShow ?
                                <Profile
                                    key={profile.id}
                                    selected={selected != null && profile.id == selected.id}
                                    id={profile.id}
                                    fullname={profile.fullname}
                                    sex={profile.sex}
                                    dateOfBirth={profile.dateOfBirth}
                                    relationship={profile.relationship}
                                    numberphone={profile.numberphone}
                                    address={profile.address}
                                    onlyShow={onlyShow}
                                />
                                :
                                <TouchableOpacity key={profile.id} onPress={() => { setSelected(profile) }}>
                                    <Profile
                                        selected={selected != null && profile.id == selected.id}
                                        id={profile.id}
                                        fullname={profile.fullname}
                                        sex={profile.sex}
                                        dateOfBirth={profile.dateOfBirth}
                                        relationship={profile.relationship}
                                        numberphone={profile.numberphone}
                                        address={profile.address}
                                        onlyShow={onlyShow}
                                    />
                                </TouchableOpacity>
                        )
                    })
                }
                {
                    !onlyShow && selected &&
                    <TouchableOpacity
                        className="m-auto w-1/3 p-2 mt-4 mb-8 rounded" style={{ backgroundColor: "#24DCE2" }}
                        onPress={chooseNext}
                    >
                        <Text className="text-white font-bold text-center">Tiếp theo</Text>
                    </TouchableOpacity>
                }

            </ScrollView>
        </View>
    )
}