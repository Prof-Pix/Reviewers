import React, { createContext, useState } from "react";
import SubjectComponent from "../components/SubjectComponent";
import { courses } from "../database/db";

export const SubjectContext = createContext();

const Reviewer = () => {
  return (
    <div className="pb-6">
      <div className="text-center text-3xl p-10 ">
        <h1 className="font-extrabold">Subjects</h1>
      </div>
      <div
        className={`w-full grid gap-4 grid-cols-1 px-6 min-[500px]:px-14 min-[550px]:px-20 min-[580px]:px-24 min-[600px]:grid-cols-2 min-[600px]:px-6  min-[830px]:px-16  min-[950px]:px-24 min-[1000px]:grid-cols-3 min-[1000px]:px-6 min-[1200px]:px-20`}
      >
        {courses.map((course, index) => {
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
    </div>
  );
};

export default Reviewer;
