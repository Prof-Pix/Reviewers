import React from "react";
import { useContext } from "react";
import { useState, useEffect } from "react";

import { DataContext } from "../provider/Provider";
import CheatSheetComponent from "../reviewers_subpages/CheatSheetComponent";
import SearchBar from "../components/SearchBar";

const Cheatsheets = () => {
  const { cheatSheets } = useContext(DataContext);
  const [searchText, setSearchText] = useState("");

  const filteredCheatSheets = cheatSheets?.filter((cheatSheet) => {
    return cheatSheet.topic.toLowerCase().includes(searchText.toLowerCase());
  });

  return (
    <div>
      <div className="px-4 relative h-full">
        <div className="text-center text-3xl p-10 ">
          <h1 className="font-extrabold">Cheat Sheets</h1>
        </div>
        <div className={`mb-3 w-full ${searchText ? "visible" : "invisible"} `}>
          <div>
            {filteredCheatSheets.length != 0 && (
              <div>
                <p>
                  {`Showing ${filteredCheatSheets.length} ${
                    filteredCheatSheets.length == 1 ? "entry" : "entries"
                  } from ${cheatSheets.length} ${
                    cheatSheets.length == 1 ? "cheat sheet" : "cheat sheets"
                  }`}
                </p>
              </div>
            )}
          </div>
        </div>
        {!filteredCheatSheets.length && (
          <div className="flex justify-center">
            <p>No cheat sheets available.</p>
          </div>
        )}
        <div>
          {filteredCheatSheets?.map((cheatSheet, index) => (
            <CheatSheetComponent key={index} cheatSheetData={cheatSheet} />
          ))}
        </div>
      </div>
      <SearchBar
        value={searchText}
        setSearchText={setSearchText}
        placeholderText={"Search cheat sheets..."}
      />
    </div>
  );
};

export default Cheatsheets;
