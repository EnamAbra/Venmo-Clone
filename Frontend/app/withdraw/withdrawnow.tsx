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

const withdrawnow = () => {
  //const { type } = useLocalSearchParams();
  const methodLogos: { [key: string]: any } = {
    Visa: require("../../assets/images/visa.png"),
    MasterCard: require("../../assets/images/Mastercard_Symbol_1.png"),
    PayPal: require("../../assets/images/paypal.png"),
    ApplePay: require("../../assets/images/applepay.png"),
    GooglePay: require("../../assets/images/Icon.jpeg"),
  };
  const methodBackgrounds: { [key: string]: string } = {
    Visa: "#1A1F71", // Light background
    MasterCard: "#ffffff",
    PayPal: "#003087", // PayPal Blue
    ApplePay: "#000000", // Black background for white icon
    GooglePay: "#ffffff",
  };

  const imageTints: { [key: string]: string | undefined } = {
    Visa: undefined,
    MasterCard: undefined,
    PayPal: "white",
    ApplePay: "white",
    GooglePay: "white",
  };

  const { amount, type, method } = useLocalSearchParams();
  const methodStr = Array.isArray(method) ? method[0] : method;
  const logo = methodStr ? methodLogos[methodStr] : null;
  const bgColor = methodStr ? methodBackgrounds[methodStr] : "#f0f0f0";
  const tint = methodStr ? imageTints[methodStr] : undefined;
  const handleConfirm = () => {
    router.push({
      pathname: "/withdraw/withdrawreceipt",
      params: { amount, method },
    });
  };
  function formatAmount(value: string | string[] | undefined): string {
    const raw = Array.isArray(value) ? value[0] : value ?? "0";
    const num = parseFloat(raw);
    return num.toFixed(2);
  }

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
          <Text className="font-urbanist-bold text-xl">Withdraw Now</Text>
        </View>

        <View>
          <Text className="font-urbanist-medium mt-16">Amount to Withdraw</Text>
          <View className="flex-row">
            <View className="mb-6">
              <Text className="font-urbanist-bold text-2xl">{"\u20B5"}</Text>
            </View>
            <View className="bg-gray-100/70 p-4 rounded-xl flex-row px-4  w-11/12 py-2 self-center mt-6">
              <Text className="font-urbanist-bold text-3xl">
                {formatAmount(amount)}
              </Text>
            </View>
          </View>
        </View>

        <View className="font-urbanist-bold text-xl">
          <Text>Withdraw To</Text>
        </View>
        <View className="bg-black" style={{ backgroundColor: bgColor }}>
          <Image
            source={logo}
            style={{
              width: 60,
              height: 60,
              resizeMode: "contain",
              marginTop: 20,
              tintColor: tint,
            }}
          />
        </View>
        <Text className="font-urbanist-medium ">Add Notes</Text>
        <TextInput
          className="bg-gray-100/70 p-4 rounded-xl flex-row px-4  w-11/12 py-2 self-center mt-6"
          placeholder="Add a note (optional)"
          multiline
          numberOfLines={4}
        />

        <View className="flex-row  justify-center  gap-x-4 mb-0">
          <TouchableOpacity onPress={() => router.back()}>
            <View className="bg-white border border-primaryGreen rounded-full py-4 items-center mt-24 px-14 font-urbanist-bold  ">
              <Text>Cancel</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleConfirm}>
            <View className="bg-primaryGreen rounded-full  py-4 items-center mt-24 px-6 font-urbanist-bold  ">
              <Text className="font-bold text-lg">Confirm Withdraw</Text>
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default withdrawnow;

const styles = StyleSheet.create({});
