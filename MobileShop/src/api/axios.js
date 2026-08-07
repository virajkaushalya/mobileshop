import axios from "axios";

export default axios.create({
    baseURL: "https://localhost:8080",
    timeout: 10000,
})