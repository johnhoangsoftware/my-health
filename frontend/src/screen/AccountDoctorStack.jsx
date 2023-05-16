import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import AccountDoctor from "./Tabs/AccountDoctor";
import ListHospital from "./Account/ListHospital";
import HospitalDetails from "./Hospital/HospitalDetails";
import ListDoctor from "./Account/ListDoctor";
import DoctorDetails from "./Doctors/DoctorDetails";
import ChangePassword from "./Account/ChangePassword";
import Notification from "./Tabs/Notification";

const Stack = createStackNavigator();
export default function AccountDoctorStack() {
    return (
        <Stack.Navigator initialRoutName="AccountDoctor">
            <Stack.Screen
                name="AccountDoctor"
                component={AccountDoctor}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Danh sách bệnh viện"
                component={ListHospital}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Thông tin bệnh viện"
                component={HospitalDetails}
                options={{
                    headerTintColor: "#24dce2",
                    headerTitleStyle: { color: "#000000" },
                    headerBackTitle: "Trở về"
                }}
                navigationOptions={({ navigation, route }) => ({
                    headerLeft: (
                        <Ionicons
                            labelVisible={false}
                            title="Trở về"
                            style={{ color: "#24dce2" }}
                        />
                    ),
                })}
            />
            <Stack.Screen
                name="Danh sách bác sĩ"
                component={ListDoctor}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Thông tin bác sĩ"
                component={DoctorDetails}
                options={{
                    headerTintColor: "#24dce2",
                    headerTitleStyle: { color: "#000000" },
                    headerBackTitle: "Trở về"
                }}
                navigationOptions={({ navigation, route }) => ({
                    headerLeft: (
                        <Ionicons
                            labelVisible={false}
                            title="Trở về"
                            style={{ color: "#24dce2" }}
                        />
                    ),
                })}
            />
            <Stack.Screen
                name="Đổi mật khẩu"
                component={ChangePassword}
            />
            
        </Stack.Navigator>
    )
}