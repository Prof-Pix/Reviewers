import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { courses } from "../database/db";
import QuizComponent from "./QuizComponent";

//For Icons
import { TiArrowBack } from "react-icons/ti";
import { CiSearch } from "react-icons/ci";

const Subject = () => {
  const { subjectname } = useParams();

  const [courseIndex, setCourseIndex] = useState(null);
  const [courseData, setCourseData] = useState(null);
  const [courseQuizzes, setCourseQuizzes] = useState([]);

  const [searchText, setSearchText] = useState("");

  const filteredQuizzes = courseQuizzes?.filter((courseQuiz) => {
    return courseQuiz.quizName.toLowerCase().includes(searchText.toLowerCase());
  });
  console.log(filteredQuizzes);

  const findSubjectIndex = () => {
    for (let i = 0; i < courses.length; i++) {
      if (courses[i].courseName == subjectname) {
        setCourseIndex(i);
        return;
      }
    }
  };

  useEffect(() => {
    findSubjectIndex();
    setCourseData(courses[courseIndex]);

    if (courseData != null) {
      setCourseQuizzes(courseData["quizzes"]);
    }
  });

  return (
    <div>
      {!courseData ? (
        "Loading..."
      ) : (
        <div className="py-10">
          <div className="flex justify-end ">
            <Link to="/reviewers">
              <div className=" mb-4 mr-4 bg-black w-fit rounded-md text-white px-4 py-2 cursor-pointer hover:shadow-lg ">
                <div>
                  <TiArrowBack size={15} />
                </div>
              </div>
            </Link>
          </div>
          <div className="px-4">
            <div className="text-center text-2xl mb-2 px-10 pt-10 pb-4 ">
              <h1 className="font-extrabold line-clamp-3">
                {courseData.courseName}
              </h1>
            </div>
            <div className="flex justify-center items-center mb-4">
              <div className="border-2 h-fit p-2 rounded-l-md">
                <CiSearch size={16} />
              </div>
              <div>
                <input
                  onChange={(e) => setSearchText(e.target.value)}
                  value={searchText}
                  type="text"
                  className="border-2 rounded-r-md p-1"
                />
              </div>
            </div>
            <div>
              {searchText && (
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
              )}
              {filteredQuizzes?.map((quiz, index) => (
                <QuizComponent key={index} quizData={quiz} />
              ))}
              {!filteredQuizzes.length && (
                <div className="flex justify-center">
                  <p>No quizzes available.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Subject;
