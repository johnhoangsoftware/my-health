import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Account from "./Tabs/Account";
import ListHospital from "./Account/ListHospital";
import HospitalDetails from "./Hospital/HospitalDetails";
import ListDoctor from "./Account/ListDoctor";
import DoctorDetails from "./Doctors/DoctorDetails";
import ChangePassword from "./Account/ChangePassword";
import CreateMedicalRecord from "./Appointments/CreateMedicalRecord";

const Stack = createStackNavigator();
export default function AccountStack() {
    return (
        <Stack.Navigator initialRoutName="Account">
            <Stack.Screen
                name="Account"
                component={Account}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Hồ sơ khám bệnh"
                component={CreateMedicalRecord}
            />
            <Stack.Screen
                name="Đổi mật khẩu"
                component={ChangePassword}
            />
        </Stack.Navigator>
    )
}