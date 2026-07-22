import React from 'react';
import {ScrollView, Text, View} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import ShopTile from "../../components/ShopTile";

const Index = () => {
    return (
        <SafeAreaView edges={["top", "left", "right"]}>

            <ScrollView>
                <ShopTile/>
                <ShopTile/>
                <ShopTile/>
                <ShopTile/>
                <ShopTile/>
                <ShopTile/>
                <ShopTile/>
            </ScrollView>

        </SafeAreaView>
    );
};

export default Index;