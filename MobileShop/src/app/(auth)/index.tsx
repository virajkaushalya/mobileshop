import { StyleSheet, Text, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView>
        <Text style={styles.labels}>Name</Text>
        <TextInput style={styles.textField} />
    </SafeAreaView>
  );
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
