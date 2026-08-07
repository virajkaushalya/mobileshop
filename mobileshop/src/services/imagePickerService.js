import * as ImagePicker from "expo-image-picker"
import {Alert} from "react-native";

export async function imagePickerService(source) {

    const permissionResult = (source === "camera")
        ? await ImagePicker.requestCameraPermissionsAsync()
        : await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permissionResult.granted) {
        Alert.alert(
            "Permission required",
            "Please allow access so you can attach the bank deposit receipt."
        );
        return;
    }

    const result = (source === "camera")
        ? await ImagePicker.launchCameraAsync({
            mediaTypes: ["images"],
            quality: 0.85
        })
        : await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ["images"],
            allowsMultipleSelection: false,
            quality: 0.85
        })

    if (result.canceled) return null

    return result

}