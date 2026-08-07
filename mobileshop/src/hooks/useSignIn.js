import {useState} from "react";
import {passwordValidation, usernameValidation} from "../validations/auth.validation";
import {authService} from "../services/authService";
import {router} from "expo-router";

export function useSignIn() {
    const [usernameError, setUsernameError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [isSigningIn, setSigningIn] = useState(false);


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
        // await authService.login(username,password)
        const result = await authService({username: username, password: password});

        if (result.success === true) {
            router.replace('../(tabs)');
        } else {
            setUsernameError('Username or Password is Incorrect');
        }

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