import { Text, Alert } from "react-native";
import {
  SafeAreaView,
  ScrollView,
  View,
  StyleSheet,
  Dimensions,
  Image,
} from "react-native";
import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";
import { useState } from "react";
import { createUser } from "../../lib/appwrite";
import images from "../../constants/images";
const { height: screenHeight } = Dimensions.get("window");
const SignUp = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const onSubmitAsync = async () => {
    if (
      form.username === "" ||
      form.email === "" ||
      form.password === "" ||
      form.confirmPassword == ""
    ) {
      Alert.alert("Error", "please fill all the fields");
    }

    if (form.password !== form.confirmPassword) {
      Alert.alert("Error", "password and confirm password didn't match");
    }
    setIsSubmitting(true);
    try {
      const result = await createUser(form.email, form.password, form.username);
      console.log(result);
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.signUpMainContainer}>
          <Image
            style={styles.logo}
            source={images.logo}
            resizeMode="contain"
          />
          <Text style={styles.signUpLabel}>sign up</Text>

          <FormField
            label="Username"
            placeholder="Enter your username"
            handleChangeText={(e) => setForm({ ...form, username: e })}
          />
          <FormField
            label="Email"
            placeholder="Enter your email address"
            handleChangeText={(e) => setForm({ ...form, email: e })}
          />
          <FormField
            label="Password"
            placeholder="Enter your password"
            handleChangeText={(e) => setForm({ ...form, password: e })}
          />
          <FormField
            label="Confirm Password"
            placeholder="confirm password"
            handleChangeText={(e) => setForm({ ...form, confirmPassword: e })}
          />
          <CustomButton
            isLoading={true}
            label="create account"
            handlePress={onSubmitAsync}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  signUpMainContainer: {
    justifyContent: "center",
    alignItems: "center",
    minHeight: screenHeight * 0.86, //calculates 86% of the screen height
    paddingHorizontal: 16,
  },

  signUpLabel: {
    color: "#18181b",
    fontSize: 26,
    fontWeight: "bold",
  },
  logo: {
    height: 125,
    width: 125,
  },
});
export default SignUp;
