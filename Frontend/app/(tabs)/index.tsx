import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView>
      <View className=" justify-center items-center bg-blue-500">
        <Text>Welcome!</Text>
      </View>
    </SafeAreaView>
  );
}
