import {Pressable, Text, View} from "react-native";
import ScreenBackground from "../../components/ScreenBackground";
import {SafeAreaView} from "react-native-safe-area-context";
import FontAwesome from "@react-native-vector-icons/fontawesome";
import {router} from "expo-router";
import {useLogout} from "../../hooks/useLogout";

const Profile = () => {

    const {logoutUser} = useLogout();

    return (
        <View className={'flex-1'}>

            <ScreenBackground/>

            <View className={'bg-secondary pb-8 rounded-b-[30px]'}>
                <SafeAreaView className={'pl-8 pt-6'}>

                    <Text className={'text-foreground/80 text-3xl font-semibold'}>Profile Settings</Text>

                    {/*TODO*/}

                </SafeAreaView>
            </View>

            <View className={'flex-1 px-4 pt-8'}>

                    {/* Profile settings tile */}
                    <Pressable
                        className={'flex-row justify-between items-center bg-card py-3 px-8 mb-2 rounded-2xl'}
                        onPress={() => {
                            router.push('../(profileOps)/changePassword')
                        }}
                    >
                        <Text className={'text-card-foreground'}>Change Password</Text>
                        <FontAwesome name={'angle-right'} size={28} color={'gray'}/>
                    </Pressable>

                    <View className={'flex-1'}/>

                    {/* Logout Button */}
                    <Pressable
                        className={'my-4 flex-row justify-center items-center bg-red-500/15 py-3 px-8 rounded-2xl border border-red-600'}
                        onPress={() => logoutUser()}
                    >
                        <Text className={'pr-4 text-red-500'}>Logout</Text>
                        <FontAwesome name={'sign-out'} size={22} color={'red'}/>
                    </Pressable>

            </View>

        </View>
    );
}

export default Profile;