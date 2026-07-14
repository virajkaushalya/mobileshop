import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  Dimensions,
  Alert,
  Modal,
  TouchableWithoutFeedback,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import * as Location from "expo-location";
import MapView, { Marker } from "react-native-maps";

const { width, height } = Dimensions.get("window");

export default function DealerInfo({ route }) {
  const navigation = useNavigation();
  const { dealerName } = route.params;
  const [description, setDescription] = useState("");
  const [entryTime, setEntryTime] = useState(null);
  const [exitTime, setExitTime] = useState(null);
  const [currentLocation, setCurrentLocation] = useState(null);
  const [descriptions, setDescriptions] = useState([
    {
      text: "Screen replacement",
      username: "User A",
      time: new Date().toLocaleString(),
      userRole: 1,
    },
    {
      text: "Battery issue fixed",
      username: "User B",
      time: new Date().toLocaleString(),
      userRole: 2,
    },
    {
      text: "Speaker problem resolved",
      username: "User A",
      time: new Date().toLocaleString(),
      userRole: 1,
    },
    {
      text: "Charging port cleaned",
      username: "User C",
      time: new Date().toLocaleString(),
      userRole: 2,
    },
    {
      text: "Software update completed",
      username: "User B",
      time: new Date().toLocaleString(),
      userRole: 1,
    },
    {
      text: "Back cover replaced",
      username: "User C",
      time: new Date().toLocaleString(),
      userRole: 2,
    },
    {
      text: "Water damage repaired",
      username: "User A",
      time: new Date().toLocaleString(),
      userRole: 1,
    },
  ]);
  
  const [descriptionModalVisible, setDescriptionModalVisible] = useState(false);
  const [locationModalVisible, setLocationModalVisible] = useState(false);

  const handleSubmit = () => {
    if (!description || description.trim() === "") {
      Alert.alert("Error", "Description cannot be empty");
    } else {
      setDescriptions((prev) => [
        {
          text: description,
          username: "Current User",
          time: new Date().toLocaleString(),
          userRole: 1,
        },
        ...prev,
      ]);
      setDescription("");
    }
  };

  const handleEnter = async () => {
    const location = await getLocation();
    if (location) {
      setEntryTime(new Date().toLocaleString());
      setCurrentLocation(location);
      setLocationModalVisible(true);
    }
  };

  const getLocation = async () => {
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status === "granted") {
        let location = await Location.getCurrentPositionAsync({});
        return location.coords;
      } else {
        Alert.alert("Permission Denied", "Location permission is required.");
        return null;
      }
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  const handleExit = async () => {
    setExitTime(new Date().toLocaleString());
    await getLocation();
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.replace("Home")}
        >
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>

        <Text style={styles.title}>{dealerName}</Text>

        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.enterButton} onPress={handleEnter}>
            <Text style={styles.buttonText}>Enter</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.exitButton} onPress={handleExit}>
            <Text style={styles.buttonText}>Exit</Text>
          </TouchableOpacity>
        </View>

        <TextInput
          style={styles.input}
          placeholder="Enter Description"
          value={description}
          onChangeText={setDescription}
          multiline
        />
        <Button title="Submit" onPress={handleSubmit} />

        <Text style={styles.subTitle}>Last 5 Descriptions</Text>
        <FlatList
          data={descriptions.slice(0, 5)}
          renderItem={({ item }) => (
            <View style={styles.descItem}>
              <Text style={styles.descText}>{item.text}</Text>
              <Text
                style={{
                  color: item.userRole === 1 ? "red" : "darkgreen",
                  fontWeight: "bold",
                }}
              >
                {item.username}
              </Text>
              <Text style={styles.timeText}>{item.time}</Text>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />

        {descriptions.length > 5 && (
          <TouchableOpacity
            style={styles.showAllButton}
            onPress={() => setDescriptionModalVisible(true)}
          >
            <Text style={styles.showAllText}>Show All Descriptions</Text>
          </TouchableOpacity>
        )}

        {/* Description Modal */}
        <Modal
          visible={descriptionModalVisible}
          transparent={true}
          animationType="slide"
          onRequestClose={() => setDescriptionModalVisible(false)}
        >
          <TouchableWithoutFeedback
            onPress={() => setDescriptionModalVisible(false)}
          >
            <View style={styles.modalOverlay}>
              <View style={styles.modalContainer}>
                <Text style={styles.modalTitle}>All Descriptions</Text>
                <FlatList
                  data={descriptions}
                  renderItem={({ item }) => (
                    <View style={styles.descItem}>
                      <Text style={styles.descText}>{item.text}</Text>
                      <Text
                        style={{
                          color: item.userRole === 1 ? "red" : "darkgreen",
                          fontWeight: "bold",
                        }}
                      >
                        {item.username}
                      </Text>
                      <Text style={styles.timeText}>{item.time}</Text>
                    </View>
                  )}
                  keyExtractor={(item, index) => index.toString()}
                />
                <TouchableOpacity
                  style={styles.closeButton}
                  onPress={() => setDescriptionModalVisible(true)}
                >
                  <Text style={styles.closeButtonText}>Close</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </Modal>

        {/* Location Modal */}
        <Modal
          visible={locationModalVisible}
          transparent={true}
          animationType="slide"
          onRequestClose={() => setLocationModalVisible(false)}
        >
          <TouchableWithoutFeedback
            onPress={() => setLocationModalVisible(true)}
          >
            <View style={styles.modalOverlay}>
              <View style={styles.modalContainer}>
                <Text style={styles.modalTitle}>Current Location</Text>
                {currentLocation && (
                  <MapView
                    style={styles.map}
                    initialRegion={{
                      latitude: currentLocation.latitude,
                      longitude: currentLocation.longitude,
                      latitudeDelta: 0.01,
                      longitudeDelta: 0.01,
                    }}
                  >
                    <Marker
                      coordinate={currentLocation}
                      title="Current Location"
                    />
                  </MapView>
                )}
                <TouchableOpacity
                  style={styles.closeButton}
                  onPress={() => setLocationModalVisible(false)}
                >
                  <Text style={styles.closeButtonText}>Close</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#fff" },
  container: { flex: 1, padding: 20 },
  backButton: {
    position: "absolute",
    top: Platform.OS === "android" ? 20 : 40,
    left: 10,
    backgroundColor: "black",
    padding: 10,
    borderRadius: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
  },
  enterButton: { backgroundColor: "#28a745", padding: 10, borderRadius: 10 },
  exitButton: { backgroundColor: "#dc3545", padding: 10, borderRadius: 10 },
  buttonText: { color: "#fff", fontWeight: "bold" },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    textAlignVertical: "top",
  },
  subTitle: { fontSize: 18, fontWeight: "bold", marginVertical: 10 },
  descItem: {
    backgroundColor: "#f9f9f9",
    padding: 10,
    borderRadius: 10,
    marginVertical: 5,
  },
  descText: { fontSize: 16 },
  timeText: { fontSize: 12, color: "gray" },
  showAllButton: {
    marginTop: 10,
    backgroundColor: "#007bff",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  showAllText: { color: "#fff", fontWeight: "bold" },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContainer: {
    width: "90%",
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  map: { width: "100%", height: 200, borderRadius: 10, marginTop: 10 },
  closeButton: {
    backgroundColor: "#dc3545",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },
  closeButtonText: { color: "#fff", fontWeight: "bold" },
});
