import {changePasswordApi} from "../api/authApi";

export async function authPasswordChangeService({oldPassword, newPassword}) {

    try {

        const response = await changePasswordApi(oldPassword, newPassword);

        if (response.status === 1 && response.message === "success") return {success: true}

        return {
            success: false,
            message: response.message
        };

    } catch (error) {

        console.log("authService()", error.message);
        return {
            success: false,
            message: "Something went wrong"
        };
    }

}