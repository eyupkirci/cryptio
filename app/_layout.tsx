import { Stack } from "expo-router";
import { ThemeProvider } from "./context/themeContext";
import { DataProvider } from "./context/dataContext";

export default function RootLayout() {
  return (
    <ThemeProvider>
      <DataProvider>
        <Stack screenOptions={{ header: () => null }} />
      </DataProvider>
    </ThemeProvider>
  );
}
