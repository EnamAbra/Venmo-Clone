import { ActivityIndicator, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFonts } from "expo-font";

export default function Index() {
  const [fontsLoaded] = useFonts({
    "Urbanist-Regular": require("../../assets/fonts/Urbanist/static/Urbanist-Regular.ttf"),
    "Urbanist-Bold": require("../../assets/fonts/Urbanist/static/Urbanist-Bold.ttf"),
    "Urbanist-Medium": require("../../assets/fonts/Urbanist/static/Urbanist-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }
  return (
    <SafeAreaView>
      <View className=" justify-center items-center bg-blue-500 ">
        <Text>Welcome!</Text>
      </View>
    </SafeAreaView>
  );
}
