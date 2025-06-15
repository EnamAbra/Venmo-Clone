import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AntDesign from "@expo/vector-icons/AntDesign";
import { router, useLocalSearchParams } from "expo-router";
import { FormattedTransaction } from "@/mockTransaction";

const sendnow = () => {
  const { amount, name, email, avatar } = useLocalSearchParams();
  const displayName = Array.isArray(name) ? name[0] : name;
  const displayEmail = Array.isArray(email) ? email[0] : email;
  const parsedAvatar =
    typeof avatar === "string" && avatar.startsWith("http")
      ? { uri: avatar } // Remote image URL
      : require("../../assets/images/nature.jpg");
  return (
    <View className="bg-white h-[130vh]">
      <SafeAreaView>
        <View className="flex-row justify-center relative items-center gap-20">
          <TouchableOpacity
            onPress={() => router.back()}
            className="absolute left-4 top-1/2 -translate-y-1/2"
          >
            <AntDesign name="arrowleft" size={24} color="black" />
          </TouchableOpacity>
          <Text className="font-urbanist-bold text-2xl">Send Now</Text>
        </View>
        <Text className="font-urbanist-bold text-xl mt-10">Recipient</Text>
        <View className="  p-4 bg-gray-200">
          <View className="flex-row ">
            <Image
              source={parsedAvatar}
              className="w-10 h-10 rounded-full mr-4"
            />
            <Text className="font-urbanist-bold text-base">{displayName}</Text>
          </View>
          <View>
            <Text className="text-gray-500 text-sm px-12">{displayEmail}</Text>
          </View>
        </View>

        <View>
          <Text className="font-urbanist-medium mt-16">Amount to send</Text>
          <View className="px-8 py-4border border-gray-300 ">
            <Text className="font-urbanist-bold text-3xl">{amount}</Text>
          </View>
        </View>
        <Text className="font-urbanist-medium ">Add Notes</Text>
        <TextInput
          className=" bg-gray-100 rounded-lg px-4 py-2 mt-2"
          placeholder="Add a note (optional)"
          multiline
          numberOfLines={4}
        />

        <View className="flex-row  justify-center  gap-x-4 mb-0">
          <TouchableOpacity onPress={() => router.back()}>
            <View className="bg-white border border-primaryGreen rounded-xl py-4 items-center mt-24 px-10 font-urbanist-bold">
              <Text>Cancel</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View className="bg-primaryGreen rounded-xl py-4 items-center mt-24 px-10 font-urbanist-bold">
              <Text className="font-bold text-lg">Send</Text>
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default sendnow;

const styles = StyleSheet.create({});
