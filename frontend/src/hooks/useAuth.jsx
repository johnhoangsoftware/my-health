import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';

export default async function useAuth() {
    const user = await AsyncStorage.getItem('user')
    return JSON.parse(user || "{}")
}