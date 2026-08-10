import {DarkTheme, DefaultTheme, Stack, ThemeProvider} from "expo-router";
import "../../global.css";
import {useColorScheme} from "react-native";
import {AuthProvider, useAuth} from "../context/AuthContext";


function RootNavigator() {

    const {isLoading, isAuthenticated} = useAuth();

    if (isLoading) return null;

    return (
        <Stack screenOptions={{headerShown: false}}>

            <Stack.Protected guard={!isAuthenticated}>
                <Stack.Screen name="(auth)"/>
            </Stack.Protected>


            <Stack.Protected guard={isAuthenticated}>
                <Stack.Screen name="(tabs)"/>
                <Stack.Screen name="(views)"/>
                <Stack.Screen name="(profileOps)"/>
            </Stack.Protected>

        </Stack>
    );
}


export default function RootLayout() {

    const colourScheme = useColorScheme();

    return (
        <ThemeProvider value={colourScheme === "dark" ? DarkTheme : DefaultTheme}>
            <AuthProvider>
                <RootNavigator/>
            </AuthProvider>
        </ThemeProvider>
    );
}