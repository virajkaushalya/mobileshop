import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Modal,
  TextInput,
  Button,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import moment from "moment";

export default function Dashboard() {
  const navigation = useNavigation();
  const currentDate = moment().format("[Date] DD-MM-YYYY (dddd)");
  const [dealers, setDealers] = useState([
    { name: "ABC MOBILE", order: 1 },
    { name: "CDE MOBILE", order: 2 },
    { name: "RDB MOBILE", order: 3 },
  ]);
  const [modalVisible, setModalVisible] = useState(false);
  const [tempDealers, setTempDealers] = useState([...dealers]);
  const [error, setError] = useState("");

  const handleLongPress = () => {
    Alert.alert(
      "Change Visiting Order",
      "Do you want to change the visiting order?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Yes",
          onPress: () => {
            setTempDealers([...dealers]);
            setError("");
            setModalVisible(true);
          },
        },
      ],
      { cancelable: true }
    );
  };

  const updateOrder = (index, newOrder) => {
    const updatedDealers = [...tempDealers];
    const parsedOrder = parseInt(newOrder);

    updatedDealers[index].order = newOrder ? parsedOrder : "";

    setTempDealers(updatedDealers);
    checkForValidation(updatedDealers);
  };

  const checkForValidation = (updatedDealers) => {
    const orderValues = updatedDealers.map((dealer) => dealer.order);
    const uniqueValues = new Set(orderValues);

    // Check for duplicates
    if (orderValues.length !== uniqueValues.size) {
      setError("Duplicate order numbers are not allowed!");
    }
    // Check for empty or zero values
    else if (orderValues.some((order) => !order || order === 0)) {
      setError("Order values cannot be empty or 0!");
    } else {
      setError("");
    }
  };

  const confirmOrderChange = () => {
    if (error) return;
    const sortedDealers = [...tempDealers].sort((a, b) => a.order - b.order);
    setDealers(sortedDealers);
    setModalVisible(false);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.memberCard}
      onLongPress={handleLongPress}
      onPress={() =>
        navigation.replace("DealerInfo", { dealerName: item.name })
      }
    >
      <Text style={styles.memberName}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{currentDate}</Text>
      <FlatList
        data={dealers}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
      />

      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Reorder Dealers</Text>
            {tempDealers.map((dealer, index) => (
              <View key={dealer.name} style={styles.inputRow}>
                <Text style={styles.dealerName}>{dealer.name}</Text>
                <TextInput
                  style={styles.input}
                  keyboardType="numeric"
                  value={dealer.order.toString()}
                  onChangeText={(text) => updateOrder(index, text)}
                />
              </View>
            ))}
            {error ? <Text style={styles.errorText}>{error}</Text> : null}
            <Button
              title="Confirm"
              onPress={confirmOrderChange}
              disabled={!!error}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f4",
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    marginBottom: 20,
    color: "#333",
  },
  memberCard: {
    backgroundColor: "#fff",
    padding: 15,
    marginVertical: 8,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  memberName: {
    fontSize: 16,
    color: "#333",
    fontWeight: "bold",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    width: "80%",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
  },
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  dealerName: {
    fontSize: 16,
  },
  input: {
    width: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 5,
    textAlign: "center",
    borderRadius: 5,
  },
  errorText: {
    color: "red",
    textAlign: "center",
    marginVertical: 10,
    fontWeight: "bold",
  },
});
