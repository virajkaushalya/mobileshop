import {SafeAreaView} from "react-native-safe-area-context";
import {Keyboard, Pressable, Text, TextInput, TouchableWithoutFeedback, useColorScheme, View} from "react-native";
import {SignInScreenData} from "@/data/SignInScreenData";
import {Image} from "expo-image";
import FontAwesome from "@react-native-vector-icons/fontawesome";
import {useState} from "react";

export default function SignInScreen() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [isPasswordVisible, setPasswordVisible] = useState(false);
    const [isSigningIn, setSigningIn] = useState(false);

    const colourScheme = useColorScheme();
    const placeholderColour = colourScheme === "dark" ? "hsl(210 40% 96%)" : "hsl(222 47% 11%)";

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <SafeAreaView className={'flex-1 bg-primary dark:bg-secondary'} edges={["top"]}>

                {/* Decorative Elements */}
                <View className={'absolute -left-16 top-12 h-56 w-56 rounded-full bg-primary/80 dark:bg-background/40'}/>
                <View className={'absolute right-[-74px] top-40 h-72 w-72 rounded-full bg-primary/70 dark:bg-background/35'}/>

                {/* Header Area */}
                <View className={'px-6 pt-4'}>

                    {/* App Title Area */}
                    <Text
                        className={'text-center text-5xl font-normal tracking-normal text-primary-foreground dark:text-foreground/60 uppercase'}>
                        {SignInScreenData.appName}
                    </Text>
                    <Text className={'mt-1 text-center text-sm text-primary-foreground/80 dark:text-foreground/75'}>
                        {SignInScreenData.subTitle}
                    </Text>

                    {/* Image Area */}
                    <View className={'mt-6 rounded-[30px] border border-white/20 bg-white/10 p-3'}>
                        <Image
                            source={require('../../../assets/images/auth/auth.png')}
                            style={{width: "100%", height: 350}}
                            contentFit={"contain"}
                        />
                    </View>

                </View>


                <View className={'mt-8 flex-1 rounded-t-[30px] bg-card px-6 pb-8 pt-6'}>

                    <View className={'self-center rounded-full bg-secondary px-3 py-1'}>
                        <Text className={'text-xs font-semibold uppercase tracking-wide text-secondary-foreground'}>
                            {SignInScreenData.welcome}
                        </Text>
                    </View>

                    <Text className={'mt-2 text-center text-sm leading-6 text-muted-foreground'}>
                        {SignInScreenData.loginDescription}
                    </Text>

                    <View className={'mt-6'}>

                        {/* Username Field */}
                        <View className={'mb-5 px-4 flex-row items-center rounded-2xl border border-border bg-card focus:border-ring'}>

                            <FontAwesome name={'user'} size={18} style={{color: '#6B7280', paddingRight: 8}}/>

                            <TextInput
                                value={email}
                                onChangeText={(text) => setEmail(text)}
                                placeholder={'Email Address'}
                                placeholderTextColor={placeholderColour}
                                className={'flex-1 text-foreground'}
                                keyboardType={"email-address"}
                            />
                        </View>

                        {/* Password Field */}
                        <View className={'mb-3 px-4 flex-row items-center rounded-2xl border border-border bg-card focus:border-ring'}>

                            <FontAwesome name={'lock'} size={18} style={{color: '#6B7280', paddingRight: 8}}/>

                            <TextInput
                                value={password}
                                onChangeText={(text) => {
                                    setPassword(text);
                                    console.log("Printing Text: ", password);
                                }}
                                placeholder={'Password'}
                                placeholderTextColor={placeholderColour}
                                className={'flex-1 text-foreground'}
                                secureTextEntry={!isPasswordVisible}
                            />

                            <FontAwesome
                                name={isPasswordVisible ? "eye-slash" : "eye"}
                                size={18}
                                style={{color: 'rgb(75 85 99 / 0.74)', paddingRight: 8}}
                                onPress={() => setPasswordVisible(!isPasswordVisible)}
                            />

                        </View>

                        <Pressable
                            className={`mt-6 px-4 py-3 flex-row items-center justify-center rounded-2xl border border-border bg-primary/80 ${isSigningIn ? 'bg-white/40' : ''} `}
                            disabled={isSigningIn}
                            onPress={() => {
                                setSigningIn(true)

                                // TODO: Update here
                                console.log("email    --> ", email);
                                console.log("password --> ", password);
                            }}
                        >
                            <Text className={'text-foreground'}>
                                {isSigningIn ? SignInScreenData.signingIn : SignInScreenData.submitBtn}
                            </Text>
                        </Pressable>

                    </View>

                    <Text className={'mt-3 text-center text-sm leading-5 text-muted-foreground'}>
                        {SignInScreenData.TnC}
                    </Text>

                </View>

            </SafeAreaView>
        </TouchableWithoutFeedback>
    );

}
