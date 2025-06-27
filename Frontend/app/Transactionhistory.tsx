import {
  FlatList,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import Search from "@expo/vector-icons/Ionicons";
import { SafeAreaView } from "react-native-safe-area-context";
import { router, useLocalSearchParams } from "expo-router";
import { TransactionSection } from "@/mockTransaction";
import { formatTransactions } from "@/mockTransaction";
import { FormattedTransaction } from "@/mockTransaction";
const Transactionhistory = () => {
  const transactionSections = formatTransactions();

  const flatData: FormattedTransaction[] = transactionSections.flatMap(
    (section) => section.data
  );

  const renderTransactionItem = ({ item }: { item: FormattedTransaction }) => (
    <TouchableOpacity
      onPress={() =>
        router.push({
          pathname: "/Transactiondetails/[id]",
          params: { id: item.id },
        })
      }
      className="mb-4"
    >
      <View className="flex-row items-center ml-5 mt-4 font-urbanist-regular justify-between px-5">
        <View className="flex-row items-center">
          {item.avatar && (
            <Image
              source={require("@/assets/images/nature.jpg")}
              className="w-10 h-10 rounded-full"
            />
          )}

          <Text className="text-lg font-semibold text-gray-800 ml-5 font-urbanist-regular">
            {item.name}
          </Text>
        </View>
        <View className="">
          <Text className="ml-auto mr-5 color-red-600 font-extrabold font-urbanist-regular">
            {item.amount}
          </Text>
          <Text className="text-xs text-gray-500 font-urbanist-regular">
            {item.category}
          </Text>
        </View>
      </View>
      <Text className="text-sm text-gray-500 ml-20">{item.time}</Text>
      <Text className="ml-16 font-medium mt-2 font-urbanist-regular">
        {item.type}
      </Text>
    </TouchableOpacity>
  );
  return (
    <SafeAreaView>
      <View className="flex-row justify-between mt-8 ">
        <TouchableOpacity onPress={() => router.push("/TransactionFeed")}>
          <Ionicons name="arrow-back-outline" size={24} color="black" />
        </TouchableOpacity>
        <Text className="font-extrabold text-2xl font-urbanist-regular">
          Transaction History
        </Text>
        <Search name="search-outline" size={24} color="black" />
      </View>
      <View className="mb-6">
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: 16,
            gap: 12,
            marginTop: 20,
          }}
        >
          {["All", "Sent", "Request", "Crypto", "Top-up", "Withdraw"].map(
            (label) => (
              <TouchableOpacity
                key={label}
                className="px-5 py-2 border border-gray-400 bg-transparent rounded-full justify-center items-center  min-h-[40px]"
              >
                <Text className="text-black  font-medium leading-5 font-urbanist-regular">
                  {label}
                </Text>
              </TouchableOpacity>
            )
          )}
        </ScrollView>
      </View>

      <FlatList
        data={flatData}
        keyExtractor={(item) => item.id}
        renderItem={renderTransactionItem}
        contentContainerStyle={{ paddingBottom: 30 }}
      />
    </SafeAreaView>
  );
};

export default Transactionhistory;

const styles = StyleSheet.create({});
