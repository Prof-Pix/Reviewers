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
    console.log(courseData);
  });

  return (
    <div>
      {courseData == null ? (
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
              <div className="border-2 h-fit p-1 rounded-l-md">
                <CiSearch size={16} />
              </div>
              <div>
                <input type="text" className="border-2 rounded-r-md" />
              </div>
            </div>
            <div>
              {courseData["quizzes"].map((quizData, index) => {
                return <QuizComponent key={index} quizData={quizData} />;
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Subject;
