import Home from './Tabs/Home';
import Packages from './Test/Packages';
import PackageDetails from './Test/PackageDetails';
import DoctorList from './Doctors/DoctorList';
import DoctorDetails from './Doctors/DoctorDetails';
import HospitalDetails from './Hospital/HospitalDetails';
import { createStackNavigator } from '@react-navigation/stack';
import ListProfile from './Appointments/ListProfile';

import { Ionicons } from "@expo/vector-icons";
import { AppointmentContext } from '../component/context';
import React from 'react';
import ListDepartment from './Appointments/ListDepartment';
import Book from './Appointments/Book';
import Confirm from './Appointments/Confirm';

const Stack = createStackNavigator();
export default function HomeStack() {
    return (
        <Stack.Navigator initialRoutName="Home">
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Stack.Screen name="Xét nghiệm tại nhà" component={Packages} options={{ headerLeft: () => <Ionicons title="Trở về" size={30} color={'#24dce2'} name={'arrow-back-outline'} /> }} />
            {/* // navigationOptions={({ navigation, route }) => ({headerLeft: 
          //   (<Ionicons labelVisible={false} title="Trở về" style={styles.Color} // color={'#24dce2'} size={30} name={'arrow-back-outline'}
          //     onPress={() => {
          //       navigation.goBack();
          //     }}
          //   />)
          // })} /> */}
            <Stack.Screen name="Chi tiết gói khám" component={PackageDetails} options={{ headerLeft: () => <Ionicons title="Trở về" size={30} color={'#24dce2'} name={'arrow-back-outline'} /> }} />
            <Stack.Screen name="Danh sách bác sĩ" component={DoctorList} options={{ headerLeft: () => <Ionicons title="Trở về" size={30} color={'#24dce2'} name={'arrow-back-outline'} /> }} />
            <Stack.Screen name="Thông tin bác sĩ" component={DoctorDetails} options={{ headerLeft: () => <Ionicons title="Trở về" size={30} color={'#24dce2'} name={'arrow-back-outline'} /> }} />
            <Stack.Screen name="Thông tin bệnh viện" component={HospitalDetails} options={{ tabBarButton: () => null, headerLeft: () => <Ionicons title="Trở về" size={30} color={'#24dce2'} name={'arrow-back-outline'} /> }} />

            <Stack.Screen name="Chọn hồ sơ" component={ListProfile}
                navigationOptions={({ navigation, route }) => ({
                    headerLeft:
                        (<Ionicons labelVisible={false} title="Trở về" style={styles.Color} />)
                })} />
            <Stack.Screen name="Chọn chuyên khoa" component={ListDepartment}
                navigationOptions={({ navigation, route }) => ({
                    headerLeft:
                        (<Ionicons labelVisible={false} title="Trở về" style={styles.Color} />)
                })} />
            <Stack.Screen name="Đặt lịch" component={Book}
                navigationOptions={({ navigation, route }) => ({
                    headerLeft:
                        (<Ionicons labelVisible={false} title="Trở về" style={styles.Color} />)
                })} />
                <Stack.Screen name="Xác nhận" component={Confirm}
                navigationOptions={({ navigation, route }) => ({
                    headerLeft:
                        (<Ionicons labelVisible={false} title="Trở về" style={styles.Color} />)
                })} />
        </Stack.Navigator>
    )
}