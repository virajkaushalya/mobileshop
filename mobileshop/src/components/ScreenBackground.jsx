import {View} from "react-native";

export default function ScreenBackground() {
    return (
        <>
            <View
                pointerEvents="none"
                className="absolute -left-24 bottom-16 h-64 w-64 rounded-full bg-accent/80"
            />
            <View
                pointerEvents="none"
                className="absolute right-[-80px] top-20 h-72 w-72 rounded-full bg-secondary/70"
            />
        </>
    );
}