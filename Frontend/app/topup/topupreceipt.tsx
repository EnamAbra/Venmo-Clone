import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect } from "react";
import { formatTransactions } from "@/mockTransaction";
import { JSX } from "react/jsx-runtime";
import Ionicons from "@expo/vector-icons/Ionicons";
export default function receipt(): JSX.Element {
  const { id, amount, method } = useLocalSearchParams(); // Get the id from the URL
  const transactions = formatTransactions().flatMap((section) => section.data);
  const transaction = transactions.find((t) => t.id === id);
  function formatAmount(value: string | string[] | undefined): string {
    const raw = Array.isArray(value) ? value[0] : value ?? "0";
    const num = parseFloat(raw);
    return num.toFixed(2);
  }

  return (
    <SafeAreaView>
      <View>
        <TouchableOpacity
          onPress={() => router.push("/TransactionFeed")}
          className="absolute top-0 left-0 z-10"
        >
          <Ionicons name="close" size={24} color="black" />
        </TouchableOpacity>
        <View className="items-center mt-10">
          <View className=" rounded-full w-28 h-28  border-2 border-black  bg-primaryGreen mt-20  mb-8  justify-center items-center">
            <FontAwesome6 name="check" size={40} color="black" />
          </View>
        </View>
        <View>
          <Text className="font-urbanist-bold text-6xl text-center">
            ₵{formatAmount(amount)}
          </Text>
        </View>
        <View>
          <Text className="font-urbanist-regular text-gray-200 ml-0 text-center">
            You top up to SwiftPay Balance
          </Text>
        </View>

        <View className="flex-row mt-12 bg-gray-200 bg-opacity-20">
          <View>
            <Row label="You top up " value={formatAmount(amount)} />

            <Row label="From" value={transaction?.category} />

            <Row label="Payment Method" value={transaction?.name} />

            <Row label="Date" value={transaction?.date} />

            <Row label="Transaction ID" value={transaction?.transactionId} />
            <Row label="Reference ID" value={transaction?.referenceId} />
          </View>
        </View>
        <View className="w-full p-4  items-center">
          <Text className="text-gray-600">
            This receipt is proof of a valid transaction
          </Text>
        </View>

        <View className="flex-row justify-center items-center gap-x-4 mb-0">
          <TouchableOpacity className="bg-whie border border-primaryGreen rounded-full  py-4 items-center mt-24 px-6 font-urbanist-bold  ">
            <Text className="font-bold text-lg">Download Receipt</Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-primaryGreen rounded-full  py-4 items-center mt-24 px-6 font-urbanist-bold  ">
            <Text className="font-bold text-lg">Share Receipt</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
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
