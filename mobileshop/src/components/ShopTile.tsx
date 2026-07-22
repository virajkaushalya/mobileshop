import {Pressable, Text, View} from "react-native";
import FontAwesome from "@react-native-vector-icons/fontawesome";

const ShopTile = () => {
    return (
        <Pressable
            className={'flex-row bg-card py-4 px-4 mb-2 rounded-3xl'}
            onPress={() => {
                console.log('Press');
            }}
        >
            <View className={'flex-1 flex-col'}>
                <Text className={'text-foreground text-2xl'}>{'GenXT Colombo'}</Text>
                <Text className={'text-foreground/60 text-sm'}>{'No.34/A,\nChapel Lane, \nNugegoda, \nColombo 16'}</Text>
            </View>

            <View className={'justify-center items-center pr-2'}>
                <FontAwesome name={'check-square-o'} size={24} color={'green'}/>
            </View>

        </Pressable>
    );
}

export default ShopTile;