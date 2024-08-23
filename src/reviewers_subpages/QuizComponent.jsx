import React from "react";
import { useState } from "react";

import { IoMdArrowDropdownCircle, IoMdArrowDropupCircle } from "react-icons/io";
import { useGlobalContext } from "../provider/Provider";

const QuizComponent = ({ quizData }) => {
  const [isOpen, setIsOpen] = useState(false);
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
          } grid grid-rows-2 p-8 border rounded-b-lg shadow-sm`}
        >
          <div
            className={`items-center flex pb-6 border-dashed border-b-2 ${
              theme === "dark" ? "border-gray-800" : "border-gray-200"
            }`}
          >
            <div>
              <a
                href={quizData.quizLink}
                target="_blank"
                className={`text-base underline line-clamp-1 ${
                  theme === "dark" ? "text-white" : "text-black"
                }`}
              >
                {quizData.quizLink}
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 pt-6 max-[800px]:grid-cols-1 max-[800px]:gap-y-5">
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
                className={`text-base font-light line-clamp-4 ${
                  theme === "dark" ? "text-white" : "text-black"
                }`}
              >
                {quizData.quizDescription}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizComponent;
