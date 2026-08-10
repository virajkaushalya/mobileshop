import {createContext, useContext, useEffect, useState} from "react";
import {authService, restoreAuth, logout as logoutService} from "../services/authService";


const AuthContext = createContext(null);

export function AuthProvider({children}) {

    const [isLoading, setIsLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [token, setToken] = useState(null);


    useEffect(() => {
        initializeAuth();
    }, []);


    async function initializeAuth() {

        try {

            const result = await restoreAuth();

            setIsAuthenticated(result.authenticated);

            if (result.authenticated) {
                setToken(result.token);
            }

        } finally {
            setIsLoading(false);
        }
    }


    async function login(username, password) {

        const result = await authService({username, password});

        if (result.success) {
            setIsAuthenticated(true);
            setToken(result.token);
        }

        return result;
    }


    async function logout() {

        await logoutService();

        setToken(null);
        setIsAuthenticated(false);
    }


    return (
        <AuthContext.Provider
            value={{
                isLoading,
                isAuthenticated,
                token,
                login,
                logout
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}


export function useAuth() {

    return useContext(AuthContext);
}