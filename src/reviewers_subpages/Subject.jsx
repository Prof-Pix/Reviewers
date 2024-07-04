import React, { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import QuizComponent from "./QuizComponent";

//For Icons
import { TiArrowBack } from "react-icons/ti";

import { DataContext } from "../provider/Provider";
import SearchBar from "../components/SearchBar";

const Subject = () => {
  const { subjectname } = useParams();
  const { courses } = useContext(DataContext);

  const [courseData, setCourseData] = useState(null);
  const [courseQuizzes, setCourseQuizzes] = useState([]);

  const [searchText, setSearchText] = useState("");

  const filteredQuizzes = courseQuizzes?.filter((courseQuiz) => {
    return courseQuiz.quizName.toLowerCase().includes(searchText.toLowerCase());
  });

  const findSubjectIndex = () => {
    for (let i = 0; i < courses.length; i++) {
      if (courses[i].courseName == subjectname) {
        return i;
      }
    }
  };

  useEffect(() => {
    const index = findSubjectIndex();
    setCourseData(courses[index]);

    if (courseData != null) {
      setCourseQuizzes(courseData["quizzes"]);
    }
  });
  return (
    <>
      {!courseData ? (
        <p>Loading...</p>
      ) : (
        <div className="pt-10 pb-11 relative">
          <div className="flex justify-end">
            <Link to="/reviewers">
              <div className="flex justify-center items-center mb-4 mr-4 bg-black w-fit rounded-md text-white px-4 py-2 cursor-pointer hover:shadow-lg ">
                <div>
                  <TiArrowBack size={15} />
                </div>
              </div>
            </Link>
          </div>
          <div className="px-4">
            <div className="text-center text-2xl pt-10 pb-4 ">
              <h1 className="font-extrabold line-clamp-3">
                {courseData.courseName}
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
                    <p>
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
                <p>No quizzes available.</p>
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
