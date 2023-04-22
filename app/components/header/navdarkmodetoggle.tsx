import { Sun, Moon } from "react-feather";

interface darkModeProps {
  darkMode: boolean;
  toggleTheme: Function;
}

export function NavDarkModeToggle({ darkMode, toggleTheme }: darkModeProps) {
  return (
    <button
      className="flex rounded-full py-2 px-3 shadow dark:bg-zinc-800 dark:ring-1 dark:ring-white/10"
      onClick={() => toggleTheme()}
    >
      {darkMode ? <Moon color="#71717a" /> : <Sun color="rgb(21 128 61)" />}
    </button>
  );
}
