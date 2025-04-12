import Header from "@/components/Header";
import { DataProvider } from "@/context/dataContext";
import { ThemeProvider } from "@/context/themeContext";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
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
  );
}
