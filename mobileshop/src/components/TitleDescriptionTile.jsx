import {Text, View} from "react-native";

const TitleDescriptionTile = ({title, description, className=''}) => {

    return (
        <View className={`mb-2 ml-2 ${className}`}>
            <Text className={'text-foreground text-xl font-semibold mb-1'}>{title}</Text>
            <Text className={'text-foreground/60 text-sm'}>{description}</Text>
        </View>
    );
}

export default TitleDescriptionTile;