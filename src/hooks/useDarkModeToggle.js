import { useEffect, useState, useMemo } from "react";

const useDarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("darkMode") === "true";
    setIsDarkMode(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme);
  }, []);

  const themeHandler = useMemo(
    () => () => {
      setIsDarkMode((prev) => !prev);
      document.documentElement.classList.toggle("dark");
      localStorage.setItem("darkMode", !isDarkMode);
    },
    [isDarkMode]
  );

  return { isDarkMode, themeHandler };
};

export default useDarkModeToggle;
