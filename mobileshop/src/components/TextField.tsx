import {StyleSheet, Text, TextInput} from "react-native";

const TextField = () => {
  return (
      <>
          <Text style={styles.labels}>Name</Text>
          <TextInput style={styles.textField} />
      </>
  )
}
const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },

    labels: {
        fontSize: 16,
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