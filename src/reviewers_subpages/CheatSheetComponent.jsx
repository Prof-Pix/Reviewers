import React from "react";
import { useState } from "react";

import { IoMdArrowDropdownCircle, IoMdArrowDropupCircle } from "react-icons/io";
import { useGlobalContext } from "../provider/Provider";

const CheatSheetComponent = ({ cheatSheetData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useGlobalContext();
  return (
    <div className="mb-4">
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
            {cheatSheetData.topic}
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
          } grid grid-rows-1 p-8 border rounded-b-lg gap-y-5`}
        >
          <div
            className={`grid grid-cols-2 border-dashed border-b-2  pb-6 max-[800px]:grid-cols-1 max-[800px]:gap-y-5 ${
              theme === "dark" ? "border-gray-800" : "border-gray-200"
            }`}
          >
            <div>
              <p
                className={`text-base font-medium ${
                  theme === "dark" ? "text-white" : "text-black"
                }`}
              >
                Description
              </p>
            </div>
            <div
              className={`text-base line-clamp-4 ${
                theme === "dark" ? "text-white" : "text-black"
              }`}
            >
              {cheatSheetData.description}
            </div>
          </div>
          <div className="flex items-center justify-center">
            <a
              className="flex items-center justify-center "
              href={`${`files/${cheatSheetData["fileName"]}.pdf`}`}
              download
            >
              <button
                className={`${
                  theme === "dark"
                    ? "bg-white text-black"
                    : "bg-black text-white"
                } inline-block  px-10 py-2 rounded-lg`}
              >
                Download
              </button>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheatSheetComponent;
