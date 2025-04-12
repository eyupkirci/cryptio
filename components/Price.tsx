import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Coin } from "@/context/dataContext";
import Typography from "./Typograpy";

const Price = ({ data }: { data: Coin }) => {
  const isHigh = data.price_change_24h >= 0;

  return (
    <View style={styles.container}>
      <Typography variant="subtitle" style={styles.text}>
        ${data.current_price.toFixed(2)}
      </Typography>
      <Typography style={[styles.text, { color: isHigh ? "green" : "red" }]}>
        {data.price_change_percentage_24h.toFixed(2)}%
      </Typography>
    </View>
  );
};

export default Price;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "flex-end" },
  text: { textAlign: "right" },
});
