import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Coin } from "../context/dataContext";

export const DataListItem = ({ data }: { data: Coin }) => {
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
          <Text>{data.name}</Text>
          <Text>{data.symbol}</Text>
        </View>
      </View>
      <View style={{ flex: 1, justifyContent: "flex-end" }}>
        <Text style={{ textAlign: "right" }}>{data.current_price}</Text>
        <Text style={{ textAlign: "right" }}>
          {data.price_change_24h.toFixed(2)}
        </Text>
      </View>
    </View>
  );
};
