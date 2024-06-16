import { Stack } from "expo-router";
import GlobalProvider from "../context/GlobalProvider";
export default function RootLayout() {
  return (
    <GlobalProvider>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: "#f4511e",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        {/* Optionally configure static options outside the route.*/}
        <Stack.Screen name="index" options={{}} />
      </Stack>
    </GlobalProvider>
  );
}
