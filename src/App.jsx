import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./Routes";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="flex justify-center w-full">
      <div className="p-2 w-[80rem]">
        <Router>
          <NavBar />
          <AppRoutes />
        </Router>
      </div>
    </div>
  );
}

export default App;
