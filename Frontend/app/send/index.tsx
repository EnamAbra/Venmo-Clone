import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
type Contact = {
  id: string;
  name: string;
  email: string;
  avatar: any;
  favorite: boolean;
};

const allContacts: Contact[] = [
  {
    id: "1",
    name: "Alexia Hershey",
    email: "alexia.hershey@gmail.com",
    avatar: require("../../assets/images/nature.jpg"),
    favorite: true,
  },
  {
    id: "2",
    name: "Alfonzo Schuessler",
    email: "alfonzo.schuessler@gmail.com",
    avatar: require("../../assets/images/nature.jpg"),
    favorite: false,
  },
  {
    id: "3",
    name: "Augustina Midgett",
    email: "augustina.midgett@gmail.com",
    avatar: require("../../assets/images/nature.jpg"),
    favorite: true,
  },
  {
    id: "4",
    name: "Charlotte Hanlin",
    email: "charlotte.hanlin@gmail.com",
    avatar: require("../../assets/images/nature.jpg"),
    favorite: false,
  },
  {
    id: "5",
    name: "Darron Kulikowski",
    email: "darron.kulikowski@gmail.com",
    avatar: require("../../assets/images/nature.jpg"),
    favorite: false,
  },
  {
    id: "6",
    name: "Florencio Dorrance",
    email: "florencio.dorrance@gmail.com",
    avatar: require("../../assets/images/nature.jpg"),
    favorite: true,
  },
  {
    id: "7",
    name: "Geoffrey Mott",
    email: "geoffrey.mott@gmail.com",
    avatar: require("../../assets/images/nature.jpg"),
    favorite: false,
  },
  {
    id: "8",
    name: "Maryland Winkles",
    email: "maryland.winkles@gmail.com",
    avatar: require("../../assets/images/nature.jpg"),
    favorite: false,
  },
  {
    id: "9",
    name: "Ines Carlisle",
    email: "ines.carlisle@gmail.com",
    avatar: require("../../assets/images/nature.jpg"),
    favorite: true,
  },
  {
    id: "10",
    name: "Travis Redmond",
    email: "travis.redmond@gmail.com",
    avatar: require("../../assets/images/nature.jpg"),
    favorite: false,
  },
  {
    id: "11",
    name: "Nia Riddle",
    email: "nia.riddle@gmail.com",
    avatar: require("../../assets/images/nature.jpg"),
    favorite: false,
  },
  {
    id: "12",
    name: "Kareem Newton",
    email: "kareem.newton@gmail.com",
    avatar: require("../../assets/images/nature.jpg"),
    favorite: true,
  },
  {
    id: "13",
    name: "Jolie Mathews",
    email: "jolie.mathews@gmail.com",
    avatar: require("../../assets/images/nature.jpg"),
    favorite: false,
  },
  {
    id: "14",
    name: "Brycen Simmons",
    email: "brycen.simmons@gmail.com",
    avatar: require("../../assets/images/nature.jpg"),
    favorite: false,
  },
];
export default function SelectContactScreen() {
  const [selectedTab, setSelectedTab] = useState<"All" | "Favorites">("All");

  const filteredContacts =
    selectedTab === "Favorites"
      ? allContacts.filter((c) => c.favorite)
      : allContacts;
  const renderContact = ({ item }: { item: Contact }) => (
    <View className="flex-row items-center p-4 border-b border-gray-200">
      <Image
        source={item.avatar}
        className="w-10 h-10 rounded-full mr-4"
        resizeMode="cover"
      />
      <View>
        <Text className="font-urbanist-bold text-base">{item.name}</Text>
        <Text className="text-gray-500 text-sm">{item.email}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView>
      <View className="flex-row justify-center relative items-center gap-20">
        <TouchableOpacity
          onPress={() => router.back()}
          className="absolute left-4 top-1/2 -translate-y-1/2"
        >
          <AntDesign name="arrowleft" size={24} color="black" className="" />
        </TouchableOpacity>
        <Text className="font-urbanist-bold text-2xl  ">Send To</Text>
      </View>
      <View className="bg-gray-200 bg-opacity-20 flex-row px-4  w-11/12 py-2 self-center mt-6">
        <FontAwesome name="search" size={24} color="#6B7280" />
        <TextInput
          className="ml-2 flex-1 text-gray-700 font-urbanist- h-10"
          placeholder="Search contact"
          placeholderTextColor="#6B7280"
        />
      </View>

      <View className="flex-row justify-around mb-2">
        {["All", "Favorites"].map((tab) => (
          <TouchableOpacity key={tab} onPress={() => setSelectedTab(tab)}>
            <Text
              className={`text-base ${
                selectedTab === tab
                  ? "text-green-600 border-b-2 border-green-500 pb-1"
                  : "text-gray-500"
              }`}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <FlatList
        data={filteredContacts}
        keyExtractor={(item) => item.id}
        renderItem={renderContact}
        contentContainerStyle={{ paddingBottom: 100 }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
