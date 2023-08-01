import useDarkModeToggle from "@/hooks/useDarkModeToggle";
import Image from "next/image";

const ThemeToggle = () => {
  const { themeHandler, isDarkMode } = useDarkModeToggle();

  return (
    <div
      className={`cursor-pointer w-20 h-8 rounded-2xl relative border border-white px-1 items-center flex ${
        isDarkMode ? "justify-end pb-1" : "justify-start"
      }`}
      onClick={themeHandler}
    >
      <Image
        src={`${isDarkMode ? "/images/moon.png" : "/images/sun.png"}`}
        alt=""
        width={30}
        height={30}
        priority
      />
    </div>
  );
};

export default ThemeToggle;
