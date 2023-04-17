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
import Notification from './Notifications/Notification';
import Scheduling from './Test/Scheduling';
import Search from './Search/Search';
import ViewSchedules from './Schedule/ViewSchedules';
import ConfirmTest from './Test/Confirm';
import ListProfileTest from './Test/ListProfile';

const Stack = createStackNavigator();
export default function HomeStack() {
    return (
        <Stack.Navigator initialRoutName="Home">
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
            
            <Stack.Screen name="Tìm kiếm" component={Search} options={{headerShown: false}}// headerLeft: () => <Ionicons title="Trở về" size={30} color={'#24dce2'} name={'arrow-back-outline'} />}}
            navigationOptions={({ navigation, route }) => ({
                headerLeft:
                    (<Ionicons labelVisible={false} title="Trở về" style={styles.Color} />)
            })} />
            <Stack.Screen name="Thông báo" component={Notification} 
            navigationOptions={({ navigation, route }) => ({
                headerLeft:
                    (<Ionicons labelVisible={false} title="Trở về" style={styles.Color} />)
            })} />
            <Stack.Screen name="Xét nghiệm tại nhà" component={Packages}  
            navigationOptions={({ navigation, route }) => ({
                headerLeft:
                    (<Ionicons labelVisible={false} title="Trở về" style={styles.Color} />)
            })} />
            <Stack.Screen name="Xem lịch khám" component={ViewSchedules} 
            navigationOptions={({ navigation, route }) => ({
                headerLeft:
                    (<Ionicons labelVisible={false} title="Trở về" style={styles.Color} />)
            })} />
            <Stack.Screen name="Chi tiết gói khám" component={PackageDetails} 
            navigationOptions={({ navigation, route }) => ({
                headerLeft:
                    (<Ionicons labelVisible={false} title="Trở về" style={styles.Color} />)
            })} />
            <Stack.Screen name="Chọn hồ sơ xét nghiệm" component={ListProfileTest}
                navigationOptions={({ navigation, route }) => ({
                    headerLeft:
                        (<Ionicons labelVisible={false} title="Trở về" style={styles.Color} />)
                })} />
            <Stack.Screen name="Chọn lịch xét nghiệm" component={Scheduling} 
            navigationOptions={({ navigation, route }) => ({
                headerLeft:
                    (<Ionicons labelVisible={false} title="Trở về" style={styles.Color} />)
            })} />
            <Stack.Screen name="Xác nhận gói khám" component={ConfirmTest}
            navigationOptions={({ navigation, route }) => ({
                headerLeft:
                    (<Ionicons labelVisible={false} title="Trở về" style={styles.Color} />)
            })} />
            <Stack.Screen name="Danh sách bác sĩ" component={DoctorList} 
            navigationOptions={({ navigation, route }) => ({
                headerLeft:
                    (<Ionicons labelVisible={false} title="Trở về" style={styles.Color} />)
            })} />
            <Stack.Screen name="Thông tin bác sĩ" component={DoctorDetails} 
            navigationOptions={({ navigation, route }) => ({
                headerLeft:
                    (<Ionicons labelVisible={false} title="Trở về" style={styles.Color} />)
            })} />
            <Stack.Screen name="Thông tin bệnh viện" component={HospitalDetails} 
            navigationOptions={({ navigation, route }) => ({
                headerLeft:
                    (<Ionicons labelVisible={false} title="Trở về" style={styles.Color} />)
            })} />
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