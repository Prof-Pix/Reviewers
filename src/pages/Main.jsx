import React from "react";
import { useGlobalContext } from "../provider/Provider";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "../Routes";
import NavBar from "../components/NavBar";

const Main = () => {
  const { theme } = useGlobalContext();
  return (
    <div
      className={`flex justify-center h-[100dvh] relative ${
        theme === "dark" ? "bg-dark" : "bg-light"
      }`}
    >
      <div className="p-2 w-[80rem]">
        <Router>
          <NavBar />
          <AppRoutes />
        </Router>
      </div>
    </div>
  );
};

export default Main;
