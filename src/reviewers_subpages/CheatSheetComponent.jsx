import React from "react";
import { useState } from "react";

import { IoMdArrowDropdownCircle, IoMdArrowDropupCircle } from "react-icons/io";

const CheatSheetComponent = ({ cheatSheetData }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="mb-4">
      <div
        className={` hover:shadow-md cursor-pointer border-2 border-t-white border-x-white h-fit w-full flex justify-between items-center p-4 ${
          isOpen
            ? "border-t-inherit border-x-inherit rounded-t-lg shadow-md"
            : ""
        } `}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <div>
          <p className="text-base font-bold">{cheatSheetData.topic}</p>
        </div>

        {isOpen ? (
          <IoMdArrowDropupCircle size={20} />
        ) : (
          <IoMdArrowDropdownCircle size={20} />
        )}
      </div>

      {isOpen && (
        <div className="grid grid-rows-2 p-8 border rounded-b-lg gap-y-5">
          <div className="grid grid-cols-2 border-dashed border-b-2 pb-6 max-[800px]:grid-cols-1 max-[800px]:gap-y-5">
            <div>
              <p className="text-base font-medium font-bold">Description</p>
            </div>
            <div className="text-base line-clamp-4">
              {cheatSheetData.description}
            </div>
          </div>
          <a
            className=" flex items-center justify-center"
            href={`${`files/${cheatSheetData["fileName"]}.pdf`}`}
            download
          >
            <p className="bg-black inline-block text-white px-10 py-2 rounded-lg">
              Download
            </p>
          </a>
        </div>
      )}
    </div>
  );
};

export default CheatSheetComponent;
