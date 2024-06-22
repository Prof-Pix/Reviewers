import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { courses } from "../database/db";
import QuizComponent from "./QuizComponent";

//For Icons
import { TiArrowBack } from "react-icons/ti";

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
              <div className="flex justify-end items-center text-lg gap-1 bg-black w-fit rounded-md text-white px-4 py-2 cursor-pointer hover:shadow-lg ">
                <div>
                  <TiArrowBack size={20} />
                </div>
                <div>
                  <p>Subjects</p>
                </div>
              </div>
            </Link>
          </div>
          <div className="px-10">
            <div className="text-center text-3xl mb-10 p-10 ">
              <h1 className="font-extrabold">{courseData.courseName}</h1>
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
