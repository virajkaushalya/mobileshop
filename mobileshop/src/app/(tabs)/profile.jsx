import {Pressable, Text, View} from "react-native";
import ScreenBackground from "../../components/ScreenBackground";
import {SafeAreaView} from "react-native-safe-area-context";
import FontAwesome from "@react-native-vector-icons/fontawesome";
import {router} from "expo-router";

const Profile = () => {
    return (
        <View className={''}>

            <View className={'bg-secondary pb-8 rounded-b-[30px]'}>
                <SafeAreaView className={''}>

                    <Text className={'text-foreground'}>Hello</Text>



                </SafeAreaView>
            </View>

            <View className={'px-4 pt-8'}>
                <SafeAreaView className={''} edges={['bottom']} >

                    <Pressable
                        className={'flex-row justify-between items-center bg-card py-3 px-8 rounded-2xl'}
                        onPress={() => { router.push('../(profileOps)/changePassword')}}
                    >

                        <Text className={'text-card-foreground'}>Change Password</Text>
                        <FontAwesome name={'angle-right'} size={28} color={'gray'} />

                    </Pressable>

                </SafeAreaView>
            </View>

        </View>
    );
}

export default Profile;