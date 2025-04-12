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
} from "react-native";
import { useState, useCallback } from "react";

export default function Index() {
  const { coins, isLoading, error, refetch } = useData();
  const { colors } = useTheme();
  const textColor = colors.text;
  const backgroundColor = colors.background;
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
      } else {
        setFilteredCoins(coins);
      }
    },
    [coins]
  );

  if (isLoading) {
    return (
      <View
        style={[
          { flex: 1, justifyContent: "center", alignItems: "center" },
          { backgroundColor: backgroundColor },
        ]}
      >
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error) {
    return (
      <View
        style={[
          { flex: 1, justifyContent: "center", alignItems: "center" },
          { backgroundColor: backgroundColor },
        ]}
      >
        <Text style={{ color: textColor }}>Error: {error}</Text>
      </View>
    );
  }

  return (
    <View
      style={[
        {
          flex: 1,
          justifyContent: "flex-start", // Align items at the top
          alignItems: "center",
        },
        { backgroundColor: backgroundColor },
      ]}
    >
      <Search onSearch={handleSearch} />
      <FlatList
        data={searchText ? filteredCoins : coins}
        keyExtractor={(coin: any) => coin?.id}
        renderItem={({ item }: { item: any }) => <DataListItem data={item} />}
        ListEmptyComponent={<Text style={{ color: textColor }}>No Data</Text>}
        initialNumToRender={10}
        updateCellsBatchingPeriod={10}
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={refetch} />
        }
      />
    </View>
  );
}
