import {Text, View} from "react-native";
import {ReportScreenData} from "../data/ReportScreenData";
import {formatCurrency} from "../ulitily/inputFormatter";
import PaymentPill from "./PaymentPill";
import FontAwesome from "@react-native-vector-icons/fontawesome";

const ShopPaymentCard = ({item}) => {
    const chequeTotal = item.cheques.reduce((total, cheque) => total + cheque.amount, 0);
    const shopTotal = item.cash + chequeTotal;

    return (
        <View className={'p-4 bg-card rounded-3xl border border-border'}>

            <View className={'gap-3 flex-row justify-center items-center'}>
                <View className={'flex-1'}>
                    <Text className={'text-xl text-foreground font-semibold uppercase'}>{item.shopName}</Text>
                    <Text className={'mt-1 text-foreground/40 text-xs font-semibold'}>{ReportScreenData.shopId} {item.shopId}</Text>
                </View>

                <View className={'px-3 py-2 bg-primary/15 rounded-2xl'}>
                    <Text className={'text-xs text-primary font-semibold uppercase'}>{ReportScreenData.total}</Text>
                    <Text
                        className={'text-sm text-foreground font-bold'}
                        numberOfLines={1}
                        adjustsFontSizeToFit={true}
                    >
                        {formatCurrency(shopTotal)}
                    </Text>
                </View>
            </View>

            <View className={'mt-4 flex-row gap-3'}>
                <PaymentPill icon={'money'} value={formatCurrency(item.cash)} label={"Cash"}/>
                <PaymentPill icon={'credit-card'} value={formatCurrency(chequeTotal)} label={"Cheque"}/>
            </View>

            <View className={'mt-4'}>

                <Text className={'mb-2 text-sm text-foreground/70 font-semibold'}>{ReportScreenData.checkDetails}</Text>

                {
                    (item.cheques.length === 0)
                        ? (
                            <View className={'px-4 py-3 rounded-2xl border border-border border-dashed'}>
                                <Text className={'text-sm text-foreground/45'}>{ReportScreenData.noChequesMsg}</Text>
                            </View>
                        )
                        : (
                            <View className={'gap-2'}>
                                {
                                    item.cheques.map((cheque) => {
                                        return (
                                            <View
                                                key={cheque.number}
                                                className={'px-4 py-3 bg-secondary/50 rounded-2xl flex-row items-center'}
                                            >
                                                <View className={'mr-3 h-8 w-8 items-center justify-center bg-card rounded-xl'}>
                                                    <FontAwesome name='file-text-o' size={14} color='hsl(217 91% 60%)'/>
                                                </View>

                                                <Text className={'flex-1 text-sm text-foreground font-semibold'}>#{cheque.number}</Text>
                                                <Text className={'text-sm text-foreground font-semibold'}>{formatCurrency(cheque.amount)}</Text>

                                            </View>
                                        )
                                    })
                                }
                            </View>
                        )
                }


            </View>

        </View>
    );

}

export default ShopPaymentCard;