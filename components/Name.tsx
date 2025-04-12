import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Coin } from "@/context/dataContext";
import { useTheme } from "@/hooks/useTheme";

const Name = ({ data }: { data: Coin }) => {
  const { colors } = useTheme();
  const textColor = colors.text;

  return (
    <View style={{ flex: 1, justifyContent: "flex-end" }}>
      <View>
        <Text style={{ fontSize: 16, fontWeight: "500", color: textColor }}>
          {data.name}
        </Text>
        <Text style={{ fontSize: 12, color: textColor }}>
          {data.symbol.toUpperCase()}
        </Text>
      </View>
    </View>
  );
};

export default Name;

const styles = StyleSheet.create({});
