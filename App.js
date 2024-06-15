import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createUser } from "./lib/appwrite";
import { Button } from "react-native";
import CustomButton from "./components/CustomButton";
import FormField from "./components/FormField";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* <Button
        title="Press me"
        color="#f194ff"
        onPress={() => createUser("abhishek@gmail.com", "Astro@123", "abhi")}
      /> */}
      <FormField label="Email" placeholder="Enter your email address" />
      <CustomButton isLoading={false} label="create account" />
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
