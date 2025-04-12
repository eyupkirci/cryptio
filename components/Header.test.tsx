import React from "react";
import { render, screen } from "@testing-library/react-native";
import Header from "./Header";
import { ThemeProvider } from "@/context/themeContext";
import { DataProvider } from "@/context/dataContext";

describe("Header", () => {
  it("renders the title correctly", () => {
    render(
      <ThemeProvider>
        <DataProvider>
          <Header />
        </DataProvider>
      </ThemeProvider>
    );

    expect(screen.getByText("Cryptio")).toBeTruthy();
  });
});
