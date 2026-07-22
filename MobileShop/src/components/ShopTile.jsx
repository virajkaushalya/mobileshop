import {Pressable, Text, useColorScheme, View} from "react-native";
import FontAwesome from "@react-native-vector-icons/fontawesome";
import {Redirect, router} from "expo-router";

const ShopTile = ({shopName, address, mobileNumber}) => {

    const colorScheme = useColorScheme();
    const isDark = colorScheme === "dark";
    const iconColor = isDark ? "hsl(213 30% 70%)" : "hsl(219 12% 32%)";

    const processedAddress = !address
        ? "Unknown Address"
        : address.split(",").map(s => s.trim()).join(", \n");

    /**
     * First process to get only digit, in case if number contains '-' or spaces. e.g. 071-2345-123 (these numbers will still format)
     * then it process to format the given number
     **/
    const processedNumber = () => {
        if (!mobileNumber) return "No mobile number";

        const number = String(mobileNumber).replace(/\D/g, "");

        if (number.length === 10 && number.startsWith("07")) {
            return `(${number.slice(0, 3)}) ${number.slice(3, 6)} ${number.slice(6)}`;
        }

        return mobileNumber;
    };


    return (
        <Pressable
            className={'flex-row bg-card py-4 px-4 rounded-3xl'}
            onPress={
                () => {
                    // TODO
                    console.log('Press');
                    router.push("/(views)/shop");
                }
            }
        >
            <View className={'flex-1 flex-col'}>
                <Text className={'text-foreground text-2xl uppercase mb-2'}>{shopName}</Text>
                <View className={'flex-row justify-between'}>
                    <Text
                        className={'text-foreground/60 text-sm flex-1'}
                        numberOfLines={4}
                        ellipsizeMode={"tail"}
                    >
                        {processedAddress}
                    </Text>

                    {mobileNumber && (
                        <View className={'justify-end align-bottom h-max pr-8 ml-4'}>
                            <Text className={'text-foreground/60 w-max text-right text-sm font-semibold'}>:Mobile</Text>
                            <Text className={'text-foreground/60 w-max text-right text-sm'}>{processedNumber()}</Text>
                        </View>
                    )}

                </View>
            </View>

            <View className={'justify-center items-center pr-2'}>
                <FontAwesome name={'angle-right'} size={32} color={iconColor}/>
            </View>

        </Pressable>
    );
}

export default ShopTile;