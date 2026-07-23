import {FlatList, Text, View} from "react-native";
import FontAwesome from "@react-native-vector-icons/fontawesome";
import {Checkbox, Host} from "@expo/ui";
import {useState} from "react";

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
        <View className={'px-4 py-6 bg-transparent'}>
            <View className={''}>
                <Text className={'text-3xl text-foreground font-semibold'}>Delivery Details</Text>
                <Text className={'text-foreground/60'}>Below are the list of devices needed to be handover</Text>
            </View>

            <FlatList
                showsVerticalScrollIndicator={false}
                className="mt-6"
                data={devices}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => {

                    return (

                        <View className="flex-row bg-card mb-2 px-4 py-2 rounded-2xl border border-primary/30">

                            <View className={'self-center'}><FontAwesome
                                name="mobile-phone"
                                size={48}
                                color={iconColour}
                            /></View>

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
                }}
            />

        </View>
    );
}

export default Delivery;

// <View className={'self-center ml-6'}><FontAwesome name={'square-o'} size={28} color={iconColour}/></View>
