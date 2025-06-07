import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import Search from "@expo/vector-icons/Ionicons";
import { SafeAreaView } from "react-native-safe-area-context";
const Transactiondetails = () => {
  return (
    <SafeAreaView>
      <View className="flex-row justify-between mt-8 ">
        <TouchableOpacity>
          <Ionicons name="arrow-back-outline" size={24} color="black" />
        </TouchableOpacity>
        <Text className="font-extrabold text-2xl">Transaction History </Text>
        <Search name="search-outline" size={24} color="black" />
      </View>
      <View className="flex-row justify-evenly">
        <TouchableOpacity className=" w-10 h-10 rounded-full border-black">
          <Text>All</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Sent</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Request</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Crypto</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Top-up</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Withdraw</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Transactiondetails;

const styles = StyleSheet.create({});
