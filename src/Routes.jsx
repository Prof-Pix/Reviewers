import { Route, Routes } from "react-router-dom";

//Components

import HomePage from "./pages/HomePage";
import Reviewer from "./pages/Reviewer";
import Leaks from "./pages/Leaks";
import About from "./pages/About";
import Subject from "./reviewers_subpages/Subject";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/reviewers" element={<Reviewer />} />
      <Route path="/leaks" element={<Leaks />} />
      <Route path="/about" element={<About />} />
      <Route path="/subject/:subjectname" element={<Subject />} />
    </Routes>
  );
};

export default AppRoutes;
