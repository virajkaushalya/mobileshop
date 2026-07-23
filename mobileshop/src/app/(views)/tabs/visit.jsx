import {FlatList, Keyboard, Pressable, ScrollView, Text, TouchableWithoutFeedback, View} from "react-native";
import {VisitScreenData} from "../../../data/VisitScreenData";
import {useState} from "react";
import MultiLineTextField from "../../../components/MultiLineTextField";
import {SafeAreaView} from "react-native-safe-area-context";
import SingleLineTextField from "../../../components/SingleLineTextField";
import TitleDescriptionTile from "../../../components/TitleDescriptionTile";
import FontAwesome from "@react-native-vector-icons/fontawesome";
import {Image} from "expo-image";
import {formatCurrencyInput} from "../../../ulitily/inputFormatter";


const Visit = () => {

    const [requestData, setRequestData] = useState('');
    const [remarkData, setRemarkData] = useState('');
    const [cashData, setCashData] = useState('');
    const [chequeNumberData, setChequeNumberData] = useState('');
    const [chequeAmountData, setChequeAmountData] = useState('');

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ScrollView className={'flex-1 mt-4'}>

                <View className={'bg-transparent'}>

                    {/* Shop Request Text Field */}
                    <MultiLineTextField
                        title={VisitScreenData.request.title}
                        description={VisitScreenData.request.description}
                        value={requestData}
                        placeholder={VisitScreenData.request.placeholder}
                        onChangeText={(text) => setRequestData(text)}
                    />

                    {/* Representative Remark Text Field */}
                    <MultiLineTextField
                        title={VisitScreenData.remark.title}
                        description={VisitScreenData.remark.description}
                        value={remarkData}
                        placeholder={VisitScreenData.remark.placeholder}
                        onChangeText={(text) => setRemarkData(text)}
                    />

                </View>

                {/* Payment Details */}
                <SafeAreaView className={'flex-1 bg-secondary rounded-t-3xl mt-2'} edges={["bottom"]}>
                    <View className={'py-6 px-2'}>

                        <View className={'pl-4 pb-4 mb-4'}>
                            <Text className={'text-foreground text-3xl'}>{VisitScreenData.receiving.title}</Text>
                            <Text className={'text-foreground/70 text'}>{VisitScreenData.receiving.description}</Text>
                        </View>

                        <View>
                            <SingleLineTextField
                                title={VisitScreenData.receiving.cash}
                                description={VisitScreenData.receiving.cashDescription}
                                value={formatCurrencyInput(cashData)}
                                placeholder={VisitScreenData.receiving.cashPlaceholder}
                                keyboardType={"decimal-pad"}
                                onChangeText={(text) => {
                                    setCashData(text.replace(/,/g, ''));

                                    console.log(cashData);
                                    console.log(typeof cashData);
                                }}
                            />

                            {/* Cheque Payments Details */}
                            <View className={'mb-4'}>

                                <TitleDescriptionTile
                                    className={'px-3'}
                                    title={VisitScreenData.receiving.cheque}
                                    description={VisitScreenData.receiving.chequeDescription}
                                />

                                <View className={'flex-row'}>
                                    <SingleLineTextField
                                        isHaveTitle={false}
                                        value={chequeNumberData}
                                        placeholder={VisitScreenData.receiving.chequeNumberPlaceholder}
                                        keyboardType={"default"}
                                        onChangeText={(text) => {
                                            setChequeNumberData(text);
                                        }}
                                        flexIndex={2}
                                    />

                                    <SingleLineTextField
                                        isHaveTitle={false}
                                        value={chequeAmountData}
                                        placeholder={VisitScreenData.receiving.chequeAmountPlaceholder}
                                        keyboardType={"decimal-pad"}
                                        onChangeText={(text) => {

                                            const cleaned = text.replace(/[^0-9.]/g, ''); // Remove non-numeric characters

                                            // Prevent multiple decimals (e.g., stops "23.5.6")
                                            const parts = cleaned.split('.');
                                            const formatted = parts.length > 2 ? `${parts[0]}.${parts.slice(1).join('')}` : cleaned;

                                            setChequeAmountData(text);
                                        }}
                                        flexIndex={1}
                                    />
                                </View>

                                <View
                                    className={'mx-3 flex-1 bg-white/50 dark:bg-white/20 rounded-2xl h-24 justify-center items-center border-2 border-dashed border-gray-400 dark:border-white/40'}>

                                    <FontAwesome name={"camera"} color={"hsl(210 1% 53%)"} size={18}/>

                                    <Text className={'mt-2 text-sm text-gray-400 dark:text-white/40'}>Add/Take Image</Text>

                                </View>

                                {/* Add button */}
                                <View className="flex-row justify-end mt-4 px-3">
                                    <Pressable
                                        className="rounded-xl px-8 py-2 border border-primary/80 bg-primary/20"
                                        onPress={() => {
                                        }}
                                    >
                                        <Text className="text-foreground/60 font-medium">Add</Text>
                                    </Pressable>
                                </View>


                            </View>

                            {/* Divider */}
                            <View className="h-px bg-border my-4"/>

                            {/* List of inserted cheque data */}
                            <FlatList
                                data={[2, 2]}
                                scrollEnabled={false}
                                style={{gap: 2}}
                                renderItem={
                                    (i) => {
                                        return (
                                            <View
                                                className={'mx-3 mb-2 px-5 py-3 flex-1 flex-row bg-white/50 dark:bg-white/20 rounded-3xl border border-gray-400 dark:border-white/40'}>

                                                <View className={'mr-3'}>
                                                    <Text className={'font-semibold text-foreground'}>Cheque Number</Text>
                                                    <Text className={'mt-2 text-foreground'}>Amount</Text>
                                                </View>

                                                <View className={'flex-1'}>
                                                    <Text className={'font-semibold text-foreground'}>: 2891813882918313</Text>
                                                    <Text className={'mt-2 text-foreground'}>: Rs. 10000</Text>
                                                </View>

                                                <Image
                                                    source={require('../../../../assets/temp/temp_img.png')}
                                                    style={{
                                                        width: 48,
                                                        height: 64,
                                                        borderRadius: 12,
                                                    }}/>

                                            </View>
                                        )
                                    }
                                }>
                            </FlatList>

                        </View>

                        <Pressable
                            className={'mx-4 mt-8 mb-4 py-4 bg-primary/80 rounded-xl flex-1 justify-center items-center'}
                            onPress={() => {
                                console.log("visit.jsx | SUBMIT PRESSED")
                            }}
                        >
                            <Text className={'text-foreground font-semibold uppercase tracking-[2px]'}>Submit</Text>
                        </Pressable>


                    </View>
                </SafeAreaView>

            </ScrollView>

        </TouchableWithoutFeedback>
    );
}

export default Visit;