import {useState} from "react";
import {imagePickerService} from "../services/imagePickerService";
import {Alert} from "react-native";

export default function useImagePicker() {
    const [image, setImage] = useState();

    const addImage = async (source) => {

        try {

            const result = await imagePickerService(source);

            if (!result) return;

            setImage({
                id: `${result.assets[0].uri}-${Date.now()}`,
                uri: result.assets[0].uri,
            });

        } catch (error) {

            if (error.message === "PERMISSION_DENIED") {
                Alert.alert(
                    "Permission Required",
                    "Please allow access so you can attach the bank deposit receipt."
                );
            } else {
                Alert.alert(
                    "Something went wrong",
                    "Unable to pick an image."
                );

                console.error(error);
            }
        }

    };

    const removeImage = () => {
        setImage(null);
    };

    return {
        image,
        addImage,
        removeImage,
    };
}