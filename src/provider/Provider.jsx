import React from "react";
import { createContext, useState } from "react";

import data from "../database/db.json";

const DataContext = createContext();

const Provider = ({ children }) => {
  const [courses, setCourses] = useState(data["courses"]);
  const [cheatSheets, setCheatSheets] = useState(data["cheatsheets"]);

  return (
    <DataContext.Provider value={{ courses, cheatSheets }}>
      {children}
    </DataContext.Provider>
  );
};

export { Provider, DataContext };
