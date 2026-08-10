import {Pressable, Text, View} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import SingleLineTextField from "../../components/SingleLineTextField";
import {useState} from "react";
import TitleDescriptionTile from "../../components/TitleDescriptionTile";
import ScreenBackground from "../../components/ScreenBackground";
import {Stack} from "expo-router";
import {useChangePassword} from "../../hooks/useChangePassword";

const ChangePassword = () => {

    const [oldPass, setOldPass] = useState("");
    const [newPass, setNewPass] = useState("");
    const [reNewPass, setReNewPass] = useState("");

    const {changePassword, oldPassError, newPassError, reNewPassError, isProcessing} = useChangePassword();

    return (
        <View className={'flex-1'}>

            <Stack.Screen options={{title: 'Change Password'.toUpperCase()}}/>

            <ScreenBackground/>

            <SafeAreaView className={'flex-1'}>

                <View className={'flex-1'}/>

                <TitleDescriptionTile
                    className={'ml-5 mb-4'}
                    title={'Change Your Password'}
                    description={'Make sure a new password needs at least one capital letter, simple letter, number and a special character. Minimum length should be 8 characters'}
                />

                <View className={'flex-1 mx-2'}>

                    <SingleLineTextField
                        isHaveTitle={false}
                        value={oldPass}
                        placeholder={'Enter Old Password'}
                        editable={true}
                        keyboardType="password"
                        secureTextEntry={true}
                        onChangeText={(value) => setOldPass(value)}
                        errorMessage={oldPassError}
                    />

                    <SingleLineTextField
                        isHaveTitle={false}
                        value={newPass}
                        placeholder={'Enter New Password'}
                        editable={true}
                        keyboardType="password"
                        secureTextEntry={true}
                        onChangeText={(value) => setNewPass(value)}
                        errorMessage={newPassError}
                    />

                    <SingleLineTextField
                        isHaveTitle={false}
                        value={reNewPass}
                        placeholder={'Re-enter New Password'}
                        editable={true}
                        keyboardType="password"
                        secureTextEntry={true}
                        onChangeText={(value) => setReNewPass(value)}
                        errorMessage={reNewPassError}
                    />

                    <Pressable
                        className={'bg-primary/30 justify-center items-center py-2.5 mx-4 mt-4 rounded-full border border-primary/60'}
                        disabled={isProcessing}
                        onPress={() => changePassword(oldPass, newPass, reNewPass)}
                    >
                        <Text className={'text-foreground'}>{(isProcessing) ? 'Password Change in progress...' : 'Change Password'}</Text>
                    </Pressable>

                </View>

                <View className={'flex-1'}/>

            </SafeAreaView>
        </View>
    );
}

export default ChangePassword;