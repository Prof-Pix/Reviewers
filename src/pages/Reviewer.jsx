import { useEffect, useState } from "react";

//Components
import SubjectComponent from "../components/SubjectComponent";

import SearchBar from "../components/SearchBar";
import { useFetchData } from "../customHooks/useFetchData";
import { useGlobalContext } from "../provider/Provider";
import SearchQuizList from "../reviewers_subpages/SearchQuizList";

const Reviewer = () => {
  const { academicYearsData, getAcademicYearData } = useFetchData();
  const { theme } = useGlobalContext();

  const [searchText, setSearchText] = useState("");

  const [selectedAcademicYear, setSelectedAcademicYear] = useState(
    localStorage.getItem("academicYear") || "1st Sem A.Y. 2024 - 2025"
  );

  const [selectedAcademicYearData, setSelectedAcademicYearData] =
    useState(null);

  const [academicYearcourses, setAcademicYearCourses] = useState(null);

  const filteredCourses =
    academicYearcourses?.filter((course) => {
      return (
        course.courseCode.toLowerCase().includes(searchText.toLowerCase()) ||
        course.courseName.toLowerCase().includes(searchText.toLowerCase())
      );
    }) || [];

  const filteredQuizzes = academicYearcourses?.flatMap((course) =>
    course.quizzes
      .filter((quiz) =>
        quiz.quizName.toLowerCase().includes(searchText.toLowerCase())
      )
      .map((quiz) => ({ courseData: course, quizData: quiz }))
  );
  console.log(filteredQuizzes);

  const handleAcademicYearChange = (event) => {
    setSelectedAcademicYear(event.target.value);
    localStorage.setItem("academicYear", event.target.value);
  };

  useEffect(() => {
    if (!localStorage.getItem("academicYear")) {
      localStorage.setItem("academicYear", selectedAcademicYear);
    }
  });

  useEffect(() => {
    const academicYearData = getAcademicYearData(selectedAcademicYear);
    setSelectedAcademicYearData(academicYearData);
    setAcademicYearCourses(academicYearData.courses);
  }, [selectedAcademicYear]);

  return (
    <div className="pb-14">
      <div className="px-5 pt-10 grid grid-cols-1 min-[550px]:grid-cols-2 min-[550px]:place-content-between place-items-end gap-y-2 pb-7">
        <h1
          className={`font-extrabold text-3xl min-[550px]:place-self-start ${
            theme === "dark" ? "text-white" : "text-black"
          }`}
        >
          Courses
        </h1>

        <div>
          <select
            className={`${
              theme === "dark" && "shadow-white shadow-sm"
            } px-3 py-2 border text-sm rounded min-[550px]:place-self-end shadow-md min-[550px]:text-base`}
            onChange={handleAcademicYearChange}
            value={selectedAcademicYear}
          >
            {academicYearsData.map((data, index) => (
              <option key={index}>{data.academicYear}</option>
            ))}
          </select>
        </div>
      </div>
      <div
        className={`px-6 mb-3 w-full ${searchText ? "visible" : "invisible"} `}
      >
        <div>
          {filteredCourses?.length != 0 && (
            <div>
              <p
                className={`${theme === "dark" ? "text-white" : "text-black"}`}
              >
                {`Showing ${filteredCourses?.length} ${
                  filteredCourses?.length == 1 ? "entry" : "entries"
                } from ${academicYearcourses?.length} ${
                  academicYearcourses?.length == 1 ? "course" : "courses"
                }`}
              </p>
            </div>
          )}
        </div>
      </div>
      {!filteredCourses?.length && (
        <div className="flex justify-center">
          <p className={`${theme === "dark" ? "text-white" : "text-black"}`}>
            No courses available.
          </p>
        </div>
      )}

      <div
        className={`w-full mb-5 grid gap-4 grid-cols-1 px-6 min-[500px]:px-14 min-[550px]:px-20 min-[580px]:px-24 min-[600px]:grid-cols-2 min-[600px]:px-6  min-[830px]:px-16  min-[950px]:px-24 min-[1000px]:grid-cols-3 min-[1000px]:px-6 min-[1200px]:px-20`}
      >
        {filteredCourses?.map((course, index) => {
          return (
            <SubjectComponent
              key={index}
              courseCode={course.courseCode}
              courseName={course.courseName}
              imageName={course.imageName}
            />
          );
        })}
      </div>
      {searchText.length != 0 && filteredQuizzes.length != 0 && (
        <div>
          <div className="mb-2">
            <p>Quizzes</p>
          </div>
          <div className="flex flex-col gap-y-1">
            {filteredQuizzes?.map((quiz, index) => (
              <SearchQuizList
                key={index}
                courseCode={quiz.courseData.courseCode}
                quizName={quiz.quizData.quizName}
                courseName={quiz.courseData.courseName}
              />
            ))}
          </div>
        </div>
      )}

      <SearchBar
        value={searchText}
        setSearchText={setSearchText}
        placeholderText={"Search courses/quizzes..."}
      />
    </div>
  );
};

export default Reviewer;
