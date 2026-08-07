import {Text, View} from "react-native";
import FontAwesome from "@react-native-vector-icons/fontawesome";

const PaymentPill = ({label, value, icon}) => (
    <View className='px-3 py-3 flex-1 bg-secondary/70 rounded-2xl'>

        <View className='mb-1 flex-row items-center gap-2'>
            <FontAwesome name={icon} size={12} color='hsl(217 91% 60%)'/>
            <Text className='text-xs font-semibold text-foreground/45 uppercase'>{label}</Text>
        </View>

        <Text
            className='text-foreground text-base font-semibold '
            numberOfLines={1}
            adjustsFontSizeToFit={true}
        >
            {value}
        </Text>

    </View>
);

export default PaymentPill;