import React, {useState} from 'react';
import {ScrollView, Text, View} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import ShopTile from "../../components/ShopTile";
import {HomeScreenData} from "../../data/HomeScreenData";
import ScreenBackground from "../../components/ScreenBackground";

const Index = () => {

    const [progress, setProgress] = useState(0.4);

    const currentDate = new Date().toDateString();

    const progressStatus =
        progress <= 0
            ? HomeScreenData.progressStatus.notStarted
            : progress < 1
                ? HomeScreenData.progressStatus.inProgress
                : HomeScreenData.progressStatus.completed;

    return (
        <View className={'flex-1'}>

            <ScreenBackground />

            <View className={'px-4 pb-4 pt-6 mb-4 bg-secondary rounded-b-3xl'}>
                <SafeAreaView edges={["top", "left", "right"]}>
                    <View className={'gap-2'}>
                        <Text className={'text-3xl text-foreground'}>{HomeScreenData.greeting}</Text>
                        <Text className={'text-sm text-foreground/50'}>{HomeScreenData.welcomeText}</Text>
                    </View>
                </SafeAreaView>

                <View className={'gap-2 py-4'}>

                    <View className={''}>
                        <Text className={'text-foreground/70 text-lg font-semibold'}>{HomeScreenData.progressText}</Text>
                        <Text className={'text-foreground/40 text-xs'}>{currentDate}</Text>
                    </View>

                    {/* Progress Bar */}
                    <View className="h-2 w-full rounded-full overflow-hidden bg-foreground/20">
                        <View
                            className="h-full rounded-full bg-primary"
                            style={{width: `${progress * 100}%`}}
                        />
                    </View>

                    <Text className={`${progress === 1 ? "text-green-600" : "text-foreground/40"} text-xs font-semibold`}>{progressStatus}</Text>

                </View>
            </View>

            <ScrollView
                className={'flex-1 px-4'}
                contentContainerClassName={'gap-2 pb-4'}
            >

                {
                    Array.from({length: 9}).map((_, index) => (
                        <ShopTile
                            key={index}
                            shopName={"GenXT Mobiles"}
                            address={"No.34/A, Chapel Lane, Nugegoda, Colombo 16"}
                            mobileNumber={"0710123423"}
                        />
                    ))
                }

            </ScrollView>

        </View>
    );
};

export default Index;