import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const _layout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Entypo name="home" size={24} color="#2ECC71" />
          ),
        }}
      />
      <Tabs.Screen
        name="Cards"
        options={{
          title: "Cards",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <FontAwesome5 name="credit-card" size={24} color="#2ECC71" />
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <FontAwesome6 name="circle-user" size={24} color="#2ECC71" />
          ),
        }}
      />
      <Tabs.Screen
        name="TransactionFeed"
        options={{
          title: "Pay",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <MaterialIcons name="payments" size={24} color="#2ECC71" />
          ),
        }}
      />
      <Tabs.Screen
        name="Crypto"
        options={{
          title: "Crypto",
          headerShown: false,

          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons name="bitcoin" size={24} color="#2ECC71" />
          ),
        }}
      />
    </Tabs>
  );
};

export default _layout;

const styles = StyleSheet.create({});
