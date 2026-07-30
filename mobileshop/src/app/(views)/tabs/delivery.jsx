import {FlatList, Text, View} from "react-native";
import FontAwesome from "@react-native-vector-icons/fontawesome";
import {Checkbox, Host} from "@expo/ui";
import {useState} from "react";
import {SafeAreaView} from "react-native-safe-area-context";
import SubmitButton from "../../../components/SubmitButton";
import Device from "../../../model/Device";

const Delivery = () => {

    const iconColour = "hsl(221 21% 31%)"

    const [devices, setDevices] = useState([
        new Device("D001", "iPhone 16 Pro", 8, 5, false),
        new Device("D002", "iPhone 15", 6, 6, true),
        new Device("D003", "Samsung Galaxy S24", 10, 7, false),
        new Device("D004", "Google Pixel 9", 4, 4, true),
        new Device("D005", "OnePlus 12", 5, 3, false),
        new Device("D006", "Xiaomi 14", 9, 8, false),
        new Device("D007", "Nothing Phone (3)", 2, 2, true),
        new Device("D008", "Sony Xperia 1 VI", 3, 1, false),
        new Device("D009", "Motorola Edge 50 Pro", 7, 5, false),
        new Device("D010", "OPPO Find X8", 6, 6, true),
        new Device("D011", "Vivo X200", 5, 2, false),
        new Device("D012", "Huawei Pura 70 Pro", 4, 4, true),
    ]);

    const toggleCheckbox = (id) => {
        setDevices((prev) =>
            prev.map((item) =>
                item.id === id
                    ? {...item, checked: !item.checked}
                    : item
            )
        );
    };

    return (
        <View className={'flex-1 px-4 py-6 bg-transparent'}>
            <View className={''}>
                <Text className={'text-3xl text-foreground font-semibold'}>Delivery Details</Text>
                <Text className={'text-foreground/60'}>Below are the list of devices needed to be handover</Text>
            </View>

            <FlatList
                showsVerticalScrollIndicator={false}
                className="flex-1 mt-6"
                data={devices}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => {

                    return (
                        <View className="flex-row items-center bg-card rounded-3xl border border-border px-4 py-4 mb-3 shadow-sm">

                            <View className="h-16 w-16 rounded-2xl bg-primary/10 items-center justify-center">
                                <FontAwesome
                                    name="mobile-phone"
                                    size={34}
                                    color={iconColour}
                                />
                            </View>

                            <View className="flex-1 ml-4">

                                <Text className="text-xl font-semibold text-foreground">
                                    {item.deviceName}
                                </Text>

                                <Text className="text-sm text-foreground/60 mt-1">
                                    Requested {item.requestedCnt} devices
                                </Text>

                            </View>

                            <View className="items-center mr-4">

                                <Text className="text-4xl font-bold text-primary">
                                    {item.issuingCnt}
                                </Text>

                                <Text className="text-xs text-foreground/50 mt-1">
                                    Issuing
                                </Text>

                            </View>

                            <Host matchContents>
                                <Checkbox
                                    value={item.isDelivered}
                                    onValueChange={() => toggleCheckbox(item.id)}
                                />
                            </Host>

                        </View>
                    );
                }}
            />

            <SubmitButton
                text={"Complete Delivery"}
                onPress={() => {
                    console.log("delivery.jsx | SUBMIT PRESSED")
                }}
            />

        </View>
    );
}

export default Delivery;

// <View className={'self-center ml-6'}><FontAwesome name={'square-o'} size={28} color={iconColour}/></View>
