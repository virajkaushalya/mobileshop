import {Text, View} from "react-native";
import {Checkbox, Host} from "@expo/ui";
import FontAwesome from "@react-native-vector-icons/fontawesome";

const DeliveryItemCard = ({item, toggleCheckbox}) => {

    const iconColour = "hsl(221 21% 31%)"

    return (
        <View className="flex-row bg-card mb-2 px-4 py-2 rounded-2xl border border-primary/30">

            <View className={'self-center'}>
                <FontAwesome
                    name="mobile-phone"
                    size={48}
                    color={iconColour}
                />
            </View>

            <View className="flex-1 ml-6 justify-around">
                <Text className="text-foreground text-2xl">
                    {item.name}
                </Text>

                <Text className="text-foreground/50 text-sm">
                    Requested Count: {item.requested}
                </Text>
            </View>

            <View className="ml-4 py-2 items-center">
                <Text className="text-foreground/50 text-5xl">
                    {item.issuing}
                </Text>

                <Text className="text-foreground/50 text-xs">
                    Issuing Count
                </Text>
            </View>

            <View className="justify-center ml-4">
                <Host matchContents className={''}>
                    <Checkbox
                        value={item.checked}
                        onValueChange={() => toggleCheckbox(item.id)}
                    />
                </Host>
            </View>

        </View>
    );
}

export default DeliveryItemCard;