import React, { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import QuizComponent from "./QuizComponent";

//For Icons
import { TiArrowBack } from "react-icons/ti";

import SearchBar from "../components/SearchBar";
import { useFetchData } from "../customHooks/useFetchData";
import { useGlobalContext } from "../provider/Provider";

const Subject = () => {
  const { getCourseData } = useFetchData();
  const { academicYear, subjectName } = useParams();
  const { theme } = useGlobalContext();

  const [courseData, setCourseData] = useState(
    getCourseData(academicYear, subjectName) || []
  );
  console.log(courseData);
  const [courseQuizzes, setCourseQuizzes] = useState(
    courseData["quizzes"] || []
  );

  const [searchText, setSearchText] = useState("");

  const filteredQuizzes = courseQuizzes?.filter((courseQuiz) => {
    return courseQuiz.quizName.toLowerCase().includes(searchText.toLowerCase());
  });

  return (
    <>
      {!courseData ? (
        <p>Loading...</p>
      ) : (
        <div className="relative pt-10 pb-11">
          <div className="flex justify-end">
            <Link to="/reviewers">
              <div
                className={`flex justify-center items-center mb-4 mr-4 w-fit rounded-md text-white px-4 py-2 cursor-pointer hover:shadow-lg ${
                  theme === "dark" ? "bg-white" : "bg-black"
                }`}
              >
                <div>
                  <TiArrowBack
                    size={15}
                    color={`${theme === "dark" ? "black" : "white"}`}
                  />
                </div>
              </div>
            </Link>
          </div>
          <div className="px-4">
            <div className="pt-10 pb-4 text-2xl text-center ">
              <h1
                className={`font-extrabold line-clamp-3 ${
                  theme === "dark" ? "text-white" : "text-black"
                }`}
              >
                {`${courseData.courseCode} - ${courseData.courseName}`}
              </h1>
            </div>
            <div
              className={` mb-3 w-full ${
                searchText ? "visible" : "invisible"
              } `}
            >
              <div>
                {filteredQuizzes.length != 0 && (
                  <div>
                    <p
                      className={`${
                        theme === "dark" ? "text-white" : "text-black"
                      }`}
                    >
                      {`Showing ${filteredQuizzes.length} ${
                        filteredQuizzes.length == 1 ? "entry" : "entries"
                      } from ${courseQuizzes.length} ${
                        courseQuizzes.length == 1 ? "quiz" : "quizzes"
                      }`}
                    </p>
                  </div>
                )}
              </div>
            </div>
            {!filteredQuizzes.length && (
              <div className="flex justify-center">
                <p
                  className={`${
                    theme === "dark" ? "text-white" : "text-black"
                  }`}
                >
                  No quizzes available.
                </p>
              </div>
            )}
            <div>
              {filteredQuizzes?.map((quiz, index) => (
                <QuizComponent key={index} quizData={quiz} />
              ))}
            </div>
          </div>
          <SearchBar
            value={searchText}
            setSearchText={setSearchText}
            placeholderText={"Search quizzes/assessments..."}
          />
        </div>
      )}
    </>
  );
};

export default Subject;
