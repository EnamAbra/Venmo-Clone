import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import Feather from "@expo/vector-icons/Feather";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect } from "react";
import { formatTransactions } from "@/mockTransaction";
import { JSX } from "react/jsx-runtime";
import * as MediaLibrary from "expo-media-library";
import ViewShot from "react-native-view-shot";

export default function receipt(): JSX.Element {
  const { id } = useLocalSearchParams(); // Get the id from the URL
  const transactions = formatTransactions().flatMap((section) => section.data);
  const transaction = transactions.find((t) => t.id === id);
  const viewShotRef = useRef<ViewShot>(null);

  const handleDownload = async () => {
    if (!viewShotRef.current) {
      Alert.alert("Error", "Something went wrong. Try again.");
      return;
    }
    try {
      const uri = await viewShotRef.current?.capture?.(); // Capture as image

      if (!uri) {
        Alert.alert("Error", "Unable to capture the receipt.");
        return;
      }

      const permission = await MediaLibrary.requestPermissionsAsync();
      if (!permission.granted) {
        Alert.alert("Permission required", "Please allow media access.");
        return;
      }

      const asset = await MediaLibrary.createAssetAsync(uri);
      await MediaLibrary.createAlbumAsync("Downloads", asset, false);

      Alert.alert("Success", "Receipt saved to Downloads.");
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      Alert.alert("Download failed", message);
    }
  };
  return (
    <SafeAreaView>
      <ViewShot
        ref={viewShotRef}
        options={{ format: "png", quality: 1 }}
        style={{ backgroundColor: "white" }}
      >
        <View className="flex-row justify-around">
          <AntDesign
            name="arrowleft"
            size={24}
            color="black"
            onPress={() => router.push(`/Transactiondetails/${id}`)}
          />
          <Text className="font-urbanist-bold text-3xl">Receipt</Text>
          <View className="flex-row gap-4">
            <Ionicons name="share-social-outline" size={24} color="black" />
            <TouchableOpacity onPress={handleDownload}>
              <Feather name="download" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>
        <View className="justify-center items-center mt-10 flex-row  space-x-0">
          <Image
            source={require("../../assets/images/BlackLogo.png")}
            style={{ width: 100, height: 100 }}
          />
          <View>
            <Text className="font-urbanist-bold text-2xl ml-0">Fintra</Text>
          </View>
        </View>
        <View className="bg-gray-200 bg-opacity-20  justify-center items-center  w-11/12 py-10 self-center">
          <Text className="text-secondary font-medium font-urbanist-regular ">
            {transaction?.category}
          </Text>
          <Text className="font-urbanist-bold text-6xl">
            {transaction?.amount}
          </Text>
        </View>
        <View className="flex-row">
          <View>
            <Row label="Sent" value={transaction?.amount} />

            <Row label="Email" value={transaction?.email} />
            <View className="h-px bg-gray-300 my-4 w-full" />
            <Row label="Recipient" value={transaction?.name} />
            <View className="h-px bg-gray-300 my-4 w-full" />
            <Row label="Amount Sent" value={transaction?.amount} />
            <Row label="Date" value={transaction?.date} />
            <Row label="Transaction ID" value={transaction?.transactionId} />
            <Row label="Reference ID" value={transaction?.referenceId} />
            <View className="h-px bg-gray-300 my-4 w-3/4 self-center" />
          </View>
        </View>
        <View className="absolute bottom-0 w-full p-4  items-center">
          <Text className="text-gray-600">
            This receipt is proof of a valid transaction
          </Text>
        </View>
      </ViewShot>
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
