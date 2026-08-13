import {
    Pressable,
    TextInput,
    useColorScheme,
    View,
} from "react-native";
import FontAwesome from "@react-native-vector-icons/fontawesome";
import TextFieldErrorMessage from "./TextFieldErrorMessage";
import {useState} from "react";

const PasswordTextField = ({
                               value,
                               placeholder,
                               editable = true,
                               onChangeText,
                               readOnly = false,
                               errorMessage = "",
                               maxLength = null,
                           }) => {

    const [isPasswordVisible, setPasswordVisible] = useState(false);

    const colourScheme = useColorScheme();

    const placeholderColour =
        colourScheme === "dark"
            ? "hsl(219 9% 44%)"
            : "hsl(219 9% 44%)";

    const isError = Boolean(errorMessage);

    return (
        <View className="px-2 mb-4">

            <View
                className={`flex-row items-center rounded-2xl border border-border bg-card px-3 ${
                    isError
                        ? "border-red-600"
                        : ""
                }`}
            >

                <TextInput
                    className="flex-1 text-foreground"
                    value={value}
                    placeholder={placeholder}
                    placeholderTextColor={placeholderColour}
                    editable={editable}
                    onChangeText={onChangeText}
                    readOnly={readOnly}
                    maxLength={maxLength}
                    secureTextEntry={!isPasswordVisible}
                    autoCapitalize="none"
                    autoCorrect={false}
                    textContentType="password"
                />

                <Pressable
                    onPress={() =>
                        setPasswordVisible(!isPasswordVisible)
                    }
                    hitSlop={10}
                >
                    <FontAwesome
                        name={
                            isPasswordVisible
                                ? "eye-slash"
                                : "eye"
                        }
                        size={18}
                        style={{
                            color: "rgb(75 85 99 / 0.74)",
                        }}
                    />
                </Pressable>

            </View>

            {isError && (
                <TextFieldErrorMessage
                    errorMessage={errorMessage}
                    marginBottom="mb-0"
                />
            )}

        </View>
    );
};

export default PasswordTextField;