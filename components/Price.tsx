import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Coin } from "@/context/dataContext";
import { useTheme } from "@/hooks/useTheme";

const Price = ({ data }: { data: Coin }) => {
  const { theme, colors } = useTheme();

  const isHigh = data.price_change_24h >= 0;

  const textColor = colors.text;
  const backgroundColor = colors.background;
  return (
    <View style={{ flex: 1, justifyContent: "flex-end" }}>
      <Text
        style={{
          textAlign: "right",
          fontSize: 16,
          fontWeight: "bold",
          color: textColor,
        }}
      >
        ${data.current_price.toFixed(2)}
      </Text>
      <Text style={{ textAlign: "right", color: isHigh ? "green" : "red" }}>
        {data.price_change_24h.toFixed(2)}%
      </Text>
    </View>
  );
};

export default Price;

const styles = StyleSheet.create({});
