import {Pressable, Text, View} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import {useState} from "react";
import {Stack} from "expo-router";

import PasswordTextField from "../../components/PasswordTextField";
import TitleDescriptionTile from "../../components/TitleDescriptionTile";
import ScreenBackground from "../../components/ScreenBackground";
import {useChangePassword} from "../../hooks/useChangePassword";

const ChangePassword = () => {

    const [oldPass, setOldPass] = useState("");
    const [newPass, setNewPass] = useState("");
    const [reNewPass, setReNewPass] = useState("");

    const {
        changePassword,
        oldPassError,
        newPassError,
        reNewPassError,
        isProcessing,
    } = useChangePassword();

    return (
        <View className="flex-1">

            <Stack.Screen
                options={{
                    title: "CHANGE PASSWORD",
                }}
            />

            <ScreenBackground/>


            <SafeAreaView className="flex-1">

                <View className="px-5 pt-4">

                    <TitleDescriptionTile
                        title="Change Your Password"
                        description="Make sure a new password needs at least one capital letter, simple letter, number and a special character. Minimum length should be 8 characters"
                    />

                </View>

                <View className="mt-6 px-2">

                    <PasswordTextField
                        value={oldPass}
                        placeholder="Enter Old Password"
                        onChangeText={setOldPass}
                        errorMessage={oldPassError}
                    />

                    <PasswordTextField
                        value={newPass}
                        placeholder="Enter New Password"
                        onChangeText={setNewPass}
                        errorMessage={newPassError}
                    />

                    <PasswordTextField
                        value={reNewPass}
                        placeholder="Re-enter New Password"
                        onChangeText={setReNewPass}
                        errorMessage={reNewPassError}
                    />

                    <Pressable
                        className="mx-4 mt-1 items-center justify-center rounded-full border border-primary/60 bg-primary/30 py-2.5"
                        disabled={isProcessing}
                        onPress={() =>
                            changePassword(
                                oldPass,
                                newPass,
                                reNewPass
                            )
                        }
                    >
                        <Text className="text-foreground">
                            {isProcessing
                                ? "Password Change in progress..."
                                : "Change Password"}
                        </Text>
                    </Pressable>

                </View>

            </SafeAreaView>

        </View>
    );
};

export default ChangePassword;