import {useAuth} from "../context/AuthContext";

export function useLogout() {

    const {logout} = useAuth();

    const logoutUser = async () => {
        logout();
    }

    return {logoutUser};
}