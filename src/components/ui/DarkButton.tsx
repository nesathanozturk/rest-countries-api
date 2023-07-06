"use client";

import { HiOutlineMoon, HiMoon } from "react-icons/hi";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import { IThemeContext } from "@/types";

const DarkButton = () => {
  const { isDarkMode, toggleDarkMode } = useContext(
    ThemeContext
  ) as IThemeContext;

  return (
    <>
      <div className="flex items-center gap-1">
        {isDarkMode ? <HiMoon size={16} /> : <HiOutlineMoon size={16} />}
        <span
          onClick={toggleDarkMode}
          className="text-xs md:text-sm font-semibold"
        >
          Dark Mode
        </span>
      </div>
    </>
  );
};

export default DarkButton;
