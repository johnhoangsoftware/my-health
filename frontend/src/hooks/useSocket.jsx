import io from "socket.io-client/dist/socket.io.js";
//import { BACKEND_HOST, BACKEND_PORT } from '@env'
import React from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

const BACKEND_HOST = "192.168.1.10";
const BACKEND_PORT = 8080;

const endpoint = `http://${BACKEND_HOST}:${BACKEND_PORT}`
console.log("Socket endpoint", endpoint)
const socket = io(endpoint, {transports: ['websocket']});

export default function useSocket() {
    React.useEffect(() => {
        const handshakeListener = async (id) => {
            const u = await AsyncStorage.getItem('user')
            const userId = JSON.parse(u || {})?.id
            socket.emit("handshake", {userId, socketId: id})
        }
        socket.on("handshake", handshakeListener)
        
        return () => {
            socket.off("handshake", handshakeListener)
        }
    }, [])

    return socket
}