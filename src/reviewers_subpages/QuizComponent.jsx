import React from "react";
import { useState } from "react";

import { IoMdArrowDropdownCircle, IoMdArrowDropupCircle } from "react-icons/io";

const QuizComponent = ({ quizData }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="mb-6 ">
      <div
        className={` hover:shadow-md cursor-pointer border-2 border-t-white border-x-white h-fit w-full flex justify-between items-center p-4 ${
          isOpen
            ? "border-t-inherit border-x-inherit rounded-t-lg shadow-md"
            : ""
        } `}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <div>
          <p className="text-xl font-bold">{quizData.quizName}</p>
        </div>

        {isOpen ? (
          <IoMdArrowDropupCircle size={30} />
        ) : (
          <IoMdArrowDropdownCircle size={30} />
        )}
      </div>

      {isOpen && (
        <div className="grid grid-rows-2 p-10 border rounded-b-lg">
          <div className="grid grid-cols-2 pb-6 border-dashed border-b-2 max-[800px]:grid-cols-1 max-[800px]:gap-y-5">
            <div>
              <p className="text-xl font-medium font-bold">Link</p>
            </div>
            <div>
              <a
                href={quizData.quizLink}
                target="_blank"
                className="text-xl underline text-ellipsis overflow-hidden"
              >
                {quizData.quizLink}
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 pt-6 max-[800px]:grid-cols-1 max-[800px]:gap-y-5">
            <div>
              <p className="text-xl font-medium font-bold">Description</p>
            </div>
            <div>
              <p className="text-xl">{quizData.quizDescription}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizComponent;
