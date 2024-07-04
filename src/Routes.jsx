import { Route, Routes } from "react-router-dom";

//Components

import HomePage from "./pages/HomePage";
import Reviewer from "./pages/Reviewer";
import Leaks from "./pages/Leaks";
import About from "./pages/About";
import Subject from "./reviewers_subpages/Subject";
import Home from "../../react-tutorial/project-challenge/src/screens/Home";
import Cheatsheets from "./pages/Cheatsheets";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/reviewers" element={<Reviewer />} />
      <Route path="/cheatsheets" element={<Cheatsheets />} />
      <Route path="/leaks" element={<Leaks />} />
      <Route path="/subject/:subjectname" element={<Subject />} />
    </Routes>
  );
};

export default AppRoutes;
