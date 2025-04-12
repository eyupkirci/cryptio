import Header from "@/components/Header";
import { DataProvider } from "@/context/dataContext";
import { ThemeProvider } from "@/context/themeContext";
import { Stack } from "expo-router";
import { SafeAreaView } from "react-native";

export default function RootLayout() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ThemeProvider>
        <DataProvider>
          <Header />
          <Stack
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="(tabs)" />
          </Stack>
        </DataProvider>
      </ThemeProvider>
    </SafeAreaView>
  );
}
