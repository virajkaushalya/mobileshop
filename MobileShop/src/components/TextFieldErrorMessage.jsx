import {Text} from "react-native";

const TextFieldErrorMessage = ({
                                   marginBottom = 'mb-2',
                                   errorMessage,
                               }) => {
    return (
        <Text className={`${marginBottom} pl-2 text-sm text-red-600`} >
            {errorMessage}
        </Text>
    );
}

export default TextFieldErrorMessage;