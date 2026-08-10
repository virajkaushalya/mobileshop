import {loginApi} from "../api/authApi";
import {saveToken} from "./authStoreService";


export async function authService({username, password}) {

    try {

        const response = await loginApi(username, password);

        if (response.status === 1 && response.message === "success") {

            const jwtToken = response.data.token;
            await saveToken(jwtToken);

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
