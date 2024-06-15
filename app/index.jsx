import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { Link } from "expo-router";

// This goona be something like boarding screen
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* <Button
        title="Press me"
        color="#f194ff"
        onPress={() => createUser("abhishek@gmail.com", "Astro@123", "abhi")}
      /> */}

      <Link href="/sign-up">Sign up</Link>
      <Link href="/sign-in">Sign In</Link>
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
