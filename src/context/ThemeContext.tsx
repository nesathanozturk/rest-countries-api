"use client";

import { createContext, useState } from "react";
import { IThemeContext } from "@/types";

export const ThemeContext = createContext<IThemeContext | null>(null);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const toggleDarkMode = () => {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  };

  return (
    <ThemeContext.Provider
      value={{ isDarkMode, toggleDarkMode, setIsDarkMode }}
    >
      <main className={isDarkMode ? "dark" : ""}>{children}</main>
    </ThemeContext.Provider>
  );
};
