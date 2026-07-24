import {FlatList, Text, View} from "react-native";
import FontAwesome from "@react-native-vector-icons/fontawesome";
import {Checkbox, Host} from "@expo/ui";
import {useState} from "react";
import {SafeAreaView} from "react-native-safe-area-context";
import SubmitButton from "../../../components/SubmitButton";

const Delivery = () => {

    const iconColour = "hsl(221 21% 31%)"

    const [devices, setDevices] = useState([
        {id: "1", name: "iPhone 14", requested: 6, issuing: 4, checked: false},
        {id: "2", name: "iPhone 13", requested: 3, issuing: 2, checked: false},
        {id: "3", name: "Samsung S23", requested: 1, issuing: 1, checked: false},
        {id: "4", name: "iPhone 14", requested: 6, issuing: 4, checked: false},
        {id: "5", name: "iPhone 13", requested: 3, issuing: 2, checked: false},
        {id: "6", name: "Samsung S23", requested: 1, issuing: 1, checked: false},
        {id: "7", name: "iPhone 14", requested: 6, issuing: 4, checked: false},
        {id: "8", name: "iPhone 13", requested: 3, issuing: 2, checked: false},
        {id: "9", name: "Samsung S23", requested: 1, issuing: 1, checked: false},
        {id: "10", name: "iPhone 14", requested: 6, issuing: 4, checked: false},
        {id: "11", name: "iPhone 13", requested: 3, issuing: 2, checked: false},
        {id: "12", name: "Samsung S23", requested: 1, issuing: 1, checked: false},
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
                                    {item.name}
                                </Text>

                                <Text className="text-sm text-foreground/60 mt-1">
                                    Requested {item.requested} devices
                                </Text>

                            </View>

                            <View className="items-center mr-4">

                                <Text className="text-4xl font-bold text-primary">
                                    {item.issuing}
                                </Text>

                                <Text className="text-xs text-foreground/50 mt-1">
                                    Issuing
                                </Text>

                            </View>

                            <Host matchContents>
                                <Checkbox
                                    value={item.checked}
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
