import { DataListItem } from "@/components/DataListItem";
import { useData } from "@/hooks/useData";
import { useTheme } from "@/hooks/useTheme";
import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  Text,
  View,
} from "react-native";

export default function Index() {
  const { coins, isLoading, error, refetch } = useData();
  const { colors } = useTheme();
  const textColor = colors.text;
  const backgroundColor = colors.background;

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
          justifyContent: "center",
          alignItems: "center",
        },
        { backgroundColor: backgroundColor },
      ]}
    >
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
