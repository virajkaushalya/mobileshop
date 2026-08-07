import {Text, View} from "react-native";
import FontAwesome from "@react-native-vector-icons/fontawesome";

const SummaryTile = ({title, value, icon, tone = "primary"}) => {

    const toneClass = tone === "success" ? "bg-green-500/15" : tone === "warning" ? "bg-amber-500/15" : "bg-primary/15";
    const iconColor = tone === "success" ? "hsl(142 71% 45%)" : tone === "warning" ? "hsl(35 91% 31%)" : "hsl(217 91% 60%)";

    return (

        <View className="flex-1 px-4 py-4 border border-border bg-card rounded-2xl">

            <View className={`mb-3 h-9 w-9 items-center justify-center rounded-xl ${toneClass}`}>
                <FontAwesome name={icon} size={16} color={iconColor}/>
            </View>

            <Text className={'text-xs font-semibold uppercase text-foreground/45'}>{title}</Text>
            <Text
                className={'mt-1 text-lg font-bold text-foreground'}
                numberOfLines={1}
                adjustsFontSizeToFit={true}
            >
                {value}
            </Text>

        </View>

    );
}

export default SummaryTile;