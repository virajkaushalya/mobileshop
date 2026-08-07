import {loginApi} from "../api/authApi";

let jwtToken = null;

export async function authService({username, password}) {

    try {

        const response = await loginApi(username, password);

        if (response.status === 1 && response.message === "success") {

            jwtToken = response.data.token;
            return {
                success: true,
                token: jwtToken
            };
        }

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
