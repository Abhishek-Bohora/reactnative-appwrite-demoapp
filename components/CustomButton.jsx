import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
} from "react-native";

function CustomButton({ isLoading, label }) {
  return (
    <TouchableOpacity
      style={isLoading ? styles.loadingButton : styles.customButton}
      activeOpacity={0.7}
      disabled={isLoading}
    >
      <View style={styles.textContainer}>
        <Text style={styles.customButtonText}>{label}</Text>
        {isLoading && <ActivityIndicator size="small" color="#fff" />}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  customButton: {
    height: 45,
    backgroundColor: "#2563eb",
    alignContent: "center",
    justifyContent: "center",

    paddingVertical: 8,
    paddingHorizontal: 20,
    marginTop: 16,
    borderRadius: 6,
    elevation: 5,
  },

  customButtonText: {
    color: "#fff",
    fontSize: 20,
    alignSelf: "center",
    textTransform: "lowercase",
    marginRight: 12,
  },
  textContainer: {
    flexDirection: "row",
  },
  loadingButton: {
    height: 45,
    backgroundColor: "#60a5fa",
    alignContent: "center",
    justifyContent: "center",

    paddingVertical: 8,
    paddingHorizontal: 20,
    marginTop: 16,
    borderRadius: 6,
    elevation: 5,
  },
});
export default CustomButton;
