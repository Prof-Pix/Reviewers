import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../provider/Provider";

const SubjectComponent = ({ imageName, courseCode, courseName }) => {
  const imagePath = `images/${imageName}.jpg`;
  const { theme } = useGlobalContext();

  return (
    <Link to={`/subject/${courseName}`}>
      <div className={`cursor-pointer hover:shadow-lg `}>
        <div className="w-auto h-[8rem] overflow-hidden rounded-t-lg">
          <img
            className="h-full w-full object-cover"
            src={imagePath}
            alt={imageName}
          />
        </div>
        <div className="p-3 border border-gray-300 border-solid border-t-0 rounded-b-lg">
          <div>
            <p
              className={`font-bold line-clamp-1 min-h-3 ${
                theme === "dark" ? "text-white" : "text-black"
              }`}
            >
              {courseCode}
            </p>
          </div>
          <div>
            <p
              className={`font-medium line-clamp-2 min-h-12 ${
                theme === "dark" ? "text-white" : "text-black"
              }`}
            >
              {courseName}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SubjectComponent;
