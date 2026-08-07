import {Pressable, Text, View} from "react-native";
import FontAwesome from "@react-native-vector-icons/fontawesome";
import {Image} from "expo-image";

const ChequeDataTile = ({
                            iconColor,
                            chequeNumber = '0',
                            amount = '0',
                            onPress,
                            imageUri
                        }) => {
    return (
        <View
            className={'mx-3 mb-2 pr-5 py-3 flex-1 flex-row bg-white/50 dark:bg-white/20 rounded-3xl border border-gray-400 dark:border-white/40'}>

            <Pressable
                className={'pl-3 pr-2'}
                onPress={onPress}
            >
                <View className={''}>
                    <FontAwesome name={"close"} size={18} color={iconColor}/>
                </View>
            </Pressable>

            <View className={'flex-row flex-1'}>
                <View className={'mr-3'}>
                    <Text className={'font-semibold text-foreground'}>Cheque Number</Text>
                    <Text className={'mt-2 text-foreground'}>Amount</Text>
                </View>

                <View className={'flex-1'}>
                    <Text className={'font-semibold text-foreground'}>: {chequeNumber}</Text>
                    <Text className={'mt-2 text-foreground'}>: Rs. {amount}</Text>
                </View>
            </View>

            <Image
                source={{uri: imageUri}}
                style={{
                    width: 52,
                    height: 64,
                    borderRadius: 12,
                }}
            />

        </View>
    );
}

export default ChequeDataTile;