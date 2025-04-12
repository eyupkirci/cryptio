import { useContext } from "react";
import { Colors } from "@/constansts/Colors";
import { ThemeContext } from "@/context/themeContext";

export function useTheme() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const colors = Colors[theme];

  return {
    theme,
    toggleTheme,
    colors,
  };
}
