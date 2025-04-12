import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Coin } from "../context/dataContext";
import { useTheme } from "@/hooks/useTheme";
import Price from "./Price";
import Name from "./Name";

export const DataListItem = ({ data }: { data: Coin }) => {
  const { colors } = useTheme();
  const backgroundColor = colors.background;
  const textColor = colors.text;
  return (
    <View style={[styles.container, { backgroundColor: backgroundColor }]}>
      <View style={{ flex: 1, flexDirection: "row", gap: 10 }}>
        <View
          style={{
            alignSelf: "center",
          }}
        >
          <Image style={styles.image} source={{ uri: data.image }} />
        </View>
        <Name data={data} />
      </View>
      <View>
        <Text style={{ color: textColor }}>Chart Here</Text>
      </View>
      <Price data={data} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
  },
  image: {
    width: 30,
    height: 30,
  },
});
