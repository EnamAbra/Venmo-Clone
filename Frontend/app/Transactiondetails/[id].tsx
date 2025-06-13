import Ionicons from "@expo/vector-icons/Ionicons";
import { router, useLocalSearchParams } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import { formatTransactions } from "@/mockTransaction";

const TransactionDetail = () => {
  const { id } = useLocalSearchParams(); // Get the id from the URL
  const transactions = formatTransactions().flatMap((section) => section.data);
  const transaction = transactions.find((t) => t.id === id);

  return (
    <SafeAreaView>
      <View className="bg-primaryGreen">
        <View className="flex-row justify-between mt-8 ">
          <TouchableOpacity onPress={() => router.push("/TransactionFeed")}>
            <Ionicons name="arrow-back-outline" size={24} color="white" />
          </TouchableOpacity>
          <Text className="font-extrabold text-2xl  justify-center">
            {transaction?.category}
          </Text>
          <SimpleLineIcons name="options-vertical" size={24} color="white" />
        </View>
        <View className="items-center justify-center  mt-8">
          <Image
            className=" w-20 h-20 rounded-full "
            source={require("../../assets/images/nature.jpg")}
          />
        </View>
        <View className="justify-center items-center">
          <Text className="font-urbanist-bold text-5xl ">
            {transaction?.amount}
          </Text>
        </View>
        <View className="justify-center items-center">
          <Text className="font-urbanist-bold text-2xl mt-10">
            {transaction?.name}
          </Text>
        </View>
        <View className="justify-center items-center">
          <Text className="font-urbanist-bold text-sm">
            {transaction?.email}
          </Text>
        </View>
      </View>

      <View className="flex-row">
        <View>
          <Row label="You sent" value={transaction?.amount} />

          <Row label="To" value={transaction?.name} />
          <Row label="Email" value={transaction?.email} />
          <Row label="Date" value={transaction?.date} />
          <Row label="Transaction ID" value={transaction?.transactionId} />
          <Row label="Reference ID" value={transaction?.referenceId} />
        </View>
      </View>
      <TouchableOpacity
        onPress={() => router.push(`/Transactiondetails/receipt?id=${id}`)}
      >
        <View className="justify-center items-center ">
          <Text className="font-urbanist-bold text-secondary  w-35 h-35 rounded-r-full rounded-l-full border border-primaryGreen p-8 px-14">
            View Receipt
          </Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default TransactionDetail;
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
