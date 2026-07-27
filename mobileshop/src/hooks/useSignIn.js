import {useState} from "react";
import {emailValidation, passwordValidation} from "../validations/auth.validation";

export function useSignIn() {
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [isSigningIn, setSigningIn] = useState(false);


    const signIn = async (email, password) => {

        setSigningIn(true);

        const {validationStatus: emailValid, errorMessage: emailMessage} = emailValidation(email);
        const {validationStatus: passwordValid, errorMessage: passwordMessage} = passwordValidation(password);

        if (!emailValid) {
            setEmailError(emailMessage);
            setSigningIn(false);
            return false;
        }
        setEmailError("");

        if (!passwordValid) {
            setPasswordError(passwordMessage);
            setSigningIn(false);
            return false;
        }
        setPasswordError("");


        // API login here
        // await authService.login(email,password)

        // setSigningIn(false);

        return true;
    };


    return {
        signIn,
        emailError,
        passwordError,
        isSigningIn,
    };
}