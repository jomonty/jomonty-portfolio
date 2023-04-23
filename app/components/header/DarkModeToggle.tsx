"use client";
import { useState } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

// interface darkModeProps {
//   darkMode: boolean;
//   toggleTheme: Function;
// }

export function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState<boolean>(
    localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
  );
  const toggleTheme = () => {
    setDarkMode(!darkMode);
    const root = window.document.documentElement;
    root.classList.toggle("dark");
  };

  return (
    <button
      className="flex rounded-full py-2 px-3 shadow dark:bg-zinc-800 dark:ring-1 dark:ring-white/10"
      onClick={() => toggleTheme()}
    >
      {darkMode ? (
        <MoonIcon className="text-gray-700 h-6 w-6" />
      ) : (
        <SunIcon className="text-logoprimary h-6 w-6" />
      )}
    </button>
  );
}
