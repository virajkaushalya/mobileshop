import apiClient from "./client";

export const loginApi = async (username, password) => {

    const response = await apiClient.post(
        '',
        {
            request_type:"userLogin",
            username,
            password
        }
    );


    return response.data;
};