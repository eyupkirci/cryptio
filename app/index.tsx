import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  Text,
  View,
} from "react-native";
import { useData } from "./hooks/useData";
import { useTheme } from "./hooks/useTheme";
import { DataListItem } from "./components/DataListItem";

export default function Index() {
  const { coins, isLoading, error, refetch } = useData();
  const { theme } = useTheme();

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Error: {error}</Text>
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Mode: {theme}</Text>

      <FlatList
        data={coins ?? []}
        keyExtractor={(coin) => coin?.id}
        renderItem={({ item }) => <DataListItem data={item} />}
        ListEmptyComponent={<Text>No Data</Text>}
        initialNumToRender={10}
        updateCellsBatchingPeriod={10}
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={refetch} />
        }
      />
    </View>
  );
}
