import {useState} from "react";
import {passwordValidation, usernameValidation} from "../validations/auth.validation";
import {useAuth} from "../context/AuthContext";

export function useSignIn() {
    const [usernameError, setUsernameError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [isSigningIn, setSigningIn] = useState(false);

    const {login} = useAuth();


    const signIn = async (username, password) => {

        setSigningIn(true);

        const {validationStatus: usernameValid, errorMessage: usernameMessage} = usernameValidation(username);
        const {validationStatus: passwordValid, errorMessage: passwordMessage} = passwordValidation(password);

        if (!usernameValid) {
            setUsernameError(usernameMessage);
            setSigningIn(false);
            return false;
        }
        setUsernameError("");

        if (!passwordValid) {
            setPasswordError(passwordMessage);
            setSigningIn(false);
            return false;
        }
        setPasswordError("");


        // API login here
        // Login through AuthContext
        const result = await login(username, password);

        if (!result.success) setUsernameError("Username or Password is Incorrect");

        setSigningIn(false);

        return result.success;
    };


    return {
        signIn,
        usernameError: usernameError,
        passwordError,
        isSigningIn,
    };
}