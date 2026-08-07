import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Dashboard from "../Tab/Dashboard";
import ShowAllSalesRep from "../Tab/ShowAllSalesRep";

const Tab = createBottomTabNavigator();

const Home = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "white", // Background color of the entire tab bar
        },
        tabBarActiveTintColor: "#1585ad", // Icon and text color for the selected tab
        tabBarInactiveTintColor: "black", // Icon and text color for unselected tabs
      }}
    >
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="home"
              color={color} // Uses the active or inactive color based on selection
              size={size}
            />
          ),
          tabBarLabel: "Dashboard",
          tabBarLabelStyle: {
            color: "inherit", // Inherit the color from tabBarActiveTintColor or tabBarInactiveTintColor
          },
        }}
      />
      <Tab.Screen
        name="ShowAllSalesRep"
        component={ShowAllSalesRep}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="storefront"
              color={color} // Uses the active or inactive color based on selection
              size={size}
            />
          ),
          tabBarLabel: "All Dealers",
          tabBarLabelStyle: {
            color: "inherit", // Inherit the color from tabBarActiveTintColor or tabBarInactiveTintColor
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default Home;
