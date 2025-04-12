import React from "react";
import { View, Text, Switch, StyleSheet } from "react-native";
import { useTheme } from "../hooks/useTheme";

const Header = () => {
  const { theme, toggleTheme, colors } = useTheme();
  console.log("🚀 ~ Header ~ colors:", colors);
  console.log("🚀 ~ Header ~ theme:", theme);

  return (
    <View style={[styles.header, { backgroundColor: colors.background }]}>
      <Text style={[styles.title, { color: colors.text }]}>Cryptio</Text>
      <Switch value={theme === "dark"} onValueChange={toggleTheme} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 20,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Header;
