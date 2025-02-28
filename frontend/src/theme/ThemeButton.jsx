import { useTheme } from "./ThemeContext";

const ThemeButton = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="absolute top-4 right-4 px-4 py-2 rounded-md text-black cursor-pointer bg-amber-300 dark:text-white  dark:bg-gray-800 "
    >
      {isDark ? "Light Mode" : "Dark Mode"}
    </button>
  );
};

export default ThemeButton;
