import axios from "axios";
import {getToken} from "../services/authStoreService";

const apiClient = axios.create({
    baseURL: "http://10.0.2.2/MobileShopAPI/api/api.php",
    timeout: 10000,
    headers: {
        "Content-Type": "application/json"
    }
});

apiClient.interceptors.request.use(
    (config) => {

        const token = getToken();

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default apiClient;