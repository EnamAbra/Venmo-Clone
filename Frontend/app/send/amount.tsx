import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AntDesign from "@expo/vector-icons/AntDesign";
import { router } from "expo-router";
import { Button } from "react-native";
import { useLocalSearchParams } from "expo-router";

const Amountscreen = () => {
  const { type } = useLocalSearchParams();

  const { name, email, avatar } = useLocalSearchParams();
  const [amount, setAmount] = useState("");
  const handleContinue = () => {
    if (amount) {
      router.push({
        pathname: "/topup/topupnow",
        params: { type, amount, name, email, avatar },
      });
    }
  };
  return (
    <View className="bg-primaryGreen h-[60vh]">
      <SafeAreaView>
        <View className="flex-row justify-center relative items-center gap-20">
          <TouchableOpacity
            onPress={() => router.back()}
            className="absolute left-4 top-1/2 -translate-y-1/2"
          >
            <AntDesign name="arrowleft" size={24} color="black" />
          </TouchableOpacity>
          <Text className="font-urbanist-bold text-2xl">Amount to {type}</Text>
        </View>
        <View>
          <View
            className="
          justify-center items-center mt-40"
          >
            <View className="flex-row ">
              <TextInput
                className="text-3xl font-urbanist-bold"
                placeholder="Enter an amount"
                keyboardType="numeric"
                value={amount}
                onChangeText={setAmount}
              />
              <Text className="mb-1">₵</Text>
            </View>
            <View className="flex-row justify-center items-center mt-30">
              <Text className="font-urbanist-medium text-sm">
                Available Balance:
              </Text>
              <Text className="font-urbanist-medium">9645.50</Text>
            </View>
            <TouchableOpacity
              className="bg-primaryGreen rounded-xl py-3 items-center mt-72 px-20 font-urbanist-bold"
              onPress={handleContinue}
            >
              <Text className="text-white font-bold text-lg">Continue</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* <TouchableOpacity
          className="mt-60 self-center"
          onPress={() => {
            "/send/sendnow";
          }}
        ></TouchableOpacity> */}
      </SafeAreaView>
    </View>
  );
};

export default Amountscreen;

const styles = StyleSheet.create({});
