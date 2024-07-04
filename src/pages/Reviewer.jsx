import React, { createContext, useState, useEffect, useContext } from "react";

//Components
import SubjectComponent from "../components/SubjectComponent";

//Provider
import { DataContext } from "../provider/Provider";
import SearchBar from "../components/SearchBar";

const Reviewer = () => {
  const { courses } = useContext(DataContext);
  const [searchText, setSearchText] = useState("");

  const filteredCourses = courses?.filter((course) => {
    return (
      course.courseCode.toLowerCase().includes(searchText.toLowerCase()) ||
      course.courseName.toLowerCase().includes(searchText.toLowerCase())
    );
  });

  return (
    <div className="pb-6">
      <div className="text-center text-3xl pt-10 px-10 pb-7 ">
        <h1 className="font-extrabold">Subjects</h1>
      </div>
      <div
        className={`px-6 mb-3 w-full ${searchText ? "visible" : "invisible"} `}
      >
        <div>
          {filteredCourses.length != 0 && (
            <div>
              <p>
                {`Showing ${filteredCourses.length} ${
                  filteredCourses.length == 1 ? "entry" : "entries"
                } from ${courses.length} ${
                  courses.length == 1 ? "course" : "courses"
                }`}
              </p>
            </div>
          )}
        </div>
      </div>
      {!filteredCourses.length && (
        <div className="flex justify-center">
          <p>No courses available.</p>
        </div>
      )}

      <div
        className={`w-full grid gap-4 grid-cols-1 px-6 min-[500px]:px-14 min-[550px]:px-20 min-[580px]:px-24 min-[600px]:grid-cols-2 min-[600px]:px-6  min-[830px]:px-16  min-[950px]:px-24 min-[1000px]:grid-cols-3 min-[1000px]:px-6 min-[1200px]:px-20`}
      >
        {filteredCourses?.map((course, index) => (
          <SubjectComponent
            key={index}
            courseCode={course.courseCode}
            courseName={course.courseName}
            imageName={course.imageName}
          />
        ))}
      </div>
      <SearchBar
        value={searchText}
        setSearchText={setSearchText}
        placeholderText={"Search subjects..."}
      />
    </div>
  );
};

export default Reviewer;
