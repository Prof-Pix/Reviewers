import { Route, Routes } from "react-router-dom";

//Components

import HomePage from "./pages/HomePage";
import Reviewer from "./pages/Reviewer";
import Leaks from "./pages/Leaks";
import About from "./pages/About";
import Error from "./pages/Error";
import Subject from "./reviewers_subpages/Subject";
import Cheatsheets from "./pages/Cheatsheets";
import TimerPage from "./pages/TimerPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/reviewers" element={<Reviewer />} />
      <Route path="/cheatsheets" element={<Cheatsheets />} />
      <Route path="/leaks" element={<Leaks />} />
      <Route path="/subject/:academicYear/:subjectName" element={<Subject />} />
      <Route path="/timer" element={<TimerPage />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default AppRoutes;
