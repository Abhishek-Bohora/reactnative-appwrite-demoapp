import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  Alert,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";
import { useState } from "react";
const { height: screenHeight } = Dimensions.get("window");
import { signIn } from "../../lib/appwrite";
import { router } from "expo-router";

const SignIn = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const onSubmitAsync = async () => {
    try {
      setIsSubmitting(true);
      const result = await signIn(form.email, form.password);
      router.replace("/home");
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.signInMainContainer}>
          <Text style={styles.signInLabel}>Login</Text>
          <FormField
            label="Email"
            placeholder="Enter your e-mail address"
            handleChangeText={(e) => setForm({ ...form, email: e })}
          />
          <FormField
            label="Password"
            placeholder="Enter your password"
            handleChangeText={(e) => setForm({ ...form, password: e })}
          />
          <CustomButton
            label="login"
            isLoading={isSubmitting}
            handlePress={onSubmitAsync}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  signInMainContainer: {
    minHeight: screenHeight * 0.8,
    justifyContent: "center",
    paddingHorizontal: 16,
  },
  signInLabel: {
    color: "#09090b",
    fontSize: 26,
    fontWeight: "bold",
  },
});

export default SignIn;
