import data from "../database/db.json";
import { useState } from "react";

export function useFetchCoursesData() {
  const [courses, setCourses] = useState(data["courses"]);
  const [cheatSheets, setCheatSheets] = useState(data["cheatsheets"]);

  return { courses, cheatSheets };
}
