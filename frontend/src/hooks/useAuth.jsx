import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';

<<<<<<< HEAD
export default function useAuth() {
    let user = {}
    (async function() {
        user = await AsyncStorage.getItem('user')
    })()
    return JSON.parse(user)
=======
export default async function useAuth() {
    const user = await AsyncStorage.getItem('user')
    return JSON.parse(user || "{}")
>>>>>>> BE-HoangAnh
}