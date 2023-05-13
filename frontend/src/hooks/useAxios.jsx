import axios from 'axios'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
//import { BACKEND_HOST, BACKEND_PORT } from '@env'
import { useNavigation } from '@react-navigation/native'
const BACKEND_HOST = "192.168.1.10";
const BACKEND_PORT = 8080;
console.log(`http://${BACKEND_HOST}:${BACKEND_PORT}/api`)
const instance = axios.create({
    baseURL: `http://${BACKEND_HOST}:${BACKEND_PORT}/api`,
    withCredentials: true,
})

const getToken = async() => {
    return await AsyncStorage.getItem("userToken")
}

export default function useAxios() {
    const navigation = useNavigation()

    React.useEffect(() => {
        const requestIntercept = instance.interceptors.request.use(async(config) => {
            config.headers.Authorization = `Bearer ${await getToken()}`;
            return config;
        }, (err) => {
            return Promise.reject(err);
        })

        const responseIntercept = instance.interceptors.response.use((response) => {
            if (response.status === 403 || response.status === 400) {
                navigation.navigate("LoginScreen")
                return 
            }
            return response;
        }, (err) => {
            return Promise.reject(err);
        })

        return () => {
            instance.interceptors.request.eject(requestIntercept)
            instance.interceptors.response.eject(responseIntercept)
        }
    }, [])

    return instance
}