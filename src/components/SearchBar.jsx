import React from "react";
import { CiSearch } from "react-icons/ci";

const SearchBar = ({ setSearchText, searchText, placeholderText }) => {
  const handleChangeSearchText = (value) => {
    setSearchText(value);
  };
  return (
    <>
      <div className="flex justify-center items-center fixed bottom-0 w-full max-w-[80rem] pl-5 pr-9 shadow-lg">
        <div className="p-3 bg-white border-2 h-fit rounded-l-md">
          <CiSearch size={16} />
        </div>
        <input
          onChange={(e) => handleChangeSearchText(e.target.value)}
          value={searchText}
          type="text"
          className="w-full p-2 border-2 rounded-r-md"
          placeholder={placeholderText}
        />
      </div>
    </>
  );
};

export default SearchBar;
