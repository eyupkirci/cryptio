import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";
// import TabBarBackground from "@/components/ui/TabBarBackground";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Entypo from "@expo/vector-icons/Entypo";
import { useTheme } from "@/hooks/useTheme";
import { Colors } from "@/constansts/Colors";

export default function TabLayout() {
  const colors = useTheme();
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors["light"].tint,
        headerBackButtonDisplayMode: "minimal",
        headerShown: false,
        //  tabBarButton: HapticTab,
        // tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: "absolute",
          },
          default: {},
        }),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",

          tabBarIcon: ({ color }) => (
            <Entypo name="home" size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="assets"
        options={{
          title: "Assets",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="inventory" size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="wallet"
        options={{
          title: "Wallet",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="wallet" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
