import React, { createContext, useState } from "react";
import SubjectComponent from "../components/SubjectComponent";
import { courses } from "../database/db";

export const SubjectContext = createContext();

const Reviewer = () => {
  return (
    <div className="pb-6">
      <div className="text-center text-3xl mb-10 p-10 ">
        <h1 className="font-extrabold">Subjects</h1>
      </div>
      <div
        className={`w-full grid gap-5 grid-cols-3 px-3 ${"max-[1500px]:grid-cols-2 max-[1500px]:px-20 max-[1000px]:px-10 max-[750px]:grid-cols-1 max-[750px]:px-24  "} `}
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
