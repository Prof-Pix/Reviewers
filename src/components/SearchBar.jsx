import React from "react";
import { CiSearch } from "react-icons/ci";

const SearchBar = ({ setSearchText, searchText, placeholderText }) => {
  const handleChangeSearchText = (value) => {
    setSearchText(value);
  };
  return (
    <>
      <div className="flex justify-center items-center fixed bottom-0 w-full max-w-[80rem] pl-5 pr-9 shadow-lg">
        <div className="border-2 h-fit p-3 rounded-l-md bg-white">
          <CiSearch size={16} />
        </div>
        <input
          onChange={(e) => handleChangeSearchText(e.target.value)}
          value={searchText}
          type="text"
          className="border-2 rounded-r-md p-2 w-full"
          placeholder={placeholderText}
        />
      </div>
    </>
  );
};

export default SearchBar;
