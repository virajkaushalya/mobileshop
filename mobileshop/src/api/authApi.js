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


export const changePasswordApi = async (oldPassword, newPassword) => {

    const response = await  apiClient.post(
        '',
        {
            request_type:"changePassword",
            oldPassword,
            newPassword
        }
    );

    return response.data;

}


export const validateTokenApi = async () => {

    const response = await apiClient.post(
        '',
        {
            request_type: "validateToken"
        }
    );

    return response.data;
};