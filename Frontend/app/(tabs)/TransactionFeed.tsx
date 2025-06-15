import {
  ActivityIndicator,
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
import { useFonts } from "expo-font";
const TransactionFeed = () => {
  const [fontsLoaded] = useFonts({
    "Urbanist-Regular": require("../../assets/fonts/Urbanist/static/Urbanist-Regular.ttf"),
    "Urbanist-Bold": require("../../assets/fonts/Urbanist/static/Urbanist-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }
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
          <Text className="text-lg font-semibold text-gray-800 ml-5 font-urbanist-regular">
            {item.name}
          </Text>
          <Text className="ml-60  text-red-600 font-extrabold font-urbanist-regular">
            {item.amount}
          </Text>
        </View>
        <View>
          <Text className="text-sm text-gray-500 ml-20 font-urbanist-regular ">
            {item.time}
          </Text>
        </View>
      </View>
      <View>
        <Text className=" ml-16 font-medium mb-6 mt-2 font-urbanist-regular">
          {item.type}
        </Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView>
      <View className="bg-primaryGreen  ">
        <View className="flex-row">
          <Text className=" font-extrabold  text-5xl ml-5 mt-8 text-white mb-12 font-urbanist-regular">
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
              className="font-extrabold  text-3xl text-white font-urbanist-regular
          "
            >
              9,4555.88
            </Text>

            <Text
              key="dollar"
              className="text-xs  text-white font-urbanist-regular"
            >
              $
            </Text>
          </Text>

          <Text className="font-thin text-sm text-center text-white font-urbanist-regular">
            Available balance
          </Text>
        </View>
        <View className="flex-row justify-evenly mt-16  mb-10 ">
          <View className="items-center">
            <TouchableOpacity
              onPress={() => router.push("/send")}
              className=" w-16 h-16 rounded-full border border-white justify-center items-center"
            >
              <Feather name="send" size={24} color="white" />
            </TouchableOpacity>
            <Text className="text-white mt-2 font-urbanist-regular">Send</Text>
          </View>
          <View className="items-center">
            <TouchableOpacity
              onPress={() => router.push("/request")}
              className=" w-16 h-16 rounded-full border border-white justify-center items-center"
            >
              <AntDesign name="download" size={24} color="white" />
            </TouchableOpacity>
            <Text className="text-white mt-2 font-urbanist-regular">
              Request
            </Text>
          </View>
          <View className="items-center">
            <TouchableOpacity className=" w-16 h-16 rounded-full border border-white justify-center items-center">
              <Entypo name="wallet" size={24} color="white" />
            </TouchableOpacity>
            <Text className="text-white mt-2 font-urbanist-regular">
              Top-up
            </Text>
          </View>
          <View className="items-center">
            <TouchableOpacity className=" w-16 h-16 rounded-full border border-white justify-center items-center">
              <MaterialCommunityIcons
                name="cash-minus"
                size={24}
                color="white"
              />
            </TouchableOpacity>
            <Text className="text-white mt-2 font-urbanist-regular">
              Withdraw
            </Text>
          </View>
        </View>
      </View>
      <View className="bg-white">
        <View className="flex-row justify-between">
          <Text className="font-bold text-2xl mb-10 font-urbanist-regular">
            Transaction History{" "}
          </Text>
          <TouchableOpacity
            className="flex-row "
            onPress={() => router.push("/Transactionhistory")}
          >
            <Text className="text-gray-500 font-medium mr-3 mt-1 text-lg font-urbanist-regular">
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
                  <Text className="text-base font-bold text-gray-700 font-urbanist-regular ">
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
