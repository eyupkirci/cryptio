import { createContext, FC, ReactNode, useState } from "react";

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
