import { useContext } from "react";
import { ThemeContext, themes } from "../context/themeContext";

export function useTheme() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const colors = themes[theme];

  return {
    theme,
    toggleTheme,
    colors,
  };
}
