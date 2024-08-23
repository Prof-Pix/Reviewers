import React from "react";
import { useGlobalContext } from "../provider/Provider";

const Leaks = () => {
  const { theme } = useGlobalContext();
  return (
    <div className="flex flex-col items-center justify-center h-5/6">
      <p className={`${theme === "dark" ? "text-white" : "text-black"}`}>
        No leaks as of now.
      </p>
      <p
        className={`italic font-bold ${
          theme === "dark" ? "text-white" : "text-black"
        }`}
      >
        If you want to elevate, you educate.
      </p>
    </div>
  );
};

export default Leaks;
