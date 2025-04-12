import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useTheme } from "@/hooks/useTheme";

const Assets = () => {
  const { colors } = useTheme();
  const textColor = colors.text;
  const backgroundColor = colors.background;
  return (
    <View style={[styles.container, { backgroundColor: backgroundColor }]}>
      <Text style={{ color: textColor }}>Assets</Text>
    </View>
  );
};

export default Assets;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
