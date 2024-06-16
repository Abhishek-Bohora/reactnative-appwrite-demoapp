import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { router } from "expo-router";
import CustomButton from "../components/CustomButton";
import { useGlobalContext } from "../context/GlobalProvider";
import { Redirect } from "expo-router";
// This goona be something like boarding screen
export default function App() {
  const { isLoading, isLoggedIn } = useGlobalContext();
  if (!isLoading && isLoggedIn) {
    return <Redirect href="/home" />;
  }
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <CustomButton
        label="Login"
        handlePress={() => {
          router.push("/sign-in");
        }}
      />
      <CustomButton
        label="create account to continue"
        handlePress={() => {
          router.push("/sign-up");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
