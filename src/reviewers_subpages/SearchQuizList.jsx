import React from "react";
import { Link, useNavigate } from "react-router-dom";

const SearchQuizList = ({ quizName, courseName, courseCode }) => {
  const navigate = useNavigate();

  //we use navigate instead of link to be able to pass state
  const goToPage = () => {
    navigate(`/subject/${localStorage.getItem("academicYear")}/${courseName}`, {
      state: { quizName: quizName, isOpen: true },
    });
  };
  return (
    <button
      className="flex flex-col px-4 py-2 border rounded gap-y-1"
      onClick={goToPage}
    >
      <div>
        <p className="text-sm font-bold">{quizName}</p>
      </div>
      <div>
        <p className="text-xs">{`${courseCode} - ${courseName}`}</p>
      </div>
    </button>
  );
};

export default SearchQuizList;
