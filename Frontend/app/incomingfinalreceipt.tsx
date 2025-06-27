import {
  Dimensions,
  Image,
  Modal,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import { formatTransactions } from "@/mockTransaction";
import { useLocalSearchParams } from "expo-router";
import { Platform } from "react-native";
const incomingfinalreceipt = () => {
  const statusBarHeight =
    Platform.OS === "android" ? StatusBar.currentHeight || 28 : 0;

  const { id } = useLocalSearchParams(); // Get the id from the URL
  const transactions = formatTransactions().flatMap((section) => section.data);
  const transaction = transactions.find((t) => t.id === id);
  function formatAmount(value: string | string[] | undefined): string {
    const raw = Array.isArray(value) ? value[0] : value ?? "0";
    const num = parseFloat(raw);
    return num.toFixed(2);
  }

  return (
    <View>
      <View className="bg-primaryGreen h-[45vh]">
        <SafeAreaView>
          <View className="flex-row justify-between px-4 relative">
            <TouchableOpacity
              onPress={() => router.back()}
              className="flex-row items-center justify-between px-4 w-full relative h-12"
            >
              <AntDesign name="arrowleft" size={24} color="black" />
            </TouchableOpacity>
            <Text className="text-center text-2xl font-urbanist-bold absolute left-1/2 -translate-x-1/2  ">
              Incoming Request
            </Text>
            <TouchableOpacity>
              <Entypo name="dots-three-vertical" size={24} color="black" />
            </TouchableOpacity>
          </View>
          <View className="justify-center items-center  space-x-0 mt-24">
            <Text className="text-center font-urbanist-bold text-3xl">
              -2500.00 ₵
            </Text>
            <Text className="font-urbanist-medium">Ronald Richards</Text>
            <Text className="font-urbanist-medium">
              ronaldrichards@gmail.com
            </Text>
          </View>
        </SafeAreaView>
      </View>

      <View className="flex-row bg-white ">
        <View className="text-gray-200 font-urbanist-medium mt-6">
          <Row
            label="Amount Requested"
            value={formatAmount(transaction?.amount)}
          />
          <Row label="From" value={transaction?.name} />
          <Row label="Email" value={transaction?.email} />

          <Row label="Status" value={transaction?.amount} />
          <Row label="Date" value={transaction?.date} />
          <Row label="Transaction ID" value={transaction?.transactionId} />
          <Row label="Reference ID" value={transaction?.referenceId} />
        </View>
      </View>

      <View className="flex-row justify-center items-center gap-x-4 mb-10 mt-4 bg-white">
        <TouchableOpacity className=" border border-primaryGreen rounded-full  py-4 items-center  px-24 font-urbanist-bold  ">
          <Text className="font-bold text-lg">View Receipt</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default incomingfinalreceipt;

const styles = StyleSheet.create({});
function Row({
  label,
  value,
}: {
  label: string;
  value: string | number | undefined;
}) {
  return (
    <View className="flex-row justify-between px-9 my-4 gap-x-40">
      <Text className="text-base text-gray-600 font-urbanist-regular">
        {label}
      </Text>
      <Text className="text-base font-bold text-black font-urbanist-regular">
        {value}
      </Text>
    </View>
  );
}
