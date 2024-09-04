import React, { useEffect } from "react";
import { useState } from "react";

import { IoMdArrowDropdownCircle, IoMdArrowDropupCircle } from "react-icons/io";
import { useGlobalContext } from "../provider/Provider";
import { useLocation } from "react-router-dom";

const QuizComponent = ({ quizData }) => {
  const location = useLocation();

  const [isOpen, setIsOpen] = useState(
    location.state?.quizName == quizData.quizName ? true : false
  );
  const { theme } = useGlobalContext();

  return (
    <div className="mb-4 ">
      <div
        className={`${
          theme === "dark"
            ? "border-[#1e2941] hover:shadow-[#1e2941]"
            : "border-gray-100 hover:shadow-gray-100"
        } hover:shadow-md  transition-all cursor-pointer border-2 h-fit w-full flex justify-between items-center p-4 ${
          isOpen && "rounded-t-lg"
        } `}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <div>
          <p
            className={`text-base font-bold ${
              theme === "dark" ? "text-white" : "text-black"
            }`}
          >
            {quizData.quizName}
          </p>
        </div>

        {isOpen ? (
          <IoMdArrowDropupCircle
            size={20}
            color={`${theme === "dark" ? "white" : "black"}`}
          />
        ) : (
          <IoMdArrowDropdownCircle
            size={20}
            color={`${theme === "dark" ? "white" : "black"}`}
          />
        )}
      </div>

      {isOpen && (
        <div
          className={`${
            theme === "dark" ? "border-[#1e2941]" : "border-gray-200"
          } grid grid-rows-1 p-8 border rounded-b-lg shadow-sm`}
        >
          <div
            className={`items-center flex pb-5 mb-6 border-dashed border-b-2 ${
              theme === "dark" ? "border-gray-800" : "border-gray-200"
            }`}
          >
            <div className="grid grid-cols-2 max-[800px]:grid-cols-1 max-[800px]:gap-y-5">
              <div>
                <p
                  className={`text-base font-bold ${
                    theme === "dark" ? "text-white" : "text-black"
                  }`}
                >
                  Description
                </p>
              </div>
              <div>
                <p
                  className={`text-base font-light line-clamp-6 ${
                    theme === "dark" ? "text-white" : "text-black"
                  }`}
                >
                  {quizData.quizDescription}
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center ">
            <a
              href={quizData.quizLink}
              target="_blank"
              className={`text-base underline line-clamp-6 ${
                theme === "dark" ? "text-white" : "text-black "
              }`}
            >
              <button
                className={`${
                  theme === "dark"
                    ? "bg-white text-black"
                    : "bg-black text-white"
                } inline-block  px-10 py-2 rounded-lg`}
              >
                Link to Quiz
              </button>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizComponent;
