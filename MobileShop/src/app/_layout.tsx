import {DarkTheme, DefaultTheme, Stack, ThemeProvider} from "expo-router";
import "../../global.css";
import {useColorScheme} from "react-native";


export default function RootLayout() {

    const colourScheme = useColorScheme();

    return (
        <ThemeProvider value={colourScheme === "dark" ? DarkTheme : DefaultTheme}>
            <Stack screenOptions={{headerShown: false}}/>
        </ThemeProvider>
    );

}
