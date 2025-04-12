import { Text, View } from "react-native";
import { useData } from "./hooks/useData";
import { useTheme } from "./hooks/useTheme";

export default function Index() {
  const { coins, isLoading, error } = useData();
  const { theme } = useTheme();

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Loading...</Text>
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
      <Text>CryptoCurrencies</Text>
      {coins.map((coin) => (
        <Text key={coin.id}>{coin.symbol}</Text>
      ))}
    </View>
  );
}
