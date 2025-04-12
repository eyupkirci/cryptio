import React from "react";
import {
  View,
  StyleSheet,
  // ActivityIndicator
} from "react-native";
import { Coin } from "@/context/dataContext";
import Typography from "./Typograpy";
import { useTheme } from "@/hooks/useTheme";
// import useFetch from "@/hooks/useFetch";

const Chart = ({ data }: { data: Coin }) => {
  const { colors } = useTheme();

  // const {
  //   data: response,
  //   isLoading,
  //   error,
  // } = useFetch(
  //   `https://api.coingecko.com/api/v3/coins/${data.id}/market_chart?vs_currency=usd&days=1`
  // );

  // if (isLoading) {
  //   return <ActivityIndicator />;
  // }

  // if (error) {
  //   return <Text style={styles.errorText}>Error: {error.message}</Text>;
  // }

  // // const prices = response?.prices;

  // // if (!prices) {
  // //   return <Text style={styles.errorText}>No price data available.</Text>;
  // // }

  return (
    <View style={[styles.container, { borderColor: colors.text }]}>
      <Typography>Chart here</Typography>
    </View>
  );
};

export default Chart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 4,
    borderWidth: 1,
  },
  errorText: {
    color: "red",
    fontSize: 10,
    textAlign: "center",
  },
});
