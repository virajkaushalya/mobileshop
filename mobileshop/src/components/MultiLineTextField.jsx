import "../../global.css"

import {Text, TextInput, useColorScheme, View} from "react-native";
import TitleDescriptionTile from "./TitleDescriptionTile";
import TextFieldErrorMessage from "./TextFieldErrorMessage";

const MultiLineTextField = ({
                                title,
                                description,
                                value,
                                placeholder,
                                editable = true,
                                keyboardType = "default",
                                onChangeText,
                                readOnly = false,
                                errorMessage = "",
                            }) => {

    const isError = errorMessage;
    const colourScheme = useColorScheme();
    const placeholderColour = colourScheme === "dark" ? "hsl(219 9% 44%)" : "hsl(219 9% 44%)";

    return (
        <View className={'px-2 flex-1'}>

            <TitleDescriptionTile title={title} description={description}/>

            <View className={`px-2 flex-row items-center rounded-2xl border border-border bg-card ${(isError ? 'border-red-600 focus:border-red-600' : 'mb-5 focus:border-ring')}`}>
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

            {isError && <TextFieldErrorMessage errorMessage={errorMessage} marginBottom={'mb-5'}/>}

        </View>
    )
}


export default MultiLineTextField;