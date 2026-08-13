import {loginApi, validateTokenApi} from "../api/authApi";
import {getToken, removeToken, saveToken} from "./authStoreService";


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


export async function restoreAuth() {

    try {

        const token = await getToken();

        if (!token) {
            return {
                authenticated: false
            };
        }

        // Ask backend whether JWT is still valid
        const response = await validateTokenApi();

        if (response.status === 1) {

            return {
                authenticated: true,
                token
            };
        }

        await removeToken();

        return {
            authenticated: false
        };

    } catch (error) {

        console.log("restoreAuth()", error.message);

        await removeToken();

        return {
            authenticated: false
        };
    }
}


export async function logout() {
    await removeToken();
}
