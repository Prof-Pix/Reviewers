import dataFromDB from "../database/db.json";
import { useState } from "react";

export function useFetchData() {
  const [data, setData] = useState(dataFromDB["data"]);

  const [academicYearsData, setAcademicYearsData] = useState(
    data["academicYears"]
  );

  const getAcademicYearData = (academicYear) => {
    const academicYearIndex = dataFromDB["data"]["academicYears"].findIndex(
      (value, index, array) => value.academicYear == academicYear
    );

    return dataFromDB["data"]["academicYears"][academicYearIndex];
  };

  const getCourses = (academicYear) => {
    const academicYearIndex = dataFromDB["data"]["academicYears"].findIndex(
      (value, index, array) => value.academicYear == academicYear
    );

    return dataFromDB["data"]["academicYears"][academicYearIndex].courses;
  };

  const getCourseData = (academicYear, courseName) => {
    const courseIndex = getAcademicYearData(academicYear).courses.findIndex(
      (value, index, array) => value.courseName == courseName
    );

    return getAcademicYearData(academicYear).courses[courseIndex];
  };

  const [cheatSheets, setCheatSheets] = useState(data["cheatsheets"]);

  return {
    academicYearsData,
    cheatSheets,
    getAcademicYearData,
    getCourseData,
    getCourses,
  };
}
