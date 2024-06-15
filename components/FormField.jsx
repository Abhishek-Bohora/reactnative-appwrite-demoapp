import { View, Text, TextInput, StyleSheet } from "react-native";
import { Link } from "expo-router";

function FormField({ label, placeholder, handleChangeText }) {
  return (
    <View style={styles.formFieldContainer}>
      <Text style={styles.formFieldLabel}>{label}</Text>
      <TextInput
        placeholder={placeholder}
        style={styles.formField}
        onChangeText={handleChangeText}
        placeholderTextColor="#7b7b8b"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  formFieldContainer: {
    width: "100%",
    marginVertical: 10,
    alignSelf: "center",
  },

  formField: {
    width: "100%",
    borderColor: "#6366f1",
    padding: 10,
    borderWidth: 2,
    borderRadius: 5,
    backgroundColor: "#f5f5f5",
    fontSize: 16,
  },

  formFieldLabel: {
    marginBottom: 5,
    color: "#09090b",
    fontSize: 16,
  },
});

export default FormField;
