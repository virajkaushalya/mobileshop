import {Pressable, Text, useColorScheme, View} from "react-native";
import FontAwesome from "@react-native-vector-icons/fontawesome";

const SubmitButton = ({
                          text,
                          onPress,
                          marginTop = 'mt-8',
                          paddingY = 'py-3',
                          isContinue = false,
                          backgroundOpacity = 80,
                          borderRadius = 'xl'
                      }) => {

    const colourScheme = useColorScheme();
    const placeholderColour = colourScheme === "dark" ? "hsl(0 0% 100%)" : "hsl(0 0% 15%)";

    return (
        <Pressable
            className={`mx-4 ${marginTop} mb-0 ${paddingY} flex-row bg-primary/${backgroundOpacity} rounded-${borderRadius} justify-center items-center`}
            onPress={onPress}
        >
            <Text className={'flex-1 text-foreground font-semibold uppercase tracking-[2px] text-center'}>{text}</Text>
            {isContinue && <View className={'mr-8'}><FontAwesome name={'angle-right'} size={24} color={placeholderColour}/></View>}
        </Pressable>
    );
}

export default SubmitButton;