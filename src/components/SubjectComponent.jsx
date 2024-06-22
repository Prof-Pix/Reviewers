import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { SubjectContext } from "../pages/Reviewer";

const SubjectComponent = ({ imageName, courseCode, courseName }) => {
  const imagePath = `images/${imageName}.jpg`;

  return (
    <Link to={`/subject/${courseName}`}>
      <div className={`cursor-pointer hover:shadow-lg`}>
        <div className="w-auto h-60 overflow-hidden rounded-t-lg">
          <img
            className="h-full w-full object-cover"
            src={imagePath}
            alt={imageName}
          />
        </div>
        <div className="p-3 border border-gray-300 border-solid border-t-0 rounded-b-lg">
          <div>
            <p className="font-bold text-xl text-ellipsis overflow-hidden">
              {courseCode}
            </p>
          </div>
          <div>
            <p className="font-medium text-lg text-ellipsis overflow-hidden">
              {courseName}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SubjectComponent;
