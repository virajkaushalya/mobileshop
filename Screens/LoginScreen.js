import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
  ActivityIndicator,
  Image,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

export default function Login() {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  const handleLogin = async () => {
    navigation.replace("Home");

    try {
      const response = await axios.post(
        "http://192.168.8.150:8080/MobileShopProjects/Colombo/ColomboShop_Api/api/api.php",
        {
          request_type: "user_login",
          username: name.toLowerCase(),
          password: password,
        }
      );

      if (response.data.code === "1") {
        navigation.replace("Home");
      } else {
        setErrorMessage("Sorry, something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage("An error occurred. Please try again later.");
    }
  };

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <KeyboardAwareScrollView contentContainerStyle={styles.container}>
        <Image
          source={require("../assets/loginpage.png")}
          style={styles.image}
        />
        <Text style={styles.title}>Login as a Git hub</Text>
        <TextInput
          style={styles.input}
          placeholderTextColor={"#525151"}
          placeholder="Enter Username"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholderTextColor={"#525151"}
          placeholder="Enter Password"
          keyboardType="email-address"
          value={password}
          onChangeText={setPassword}
        />
        {errorMessage ? (
          <Text style={styles.errorText}>{errorMessage}</Text>
        ) : null}

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>

        {loading && <ActivityIndicator size="large" color="#000" />}
      </KeyboardAwareScrollView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#fff",
    padding: 20,
    justifyContent: "center",
  },
  backButton: {
    position: "absolute",
    top: 40,
    left: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    backgroundColor: "#f5f5f5",
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
  },
  button: {
    backgroundColor: "#000",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  errorText: {
    color: "red",
    marginBottom: 15,
  },
  image: {
    width: 250, // Adjust as needed
    height: 250, // Adjust as needed
    alignSelf: "center",
  },
});
