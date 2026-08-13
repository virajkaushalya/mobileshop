import {View, useColorScheme} from "react-native";
import Visit from "./tabs/visit";
import ScreenBackground from "../../components/ScreenBackground";
import {useState} from "react";
import Delivery from "./tabs/delivery";
import {Stack, useLocalSearchParams} from "expo-router";
import {TabButton} from "../../components/TabButton";
import {SafeAreaView} from "react-native-safe-area-context";

const Shop = () => {

    const {shopName, shopId} = useLocalSearchParams();

    const [currentTab, setCurrentTab] = useState("visit");

    const colorScheme = useColorScheme();
    const isDark = colorScheme === "dark";

    return (

        <>
            <Stack.Screen options={{title: shopName.toUpperCase()}}/>

            <ScreenBackground/>


            <View className={'mt-4 mx-16 flex-row bg-white/60 dark:bg-secondary/60 rounded-2xl'}>

                <TabButton
                    title={'Visit'}
                    active={currentTab === "visit"}
                    isDark={isDark}
                    onPress={() => setCurrentTab("visit")}
                />

                <TabButton
                    title={'Delivery'}
                    active={currentTab === "delivery"}
                    isDark={isDark}
                    onPress={() => setCurrentTab("delivery")}
                />

            </View>

            <SafeAreaView className={'flex-1'} edges={['bottom']}>
                <View className={'flex-1'}>
                    {currentTab === "visit" && <Visit onContinue={() => setCurrentTab("delivery")}/>}
                    {currentTab === "delivery" && <Delivery/>}
                </View>
            </SafeAreaView>

        </>
    );
}

export default Shop;