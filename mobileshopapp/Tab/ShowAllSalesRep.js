import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  ActivityIndicator,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";


// Get screen height for responsiveness
const { height } = Dimensions.get("window");

// Define dynamic margin-top based on screen size
const dynamicMarginTop = height > 600 ? 40 : 20;

export default function ShowAllSalesRep() {
  const navigation = useNavigation();

  const [shops, setShops] = useState([]); // State to store the list of shops
  const [filteredShops, setFilteredShops] = useState([]); // State to store filtered shops
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(""); // Error state
  const [searchQuery, setSearchQuery] = useState(""); // Search query state

  useEffect(() => {
    fetchMembersData();
  }, []);

  const fetchMembersData = async () => {
    try {
      const response = await axios.post(
        "http://192.168.8.150:8080/MobileShopProjects/Colombo/ColomboShop_Api/api/api.php",
        {
          request_type: "get_all_dealers",
          salerepid: 1,
        }
      );

      if (response.data.code === "1") {
        setShops(response.data.data); // Store the data in state
        setFilteredShops(response.data.data); // Initially show all shops
      } else {
        setError("Failed to fetch data");
      }
    } catch (error) {
      console.error("Error fetching members data:", error);
      setError("An error occurred while fetching data.");
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query.trim() === "") {
      setFilteredShops(shops); // Show all shops when search is empty
    } else {
      const filteredData = shops.filter((shop) =>
        shop.shop_name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredShops(filteredData); // Update the filtered shops based on search query
    }
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#007AFF" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.screen}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.screen}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search Shop Name"
        value={searchQuery}
        onChangeText={handleSearch}
      />
      <Text style={styles.header}>All Dealers</Text>

      <FlatList
        data={filteredShops} // Use filtered shops data
        keyExtractor={(item) => item.id.toString()} // Unique key for each item
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() =>
              navigation.replace("DealerInfo", { dealerName: item.shop_name })
            }
          >
            <Text style={styles.itemText}>{item.shop_name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff", // White background
    justifyContent: "flex-start",
    paddingTop: 20,
    paddingHorizontal: 15,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 24,
    fontWeight: "600",
    marginBottom: 20,
    color: "#333", // Dark text for header
  },
  searchInput: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 20,
    paddingLeft: 15,
    marginTop: dynamicMarginTop, // Apply responsive margin-top
    marginBottom: 20,
    fontSize: 16,
    color: "#333",
    backgroundColor: "#f9f9f9",
  },
  errorText: {
    fontSize: 18,
    color: "#FF3B30", // Red color for error
    textAlign: "center",
    padding: 20,
  },
  item: {
    backgroundColor: "#f9f9f9",
    padding: 15,
    borderRadius: 8,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3, // For Android shadow
  },
  itemText: {
    fontSize: 16,
    color: "#333", // Darker text color for item
  },
});
