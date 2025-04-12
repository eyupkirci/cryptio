import { createContext, FC, ReactNode, useState } from "react";

export const themes = {
  light: {
    text: "#000000",
    contrast: "#FFFFFF",
    backgorund: "#FFFFFF",
    border: "#000000",
    light: "",
  },
  dark: {
    text: "#FFFFFF",
    contrast: "#000000",
    backgorund: "#000000",
    border: "#FFFFFF",
    light: "",
  },
};

type Theme = "light" | "dark";

interface ThemeContext {
  theme: Theme;
  toggleTheme: () => void;
}
interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeContext = createContext<ThemeContext>({} as ThemeContext);

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }: any) => {
  const [theme, setTheme] = useState<Theme>("light");
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
