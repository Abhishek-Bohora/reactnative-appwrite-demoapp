import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import icons from "../../constants/icons";

const TabIcon = ({ icon, color, name, focused }) => {
  return (
    <>
      <Image
        source={icon}
        tintColor={color}
        resizeMode="contain"
        style={styles.icon}
      />
      <Text style={focused ? styles.tabIconLabelFocused : styles.tabIconLabel}>
        {name}
      </Text>
    </>
  );
};
const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#60a5fa",
          tabBarInactiveTintColor: "#f5f5f5",
          tabBarStyle: {
            backgroundColor: "#0f172a",
            borderTopWidth: 1,
            borderTopColor: "#232533",
            height: 84,
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.home}
                color={color}
                name="Home"
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.profile}
                color={color}
                focused={focused}
                name="Profile"
              />
            ),
          }}
        />
      </Tabs>
    </>
  );
};

const styles = StyleSheet.create({
  icon: {
    height: 30,
    width: 30,
  },
  tabIconLabel: {
    fontSize: 14,
    color: "#fff",
  },
  tabIconLabelFocused: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#fff",
  },
});

export default TabsLayout;
