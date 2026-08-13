import {useState} from "react";
import {passwordValidation} from "../validations/auth.validation";
import {authPasswordChangeService} from "../services/authPasswordChangeService";
import {router} from "expo-router";

export function useChangePassword() {

    const [oldPassError, setOldPassError] = useState("");
    const [newPassError, setNewPassError] = useState("");
    const [reNewPassError, setReNewPassError] = useState("");
    const [isProcessing, setIsProcessing] = useState(false);

    const changePassword = async (oldPassword, newPassword, reNewPassword) => {

        setIsProcessing(true);

        const {validationStatus: oldPassValid, errorMessage: oldPassErrorMsg} = passwordValidation(oldPassword);
        const {validationStatus: newPassValid, errorMessage: newPassErrorMsg} = passwordValidation(newPassword);
        const {validationStatus: reNewPassValid, errorMessage: reNewPassErrorMsg} = passwordValidation(reNewPassword);

        if (!oldPassValid) {
            setOldPassError(oldPassErrorMsg);
            setIsProcessing(false);
            return false;
        }
        setOldPassError('');


        // Chack if the old and new passwords are same
        if (oldPassword === newPassword) {
            setNewPassError('New password and old password cannot be same');
            setIsProcessing(false);
            return false;
        }


        if (!newPassValid) {
            setNewPassError(newPassErrorMsg);
            setIsProcessing(false);
            return false;
        }
        setNewPassError('');


        // Checks weather same password entered t new and re entered password
        if (newPassword !== reNewPassword) {
            setReNewPassError('New password and re entered password has to be identical');
            setIsProcessing(false);
            return false;
        }


        if (!reNewPassValid) {
            setReNewPassError(reNewPassErrorMsg);
            setIsProcessing(false);
            return false;
        }
        setReNewPassError('');


        // API call
        const result = await authPasswordChangeService({oldPassword: oldPassword, newPassword: newPassword});

        if (result.success === true) {
            router.replace('../(tabs)');
        } else {
            setOldPassError('Password change failed');
        }


        setIsProcessing(false);

        return result.success;
    }


    return {
        changePassword,
        oldPassError,
        newPassError,
        reNewPassError,
        isProcessing,
    }
}