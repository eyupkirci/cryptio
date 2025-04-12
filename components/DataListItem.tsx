import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Coin } from "../context/dataContext";
import { useTheme } from "@/hooks/useTheme";

export const DataListItem = ({ data }: { data: Coin }) => {
  const { theme, colors } = useTheme();

  const textColor = colors.text;
  const backgroundColor = colors.background;
  return (
    <View
      style={{
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        borderWidth: 1,
        borderColor: "lightgray",
        alignItems: "center",
        padding: 10,
      }}
    >
      <View style={{ flex: 1, flexDirection: "row", gap: 10 }}>
        <View
          style={{
            alignSelf: "center",
            borderRadius: 50,
            overflow: "hidden",
          }}
        >
          <Image
            style={{
              width: 30,
              height: 30,
            }}
            source={{ uri: data.image }}
          />
        </View>
        <View>
          <Text style={{ color: textColor }}>{data.name}</Text>
          <Text style={{ color: textColor }}>{data.symbol}</Text>
        </View>
      </View>
      <View style={{ flex: 1, justifyContent: "flex-end" }}>
        <Text style={{ textAlign: "right", color: textColor }}>
          {data.current_price}
        </Text>
        <Text style={{ textAlign: "right", color: textColor }}>
          {data.price_change_24h.toFixed(2)}
        </Text>
      </View>
    </View>
  );
};
