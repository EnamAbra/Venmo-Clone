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
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import { formatTransactions } from "@/mockTransaction";
import { useLocalSearchParams } from "expo-router";
import { Platform } from "react-native";
const incoming = () => {
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
  const [modalVisible, setModalVisible] = React.useState(false);
  const [declineVisible, setDeclineVisible] = React.useState(false);
  const [requestDeclined, setRequestDeclined] = React.useState(false);
  const [showDeclinedModal, setShowDeclinedModal] = React.useState(false);
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
              2500.00 ₵
            </Text>
            <Text className="font-urbanist-medium">Ronald Richards</Text>
            <Text className="font-urbanist-medium">
              ronaldrichards@gmail.com
            </Text>
          </View>
        </SafeAreaView>
      </View>

      <View className="flex-row ">
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

      <View className="flex-row justify-center items-center gap-x-4 mb-10 mt-4">
        <TouchableOpacity
          className="bg-white border border-primaryGreen rounded-full  py-4 items-center  px-16 font-urbanist-bold  "
          onPress={() => setDeclineVisible(true)}
        >
          <Text className="font-bold text-lg">Decline</Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="bg-primaryGreen rounded-full  py-4 items-center  px-6 font-urbanist-bold  "
          onPress={() => setModalVisible(true)}
        >
          <Text className="font-bold text-lg">Accept Request</Text>
        </TouchableOpacity>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View className="flex-1">
          <Pressable
            className="flex-1 bg-black/40 
          absolute top-0 left-0 right-0 bottom-0 "
            onPress={() => setModalVisible(false)}
          >
            <View className="bg-white h-[64vh] absolute bottom-0 left-0 right-0  p-6 rounded-t-2xl ">
              <View className=" justify-center items-center mb-6">
                <Text className="text-center font-urbanist-bold text-3xl ">
                  Accept Request
                </Text>
                <View className="h-px bg-gray-200 my-4 w-3/4 self-center" />
              </View>
              <View className="bg-gray-100/70 p-10 rounded-xl px-8 w-11/12 py-10 self-center mt-6">
                <Text className="text-center font-urbanist-medium text-gray-300 ">
                  Amount Requested
                </Text>
                <Text className="text-center font-urbanist-bold text-2xl ">
                  ₵ 2500.00
                </Text>
                <Text className="text-center font-urbanist-medium text-gray-300">
                  This amount will be charged from your balance
                </Text>
              </View>
              <View className="mt-2">
                <View className="flex-row items-center ml-6">
                  <Text className=" font-urbanist-medium text-gray-200 mt-4">
                    Send to
                  </Text>
                  <View className="h-px bg-gray-200 my-4 w-3/4  mt-8 self-center" />
                </View>

                <View className=" flex-row mt-2">
                  <View>
                    <Image
                      source={require("../../Frontend/assets/images/nature.jpg")}
                      className="w-14 h-14 rounded-full"
                    />
                  </View>
                  <View>
                    <Text className="font-urbanist-bold text-2xl">
                      Ronald Richards
                    </Text>
                    <Text className="text-gray-300">
                      ronaldrixhards@gmail.com
                    </Text>
                  </View>
                </View>
                <View className="flex-row justify-center items-center gap-x-4 mb-6 mt-6">
                  <TouchableOpacity
                    className="bg-white border border-primaryGreen rounded-full  py-4 items-center  px-16 font-urbanist-bold  "
                    onPress={() => setModalVisible(false)}
                  >
                    <Text className="font-bold text-lg">Cancel</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    className="bg-primaryGreen rounded-full  py-4 items-center  px-8 font-urbanist-bold  "
                    onPress={() => router.push("/incomingreceipt")}
                  >
                    <Text className="font-bold text-lg">Send Money</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Pressable>
        </View>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={declineVisible}
        onRequestClose={() => setDeclineVisible(false)}
      >
        <View className="flex-1">
          <Pressable
            className="flex-1 bg-black/40 absolute top-0 left-0 right-0 bottom-0"
            onPress={() => setDeclineVisible(false)}
          >
            <View className="justify-center items-center bg-white h-[40vh] absolute bottom-0 left-0 right-0  p-6 rounded-t-2xl">
              <View className="mb-6">
                <Text className="font-urbanist-bold text-2xl">
                  Decline Request
                </Text>
              </View>
              <View className="justify-center items-center   ">
                <Text className="font-urbanist-bold text-xl text-center">
                  Decline request 250.00 from Ronalds Richards?
                </Text>
              </View>
              <View className="flex-row justify-center items-center gap-x-4 mb-6 mt-6">
                <TouchableOpacity
                  className="bg-white border border-primaryGreen rounded-full  py-3 items-center  px-10 font-urbanist-bold  ml-3"
                  onPress={() => setDeclineVisible(false)}
                >
                  <Text className="font-bold text-lg">No. Don't Decline</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  className="bg-primaryGreen rounded-full  py-3 items-center  px-12 font-urbanist-bold  "
                  onPress={() => {
                    setRequestDeclined(false);
                    setShowDeclinedModal(true);
                  }}
                >
                  <Text className="font-bold text-lg">Yes Decline</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Pressable>
        </View>
      </Modal>

      {requestDeclined && (
        <View className="absolute top-0 left-0 right-0 bottom-0 bg-black/30 justify-center items-center z-50">
          <View className="bg-white p-6 rounded-xl shadow-lg">
            <Text className="text-2xl font-urbanist-bold ">
              Request Declined!
            </Text>
          </View>
        </View>
      )}

      <Modal
        animationType="fade"
        transparent={true}
        visible={showDeclinedModal}
        onRequestClose={() => setShowDeclinedModal(false)}
      >
        <Pressable
          className="flex-1 bg-black/40 absolute top-0 left-0 right-0 bottom-0 justify-end"
          onPress={() => setShowDeclinedModal(false)}
        >
          <View className="h-[30vh] w-full bg-white rounded-t-2xl p-6 justify-center   items-center ">
            <View className=" rounded-full w-28 h-28  border-2 border-black  bg-primaryGreen mt-20  mb-8  justify-center items-center">
              <FontAwesome6 name="check" size={25} color="black" />
            </View>
            <Text className="text-2xl font-urbanist-bold ">
              Request Declined!
            </Text>
          </View>
        </Pressable>
      </Modal>
    </View>
  );
};

export default incoming;

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
