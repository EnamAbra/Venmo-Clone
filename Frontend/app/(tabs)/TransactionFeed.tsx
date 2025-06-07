import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import Feather from "@expo/vector-icons/Feather";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { mockTransactions } from "../../mockTransaction";
import { FormattedTransaction } from "../../mockTransaction";
import { formatTransactions } from "../../mockTransaction";
import { TransactionSection } from "../../mockTransaction";
import { Assets } from "@react-navigation/elements";
import { router } from "expo-router";

const TransactionFeed = () => {
  const transactionSections = formatTransactions();

  const renderTransactionItem = ({ item }: { item: FormattedTransaction }) => (
    <View>
      <View>
        <View className="flex-row ml-7  mt-5">
          {item.avatar && (
            <Image
              source={require("@/assets/images/nature.jpg")}
              className="w-10 h-10 rounded-full"
            />
          )}
          <Text className="text-lg font-semibold text-gray-800 ml-5">
            {item.name}
          </Text>
          <Text className="ml-60  color-red-600 font-extrabold ">
            {item.amount}
          </Text>
        </View>
        <View>
          <Text className="text-sm text-gray-500 ml-20  ">{item.time}</Text>
        </View>
      </View>
      <View>
        <Text className=" ml-16 font-medium mb-6 mt-2">{item.type}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView>
      <View className="bg-primaryGreen">
        <View className="flex-row">
          <Text className=" font-extrabold  text-5xl ml-5 mt-8 color-white mb-12">
            Fintra
          </Text>

          <Ionicons
            name="notifications"
            size={24}
            color="white"
            className=" ml-auto"
          />
        </View>
        <View>
          <Text className="flex-row text-center ">
            <Text
              key="amount"
              className="font-extrabold  text-3xl color-white
          "
            >
              9,4555.88
            </Text>

            <Text key="dollar" className="text-xs  color-white">
              $
            </Text>
          </Text>

          <Text className="font-thin text-sm text-center color-white">
            Available balance
          </Text>
        </View>
        <View className="flex-row justify-evenly mt-16  mb-10 ">
          <View className="items-center">
            <TouchableOpacity className=" w-16 h-16 rounded-full border border-white justify-center items-center">
              <Feather name="send" size={24} color="white" />
            </TouchableOpacity>
            <Text className="text-white mt-2">Send</Text>
          </View>
          <View className="items-center">
            <TouchableOpacity className=" w-16 h-16 rounded-full border border-white justify-center items-center">
              <AntDesign name="download" size={24} color="white" />
            </TouchableOpacity>
            <Text className="text-white mt-2">Request</Text>
          </View>
          <View className="items-center">
            <TouchableOpacity className=" w-16 h-16 rounded-full border border-white justify-center items-center">
              <Entypo name="wallet" size={24} color="white" />
            </TouchableOpacity>
            <Text className="text-white mt-2">Top-up</Text>
          </View>
          <View className="items-center">
            <TouchableOpacity className=" w-16 h-16 rounded-full border border-white justify-center items-center">
              <MaterialCommunityIcons
                name="cash-minus"
                size={24}
                color="white"
              />
            </TouchableOpacity>
            <Text className="text-white mt-2">Withdraw</Text>
          </View>
        </View>
      </View>
      <View className="bg-white">
        <View className="flex-row justify-between">
          <Text className="font-bold text-2xl mb-10">Transaction History </Text>
          <TouchableOpacity
            className="flex-row "
            onPress={() => router.push("/Transactiondetails")}
          >
            <Text className="color-gray-500 font-medium mr-3 mt-1 text-lg">
              View All
            </Text>
            <MaterialIcons name="navigate-next" size={24} color="#6b7280" />
          </TouchableOpacity>
        </View>

        <View>
          <FlatList
            data={transactionSections}
            keyExtractor={(item) => item.sectionTitle}
            renderItem={({ item: section }) => (
              <View>
                <View className="flex-row">
                  <Text className="text-base font-bold text-gray-700  ">
                    {section.sectionTitle}
                  </Text>
                  <View className="flex-1 h-px bg-gray-300 mt-4" />
                </View>
                <FlatList
                  data={section.data}
                  keyExtractor={(item) => item.id}
                  renderItem={renderTransactionItem}
                  ItemSeparatorComponent={() => (
                    <View className="h-px bg-gray-200 my-2" />
                  )}
                />
              </View>
            )}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default TransactionFeed;
