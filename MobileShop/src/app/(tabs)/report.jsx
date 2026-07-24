import React, {useMemo, useState} from 'react';
import {Alert, Pressable, ScrollView, Text, View} from "react-native";
import ScreenBackground from "../../components/ScreenBackground";
import {SafeAreaView} from "react-native-safe-area-context";
import {ReportScreenData} from "../../data/ReportScreenData";
import FontAwesome from "@react-native-vector-icons/fontawesome";
import {formatCurrency} from "../../ulitily/inputFormatter";
import SummaryTile from "../../components/SummaryTile";
import {visitPayments} from "../../temp/dummyData";
import ShopPaymentCard from "../../components/ShopPaymentCard";
import * as ImagePicker from "expo-image-picker";
import {Image} from "expo-image";


const Report = () => {

    const [receipts, setReceipts] = useState([]);

    const totals = useMemo(() => {
        const cash = visitPayments.reduce((total, shop) => total + shop.cash, 0);
        const cheque = visitPayments.reduce(
            (total, shop) => total + shop.cheques.reduce((sum, chequeItem) => sum + chequeItem.amount, 0),
            0
        );

        return {
            cash,
            cheque,
            total: cash + cheque,
        };
    }, []);

    const addImage = async (source) => {

        const permissionResult = (source === "camera")
            ? await ImagePicker.requestCameraPermissionsAsync()
            : await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (!permissionResult.granted) {
            Alert.alert('Permission required", "Please allow access so you can attach the bank deposit receipt.');
            return;
        }

        const result = (source === "camera")
            ? await ImagePicker.launchCameraAsync({
                mediaTypes: ["images"],
                quality: 0.85
            })
            : await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ["images"],
                allowsMultipleSelection: true,
                quality: 0.85
            });

        if (!result.canceled) {
            setReceipts((current) => [
                ...current,
                ...result.assets.map((asset) => ({
                    id: `${asset.uri}-${Date.now()}`,
                    uri: asset.uri,
                }))
            ])
        }

    }

    const removeReceipt = (id) => {
        setReceipts((current) => current.filter((receipt) => receipt.id !== id));
    };

    const submitReport = () => {
        console.log("report.tsx | Form SUBMITTED");
    }


    return (
        <View className={'flex-1'}>

            <ScreenBackground/>

            {/* Header Area */}
            <SafeAreaView className={'px-4 pb-5 pt-6 bg-secondary rounded-b-3xl'} edges={['top', 'left', 'right']}>

                <View className={'flex-row items-center justify-between'}>

                    {/* Title */}
                    <View className={'flex-1 pr-3'}>
                        <Text className={'text-3xl text-foreground'}>{ReportScreenData.title}</Text>
                        <Text className={'mt-1 text-sm text-foreground/60'}>{ReportScreenData.description}</Text>
                    </View>

                    <View className={'h-12 w-12 items-center justify-center bg-card rounded-2xl'}>
                        <FontAwesome name={'list-alt'} size={20} color="hsl(217 91% 60%)"/>
                    </View>
                </View>

                {/* Card Views */}
                <View className={'mt-5 flex-row gap-3'}>
                    <SummaryTile title="Cash" value={formatCurrency(totals.cash)} icon="money" tone="success"/>
                    <SummaryTile title="Cheque" value={formatCurrency(totals.cheque)} icon="credit-card" tone="warning"/>
                </View>

                <View className="px-5 py-4 mt-3 bg-primary/90 rounded-3xl ">
                    <Text className="text-xs font-semibold text-primary-foreground/70 uppercase">Grand Total</Text>
                    <Text
                        className="mt-1 text-2xl font-bold text-primary-foreground"
                        numberOfLines={1}
                        adjustsFontSizeToFit={true}
                    >
                        {formatCurrency(totals.total)}
                    </Text>
                </View>

            </SafeAreaView>


            <ScrollView className={'flex-1 px-4'} contentContainerClassName={'gap-4 pt-4 pb-8'}>

                <View>
                    <Text className={'mb-3 text-lg text-foreground font-semibold'}>{ReportScreenData.listTitle}</Text>

                    <View className={'gap-3'}>
                        {
                            visitPayments.map((item, index) => (
                                <ShopPaymentCard key={item.id} item={item}/>
                            ))
                        }
                    </View>
                </View>

                <View className={'p-4 bg-card rounded-3xl border border-border'}>

                    <View className={'mb-4 flex-row items-start justify-between gap-3'}>
                        <View className={'flex-1'}>
                            <Text className={'text-xl text-foreground font-semibold'}>{ReportScreenData.bankReceiptSec.title}</Text>
                            <Text className={'mt-1 text-sm text-foreground/55'}>{ReportScreenData.bankReceiptSec.description}</Text>
                        </View>

                        <View className={'px-3 py-1 bg-secondary rounded-full'}>
                            <Text
                                className={'text-xs text-secondary-foreground font-semibold'}>{receipts.length} {ReportScreenData.bankReceiptSec.added}</Text>
                        </View>
                    </View>

                    <View className={'flex-row gap-3'}>
                        <Pressable
                            className={'py-4 flex-1 flex-row items-center justify-center gap-2 bg-primary/15 rounded-2xl border border-primary/40'}
                            onPress={() => addImage('camera')}
                        >
                            <FontAwesome name={'camera'} size={15} color={'hsl(217 91% 60%)'}/>
                            <Text className={'text-foreground font-semibold'}>Camera</Text>
                        </Pressable>

                        <Pressable
                            className={'py-4 flex-1 flex-row items-center justify-center gap-2 bg-secondary/60 rounded-2xl border border-border'}
                            onPress={() => addImage('library')}
                        >
                            <FontAwesome name={'image'} size={15} color={'hsl(217 91% 60%)'}/>
                            <Text className={'text-foreground font-semibold'}>Gallery</Text>
                        </Pressable>
                    </View>

                    {
                        (receipts.length === 0)
                            ? (
                                <View
                                    className={'mt-4 h-28 items-center justify-center bg-secondary/30 rounded-2xl border-2 border-dashed border-border'}>
                                    <FontAwesome name={'cloud-upload'} size={20} color={'hsl(215 16% 47%)'}/>
                                    <Text className={'mt-2 text-sm text-foreground/45'}>{ReportScreenData.bankReceiptSec.noReceipts}</Text>
                                </View>
                            )
                            : (
                                <View className={'mt-4 flex-row flex-wrap gap-3'}>
                                    {
                                        receipts.map((receipt, index) => (

                                            <View key={receipt.id} className={'relative'}>
                                                <Image
                                                    source={{uri: receipt.uri}}
                                                    style={{width: 92, height: 112, borderRadius: 16}}
                                                    contentFit='cover'
                                                />
                                                <Pressable
                                                    className={'bg-destructive absolute -right-2 -top-2 h-7 w-7 items-center justify-center rounded-full'}
                                                    onPress={() => removeReceipt(receipt.id)}
                                                >
                                                    <FontAwesome name={'close'} size={12} color={'hsl(0 72% 45%)'}/>
                                                </Pressable>
                                                <Text
                                                    className={'mt-1 text-foreground/45 text-center text-xs'}>{ReportScreenData.bankReceiptSec.receipt} {index + 1}</Text>
                                            </View>

                                        ))
                                    }
                                </View>
                            )
                    }

                </View>

                <Pressable
                    className={'px-5 py-5 mb-2 flex-row items-center justify-center gap-3 bg-primary rounded-2xl'}
                    onPress={submitReport}
                >
                    <FontAwesome name={'check-circle'} size={18} color={'white'}/>
                    <Text className={'text-white font-semibold tracking-[2px] uppercase'}>Submit Daily Report</Text>
                </Pressable>

            </ScrollView>

        </View>
    );
};

export default Report;