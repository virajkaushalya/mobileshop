import {FlatList, Keyboard, Pressable, ScrollView, Text, TouchableWithoutFeedback, View} from "react-native";
import {VisitScreenData} from "../../../data/VisitScreenData";
import {useState} from "react";
import MultiLineTextField from "../../../components/MultiLineTextField";
import {SafeAreaView} from "react-native-safe-area-context";
import SingleLineTextField from "../../../components/SingleLineTextField";
import TitleDescriptionTile from "../../../components/TitleDescriptionTile";
import FontAwesome from "@react-native-vector-icons/fontawesome";
import {Image} from "expo-image";
import {formatChequeNumberInput, formatCurrencyInput} from "../../../ulitily/inputFormatter";
import SubmitButton from "../../../components/SubmitButton";
import ChequeDataTile from "../../../components/ChequeDataTile";
import useImagePicker from "../../../hooks/useImagePicker";
import TextFieldErrorMessage from "../../../components/TextFieldErrorMessage";
import {
    cashReceiveValidation,
    chequeAmountValidation,
    chequeImageValidation,
    chequeNumberValidation,
    shopRequestValidation, userRemarkValidation
} from "../../../validations/visit.validation";


const Visit = () => {

    const [requestData, setRequestData] = useState('');
    const [remarkData, setRemarkData] = useState('');
    const [cashData, setCashData] = useState('');
    const [chequeNumberData, setChequeNumberData] = useState('');
    const [chequeAmountData, setChequeAmountData] = useState('');
    const [chequeListData, setChequeListData] = useState([]);

    const [chequeNumberError, setChequeNumberError] = useState('');
    const [chequeAmountError, setChequeAmountError] = useState('');
    const [chequeImageError, setChequeImageError] = useState('');

    const [requestDataError, setRequestDataError] = useState('');
    const [userRemarkError, setUserRemarkError] = useState('');
    const [cashAmountError, setCashAmountError] = useState('');

    const {image, addImage, removeImage,} = useImagePicker();

    const closeIconColor = 'hsl(0 0% 74%)'

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ScrollView className={'flex-1 mt-4'}>

                <View className={'bg-transparent px-1'}>

                    {/* Shop Request Text Field */}
                    <MultiLineTextField
                        title={VisitScreenData.request.title}
                        description={VisitScreenData.request.description}
                        value={requestData}
                        placeholder={VisitScreenData.request.placeholder}
                        onChangeText={(text) => setRequestData(text)}
                        errorMessage={requestDataError}
                    />

                    {/* Representative Remark Text Field */}
                    <MultiLineTextField
                        title={VisitScreenData.remark.title}
                        description={VisitScreenData.remark.description}
                        value={remarkData}
                        placeholder={VisitScreenData.remark.placeholder}
                        onChangeText={(text) => setRemarkData(text)}
                        errorMessage={userRemarkError}
                    />

                </View>

                {/* Payment Details */}
                <SafeAreaView className={'flex-1 bg-secondary rounded-t-3xl mt-2'} edges={[]}>
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
                                errorMessage={cashAmountError}
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
                                        keyboardType={"number-pad"}
                                        onChangeText={(text) => {
                                            setChequeNumberData(formatChequeNumberInput(text));
                                        }}
                                        flexIndex={2}
                                        maxLength={11}
                                        errorMessage={chequeNumberError}
                                    />

                                    <SingleLineTextField
                                        isHaveTitle={false}
                                        value={formatCurrencyInput(chequeAmountData)}
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
                                        errorMessage={chequeAmountError}
                                    />
                                </View>

                                <View className={''}>

                                    {
                                        (image)
                                            ? <View className={'h-32 mx-3'}>
                                                <Image
                                                    source={{uri: image.uri}}
                                                    style={{
                                                        width: '100%',
                                                        height: '100%',
                                                        borderRadius: 12
                                                    }}
                                                    contentFit='fill'
                                                />
                                            </View>

                                            : <View className={'flex-row'}>
                                                <Pressable
                                                    onPress={() => addImage("camera")}
                                                    className={'ml-3 mr-1 flex-1 bg-white/50 dark:bg-white/20 rounded-2xl h-24 justify-center items-center border-2 border-dashed border-gray-400 dark:border-white/40'}>

                                                    <FontAwesome name={"camera"} color={"hsl(210 1% 53%)"} size={18}/>

                                                    <Text className={'mt-2 text-sm text-gray-400 dark:text-white/40'}>Take Image</Text>

                                                </Pressable>

                                                <Pressable
                                                    onPress={() => addImage("gallery")}
                                                    className={'mr-3 ml-1 flex-1 bg-white/50 dark:bg-white/20 rounded-2xl h-24 justify-center items-center border-2 border-dashed border-gray-400 dark:border-white/40'}>

                                                    <FontAwesome name={"image"} color={"hsl(210 1% 53%)"} size={18}/>

                                                    <Text className={'mt-2 text-sm text-gray-400 dark:text-white/40'}>Add Image</Text>

                                                </Pressable>
                                            </View>

                                    }

                                    <TextFieldErrorMessage errorMessage={chequeImageError} marginBottom={'mb-2'}/>

                                </View>

                                {/* Add button */}
                                <View className="flex-row justify-end mt-4 px-3">
                                    <Pressable
                                        className="rounded-xl px-8 py-2 border border-primary/80 bg-primary/20"
                                        onPress={() => {

                                            const chequeNumValidation = chequeNumberValidation(chequeNumberData);
                                            if (!chequeNumValidation.status) {
                                                setChequeNumberError(chequeNumValidation.error);
                                                return;
                                            }

                                            setChequeNumberError('');


                                            const chequeAmtValidation = chequeAmountValidation(chequeAmountData);
                                            if (!chequeAmtValidation.status) {
                                                setChequeAmountError(chequeAmtValidation.error);
                                                return;
                                            }

                                            setChequeAmountError('');


                                            const chequeImgValidation = chequeImageValidation(image);
                                            if (!chequeImgValidation.status) {
                                                setChequeImageError(chequeImgValidation.error);
                                                return;
                                            }

                                            setChequeImageError('');


                                            setChequeListData((current) => [
                                                ...current,
                                                {
                                                    id: Date.now().toString(),
                                                    chequeNumber: chequeNumberData,
                                                    amount: chequeAmountData,
                                                    image: image,
                                                }
                                            ]);

                                            setChequeNumberData('');
                                            setChequeAmountData('');
                                            removeImage();
                                        }}
                                    >
                                        <Text className="text-foreground/60 font-medium">Add</Text>
                                    </Pressable>
                                </View>


                            </View>

                            {/* Divider */}
                            <View className="h-px bg-border my-4"/>

                            {/* List of inserted cheque data */}
                            <View className={'gap-0.5'}>
                                {chequeListData.map((item) => (
                                    <ChequeDataTile
                                        key={item.id}
                                        chequeNumber={item.chequeNumber}
                                        amount={item.amount}
                                        iconColor={closeIconColor}
                                        imageUri={item.image.uri}
                                        onPress={() => {
                                            setChequeListData((current) =>
                                                current.filter((cheque) => cheque.id !== item.id)
                                            );
                                        }}
                                    />
                                ))}
                            </View>

                        </View>

                        <SubmitButton
                            text={"Continue"}
                            isContinue={true}
                            backgroundOpacity={30}
                            borderRadius={'full'}
                            onPress={() => {
                                const requestValidation = shopRequestValidation(requestData);
                                if (!requestValidation.status) {
                                    return setRequestDataError(requestValidation.error);
                                }
                                setRequestDataError('')

                                const remarkValidation = userRemarkValidation(remarkData);
                                if (!remarkValidation.status) {
                                    return setUserRemarkError(remarkValidation.error);
                                }
                                setUserRemarkError('')

                                const cashValidation = cashReceiveValidation(cashData);
                                if (!cashValidation.status) {
                                    return setCashAmountError(cashValidation.error);
                                }
                                setCashAmountError('')

                                // TODO: send data, update progress, go to next page


                            }}
                        />

                    </View>
                </SafeAreaView>

            </ScrollView>

        </TouchableWithoutFeedback>
    );
}

export default Visit;