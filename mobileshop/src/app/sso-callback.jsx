import SignInScreen from "@/app/(auth)/sign-in";
import {Redirect} from "expo-router";

// export default function SsoCallbackScreen() {
//
//     return (
//         <SignInScreen/>
//     )
// }

const SsoCallbackScreen = () => {

    if (true) {
        return <Redirect href={"/"} />;
    }

    return <Redirect href={"/(auth)/sign-in"} />;
    
}

export default SsoCallbackScreen;