import {Pressable, Text, useColorScheme, View} from "react-native";
import FontAwesome from "@react-native-vector-icons/fontawesome";
import {router} from "expo-router";
import {formatMobileNumber} from "../ulitily/inputFormatter";

const ShopTile = ({shop}) => {

    const colorScheme = useColorScheme();
    const isDark = colorScheme === "dark";
    const iconColor = isDark ? "hsl(213 30% 70%)" : "hsl(219 12% 32%)";

    const processedAddress = !shop.address
        ? "Unknown Address"
        : shop.address.split(",").map(s => s.trim()).join(", \n");


    return (
        <Pressable
            className={'flex-row bg-card py-4 px-4 rounded-3xl'}
            onPress={
                () => {
                    // TODO
                    console.log('Press');
                    router.push({pathname: "/(views)/shop", params: {shopName: shop.shopName, shopId: shop.shopId}});
                }
            }
        >
            <View className={'flex-1 flex-col'}>
                <Text className={'text-foreground text-2xl uppercase mb-2'}>{shop.shopName}</Text>
                <View className={'flex-row justify-between'}>
                    <View className="flex-1 h-16 justify-end">
                        <Text
                            className="text-foreground/60 text-sm"
                            numberOfLines={3}
                            ellipsizeMode="tail"
                        >
                            {processedAddress}
                        </Text>
                    </View>

                    {shop.mobileNumber && (
                        <View className={'justify-end align-bottom h-max pr-8 ml-4'}>
                            <Text className={'text-foreground/60 w-max text-right text-sm font-semibold'}>:Mobile</Text>
                            <Text className={'text-foreground/60 w-max text-right text-sm'}>{formatMobileNumber(shop.mobileNumber)}</Text>
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