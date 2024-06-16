import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import { useGlobalContext } from "../../context/GlobalProvider";
const home = () => {
  const { user } = useGlobalContext();
  // console.log(user.username);
  const { username } = user;
  return (
    <SafeAreaView>
      <View style={styles.username}>
        <Text>Welcome, {username}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  username: {
    fontSize: 40,
    fontWeight: "bold",
  },
});

export default home;
