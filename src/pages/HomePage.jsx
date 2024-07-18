import React from "react";
import { useGlobalContext } from "../provider/Provider";

const HomePage = () => {
  const { theme } = useGlobalContext();
  return (
    <div
      className={`flex justify-center items-center h-5/6 font-semibold tracking-wide text-7xl border-b-2 border-b-gray-400 border-solid mx-10 max-[460px]:mx-5 max-[460px]:text-5xl ${
        theme === "dark" ? "text-white" : "text-black"
      }`}
    >
      Welcome.
    </div>
  );
};

export default HomePage;
