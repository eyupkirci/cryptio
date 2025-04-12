import { StyleSheet, View } from "react-native";
import React from "react";
import { Coin } from "@/context/dataContext";
import Typography from "./Typograpy";

const Name = ({ data }: { data: Coin }) => {
  return (
    <View style={styles.container}>
      <View>
        <Typography variant="subtitle">{data.name}</Typography>
        <Typography variant="caption">{data.symbol.toUpperCase()}</Typography>
      </View>
    </View>
  );
};

export default Name;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "flex-end" },
});
