import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import AntDesign from "@expo/vector-icons/AntDesign";
import { router, useLocalSearchParams } from "expo-router";
const index = () => {
  const { amount, type } = useLocalSearchParams();
  const [selectedMethod, setSelectedMethod] = useState("");
  const handleContinue = () => {
    if (selectedMethod)
      router.push({
        pathname: "/topup/topupnow",
        params: { amount, type, method: selectedMethod },
      });
  };

  return (
    <View className="bg-white h-[180vh]">
      <SafeAreaView>
        <View className="flex-row justify-center relative items-center gap-20 mb-6">
          <TouchableOpacity
            onPress={() => router.back()}
            className=" px-6 absolute left-4 top-1/2 -translate-y-1/2"
          >
            <AntDesign name="arrowleft" size={24} color="black" />
          </TouchableOpacity>

          <Text className="font-urbanist-bold text-2xl">
            Select Top Up Method
          </Text>

          <TouchableOpacity className="absolute right-2 top-1/2 -translate-y-1/2 gap-4">
            <FontAwesome6 name="add" size={24} color="black" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={() => setSelectedMethod("PayPal")}>
          <View className="bg-gray-100/70 p-4 rounded-xl flex-row px-4  w-11/12 py-2 self-center mt-6">
            <View className="  rounded-full w-20 h-20  bg-paypalBlue p-4 m-4 flex-row items-center justify-between ">
              <Image
                source={require("../../assets/images/paypal.png")}
                style={{
                  width: 40,
                  height: 35,
                  resizeMode: "contain",
                  tintColor: "white",
                }}
              />
            </View>
            <View className="pt-10">
              <Text className=" font-urbanist-bold text-lg">PayPal</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setSelectedMethod("GooglePay")}>
          <View className="bg-gray-100/70 p-4 rounded-xl flex-row px-4  w-11/12 py-2 self-center mt-6">
            <View className="rounded-full w-20 h-20  p-4 m-4 flex-col items-center justify-between ">
              <Image
                source={require("../../assets/images/Icon.jpeg")}
                style={{
                  width: 60,
                  height: 60,
                  resizeMode: "contain",
                }}
              />
            </View>
            <View className="pt-10">
              <Text className=" font-urbanist-bold text-lg">Google Pay</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelectedMethod("ApplePay")}>
          <View className="bg-gray-100/70 p-4 rounded-xl flex-row px-4  w-11/12 py-2 self-center mt-6">
            <View className="rounded-full w-20 h-20  bg-black p-4 m-4 flex-col items-center justify-between ">
              <Image
                source={require("../../assets/images/applepay.png")}
                style={{
                  width: 40,
                  height: 40,
                  resizeMode: "contain",
                }}
              />
            </View>
            <View className="pt-10">
              <View className="pt-10">
                <Text className=" font-urbanist-bold text-lg">Apple Pay</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setSelectedMethod("MasterCard")}>
          <View className="bg-gray-100/70 p-4 rounded-xl flex-row px-4  w-11/12 py-2 self-center mt-6">
            <View className="rounded-full w-20 h-20  bg-black p-4 m-4 flex-col items-center justify-between ">
              <Image
                source={require("../../assets/images/Mastercard_Symbol_1.png")}
                style={{
                  width: 40,
                  height: 35,
                  resizeMode: "contain",
                }}
              />

              <Text className="text-white font-urbanist-regular text-[7px]">
                mastercard
              </Text>
            </View>
            <View className="pt-10">
              <Text className=" font-urbanist-bold text-lg">MasterCard</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setSelectedMethod("Visa")}>
          <View className="bg-gray-100/70 p-4 rounded-xl flex-row px-4  w-11/12 py-2 self-center mt-6">
            <View className="rounded-full w-20 h-20  bg-visaBlue p-4 m-4 flex-row items-center justify-between ">
              <Image
                source={require("../../assets/images/visa.png")}
                style={{
                  width: 40,
                  height: 35,
                  resizeMode: "contain",
                  tintColor: "white",
                }}
              />
            </View>
            <View className="pt-10">
              <Text className=" font-urbanist-bold text-lg">Visa</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleContinue}>
          <View className="rounded-full bg-primaryGreen px-6 py-4 self-center mt-10 w-11/12">
            <Text className="text-center font-urbanist-bold">Continue</Text>
          </View>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});
