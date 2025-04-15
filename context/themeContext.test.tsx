import React, { useContext } from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { ThemeProvider, ThemeContext } from "./themeContext";
import { Button } from "react-native";
import Typography from "@/components/Typograpy";

describe("ThemeContext", () => {
  it("should initialize with the default theme", () => {
    const TestComponent = () => {
      const { theme } = useContext(ThemeContext);
      return <Typography>Current theme: {theme}</Typography>;
    };

    const { getByText } = render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );

    expect(getByText("Current theme: light")).toBeTruthy();
  });

  it("should toggle the theme correctly", () => {
    const TestComponent = () => {
      const { theme, toggleTheme } = useContext(ThemeContext);
      return (
        <>
          <Typography>Current theme: {theme}</Typography>
          <Button title="Toggle Theme" onPress={toggleTheme} />
        </>
      );
    };

    const { getByText } = render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );

    expect(getByText("Current theme: light")).toBeTruthy();

    fireEvent.press(getByText("Toggle Theme"));

    expect(getByText("Current theme: dark")).toBeTruthy();

    fireEvent.press(getByText("Toggle Theme"));

    expect(getByText("Current theme: light")).toBeTruthy();
  });
});
