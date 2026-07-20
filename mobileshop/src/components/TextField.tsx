import "../../global.css"

import {StyleSheet, Text, TextInput} from "react-native";

interface TextFieldProps {
    label: string;
    placeholder: string;
}

const TextField = ({label, placeholder} : TextFieldProps) => {
  return (
      <>
          <Text className={"text-lg"} style={styles.label}>{label}</Text>
          <TextInput style={styles.textField} placeholder={placeholder} />
      </>
  )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },

    label: {
        // fontSize: 16,
        marginBottom: 5,
    },

    textField: {
        borderColor: "gray",
        borderWidth: 1,
        paddingHorizontal: 10,
        paddingVertical: 15,
        borderRadius: 15,
    }

});

export default TextField;