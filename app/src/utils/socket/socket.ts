import { io } from "socket.io-client";
import { baseURL } from "../axios/axios";

export const socket = io(baseURL);
