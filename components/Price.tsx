import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Coin } from "@/context/dataContext";
import { useTheme } from "@/hooks/useTheme";

const Price = ({ data }: { data: Coin }) => {
  const { colors } = useTheme();
  const isHigh = data.price_change_24h >= 0;
  const textColor = colors.text;
  return (
    <View style={{ flex: 1, justifyContent: "flex-end" }}>
      <Text style={[styles.currentPrice, { color: textColor }]}>
        ${data.current_price.toFixed(2)}
      </Text>
      <Text style={[styles.priceChange, { color: isHigh ? "green" : "red" }]}>
        {data.price_change_24h.toFixed(2)}%
      </Text>
    </View>
  );
};

export default Price;

const styles = StyleSheet.create({
  currentPrice: {
    textAlign: "right",
    fontSize: 16,
    fontWeight: "bold",
  },
  priceChange: { textAlign: "right" },
});
