import { Moon, Sun } from "@phosphor-icons/react";
import { useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof document !== "undefined") {
      return document.documentElement.classList.contains("dark");
    }
    return true;
  });

  const toggleTheme = () => {
    const newTheme = isDark ? "light" : "dark";
    localStorage.setItem("theme", newTheme);
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    setIsDark(!isDark);
  };

  return (
    <button
      id="theme-btn"
      type="button"
      aria-label="Toggle theme"
      onClick={toggleTheme}
      className="p-2 cursor-pointer text-white light:text-black bg-transparent border-none outline-none"
    >
      {isDark ? <Moon size={16} weight="fill" /> : <Sun size={16} weight="fill" />}
    </button>
  );
}
