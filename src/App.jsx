import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./Routes";
import NavBar from "./components/NavBar";
import { Provider } from "./provider/Provider";

function App() {
  return (
    <div className="flex justify-center h-[100dvh]">
      <div className="p-2 w-[80rem]">
        <Provider>
          <Router>
            <NavBar />
            <AppRoutes />
          </Router>
        </Provider>
      </div>
    </div>
  );
}

export default App;
