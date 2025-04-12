import React from "react";
import {
  Text,
  View,
  StyleSheet,
  // ActivityIndicator
} from "react-native";
import { Coin } from "@/context/dataContext";
// import useFetch from "@/hooks/useFetch";

const Chart = ({ data }: { data: Coin }) => {
  //TODO: add chart component
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
    <View style={styles.container}>
      <Text>Chart here</Text>
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
    backgroundColor: "#f0f0f0",
  },
  errorText: {
    color: "red",
    fontSize: 10,
    textAlign: "center",
  },
});
