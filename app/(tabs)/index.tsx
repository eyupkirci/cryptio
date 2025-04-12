import { DataListItem } from "@/components/DataListItem";
import Search from "@/components/Search";
import { useData } from "@/hooks/useData";
import { useTheme } from "@/hooks/useTheme";
import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  Text,
  View,
  StyleSheet,
} from "react-native";
import { useState, useCallback } from "react";
import { EmtpyDataComponent } from "@/components/EmptyListComponent";
import { Coin } from "@/context/dataContext";

export default function Index() {
  const { coins, isLoading, error, refetch } = useData();
  const { colors } = useTheme();

  const [searchText, setSearchText] = useState("");
  const [filteredCoins, setFilteredCoins] = useState(coins);

  const handleSearch = useCallback(
    (text: string) => {
      setSearchText(text);
      if (text) {
        const filtered = coins.filter((coin) =>
          coin.name.toLowerCase().includes(text.toLowerCase())
        );
        setFilteredCoins(filtered);
      }
    },
    [coins]
  );

  if (isLoading) {
    return (
      <View style={[styles.container, { backgroundColor: colors.background }]}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={[styles.container, { backgroundColor: colors.background }]}>
        <Text style={{ color: colors.text }}>Error: {error}</Text>
      </View>
    );
  }

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Search onSearch={handleSearch} />
      <FlatList
        data={searchText ? filteredCoins : coins}
        keyExtractor={(coin: Coin) => coin.id}
        renderItem={({ item }: { item: Coin }) => <DataListItem data={item} />}
        ListEmptyComponent={<EmtpyDataComponent />}
        initialNumToRender={10}
        updateCellsBatchingPeriod={10}
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={refetch} />
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
