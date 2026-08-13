import axios from "axios";
import {getToken} from "../services/authStoreService";

// const  BASE_URL = "http://10.0.2.2";  // Android Emulator
// const  BASE_URL = "http://localhost"; // iOS Simulator
const BASE_URL = "http://192.168.8.106"; // Redmi Mobile


const client = axios.create({
    baseURL: `${BASE_URL}/MobileShopAPI/api/api.php`,
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
    },
});

client.interceptors.request.use(
    async (config) => {
        const token = await getToken();

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default client;