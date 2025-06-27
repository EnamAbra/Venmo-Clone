import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { SafeAreaView } from "react-native-safe-area-context";
import { router, useLocalSearchParams } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";

const incoming = () => {
  return (
    <View className="bg-white h-[100vh] ">
      <SafeAreaView>
        <View className="flex-row justify-center relative items-center bg-white gap-20">
          <TouchableOpacity
            onPress={() => router.back()}
            className="absolute left-4 top-1/2 -translate-y-1/2"
          >
            <AntDesign name="arrowleft" size={24} color="black" />
          </TouchableOpacity>
          <Text className="text-center text-2xl font-urbanist-bold">
            Notifications
          </Text>
        </View>

        <View className="flex-col items-center mt-10 w-11/12 bg-white border border-gray-300 rounded-lg p-4 ">
          <View className="mb-4 ">
            <TouchableOpacity onPress={() => router.push("/incoming")}>
              <View className="flex-row">
                <Text>Incoming Requests</Text>
                <Ionicons
                  name="chevron-forward-outline"
                  size={24}
                  color="black"
                />
              </View>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity>
              <View className="flex-row">
                <Text>Pending Requests</Text>
                <Ionicons
                  name="chevron-forward-outline"
                  size={24}
                  color="black"
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default incoming;

const styles = StyleSheet.create({});
