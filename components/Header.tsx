import React from "react";
import { View, Text, Switch, StyleSheet } from "react-native";
import { useTheme } from "../hooks/useTheme";
import Typography from "./Typograpy";

const Header = () => {
  const { theme, toggleTheme, colors } = useTheme();

  return (
    <View style={[styles.header, { backgroundColor: colors.background }]}>
      <Typography variant="title">Cryptio</Typography>
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
});

export default Header;
