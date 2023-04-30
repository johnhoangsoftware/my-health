import { io } from "socket.io-client";
import { BACKEND_HOST, BACKEND_PORT } from '@env'

const endpoint =  `http://${BACKEND_HOST}:${BACKEND_PORT}/api`
const socket = io.connect(endpoint);

export default function useSocket() {
    return socket
}