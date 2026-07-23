import "../../global.css"

import {Text, TextInput, useColorScheme, View} from "react-native";
import TitleDescriptionTile from "./TitleDescriptionTile";

const MultiLineTextField = ({
                                title,
                                description,
                                value,
                                placeholder,
                                editable = true,
                                keyboardType = "default",
                                onChangeText,
                                readOnly = false,
                            }) => {

    const colourScheme = useColorScheme();
    const placeholderColour = colourScheme === "dark" ? "hsl(219 9% 44%)" : "hsl(219 9% 44%)";

    return (
        <View className={'px-2 flex-1'}>

            <TitleDescriptionTile title={title} description={description}/>

            <View className={'mb-5 px-2 flex-row items-center rounded-2xl border border-border bg-card focus:border-ring'}>
                <TextInput
                    className={'flex-1 min-h-32 text-foreground'}
                    value={value}
                    placeholder={placeholder}
                    placeholderTextColor={placeholderColour}
                    textAlignVertical="top"
                    autoCapitalize={'sentences'}
                    editable={editable}
                    keyboardType={keyboardType}
                    multiline={true}
                    onChangeText={onChangeText}
                    numberOfLines={5}
                    readOnly={readOnly}
                />
            </View>

        </View>
    )
}


export default MultiLineTextField;