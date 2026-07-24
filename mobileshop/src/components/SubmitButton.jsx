import {Pressable, Text} from "react-native";

const SubmitButton = ({
                          text,
                          onPress
                      }) => {
    return (
        <Pressable
            className={'mx-4 mt-8 mb-4 py-4 bg-primary/80 rounded-xl justify-center items-center'}
            onPress={onPress}
        >
            <Text className={'text-foreground font-semibold uppercase tracking-[2px]'}>{text}</Text>
        </Pressable>
    );
}

export default SubmitButton;