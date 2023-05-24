import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function ThemeSwitch() {
  const [isOn, setIsOn] = useState(() => {
    if (typeof window !== "undefined") {
      if (localStorage.getItem("theme") === "dark") {
        return true;
      } else {
        return false;
      }
    }
  });
  const handleDarkmode = () => {
    console.log("checking if statments");
    if (isOn) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
    if (
      localStorage.getItem("theme") === "light" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: light)").matches)
    ) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  };
  useEffect(() => {
    console.log("checking if statments");

    if (isOn) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
    if (
      localStorage.getItem("theme") === "light" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: light)").matches)
    ) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  }, [isOn]);

  const toggleSwitch = () => setIsOn((prev) => !prev);
  return (
    <div
      onClick={toggleSwitch}
      className={` flex items-center h-6 w-16 rounded-2xl bg-neutral-600 p-2 shadow-inner hover:cursor-pointer dark:bg-neutral-500 ${
        isOn ? " place-content-end" : " place-content-start"
      }`}
    >
      <motion.div
        className="flex items-center justify-center w-5 h-5 rounded-full dark:bg-neutral-600"
        layout
        transition={{
          type: "spring",
          stiffness: 700,
          damping: 30,
          duration: 1.2,
        }}
      >
        {isOn ? (
          <SunIcon className="w-4 h-4 text-yellow-300" />
        ) : (
          <MoonIcon className="w-4 h-4 text-neutral-300" />
        )}
      </motion.div>
    </div>
  );
}
