import React from 'react';
import {NativeTabs} from "expo-router/build/native-tabs";
import {useColorScheme} from "nativewind";
import colors from "tailwindcss/colors";

export default function TabsLayout() {

    const {colorScheme} = useColorScheme();
    const isDark = colorScheme === 'dark';
    const tabsTintColor = isDark ? "hsl(217 91% 60%)" : "hsl(222 87% 46%)";

    return (
        <NativeTabs tintColor={tabsTintColor}>

            <NativeTabs.Trigger name="index">
                <NativeTabs.Trigger.Label>Home</NativeTabs.Trigger.Label>
                <NativeTabs.Trigger.Icon sf="house.fill" md="home"/>
            </NativeTabs.Trigger>

            <NativeTabs.Trigger name="delivery">
                <NativeTabs.Trigger.Icon sf="gear" md="settings"/>
                <NativeTabs.Trigger.Label>Settings</NativeTabs.Trigger.Label>
            </NativeTabs.Trigger>

        </NativeTabs>
    );
}