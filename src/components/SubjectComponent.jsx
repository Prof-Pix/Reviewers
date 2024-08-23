import { Link } from "react-router-dom";
import { useGlobalContext } from "../provider/Provider";

const SubjectComponent = ({ imageName, courseCode, courseName }) => {
  const imagePath = `images/${imageName}.jpg`;

  const { theme } = useGlobalContext();
  return (
    <Link to={`/subject/${localStorage.getItem("academicYear")}/${courseName}`}>
      <div
        className={`cursor-pointer hover:shadow-xl hover:scale-105 transition-all `}
      >
        <div className="w-auto h-[14rem] overflow-hidden rounded-t-lg rounded-b-sm">
          <img
            className="object-cover w-full h-full"
            src={imagePath}
            alt={imageName}
          />
        </div>
        {/* <div className="p-3 border border-t-0 border-gray-300 border-solid rounded-b-lg">
          <div>
            <p
              className={`font-bold line-clamp-1 min-h-3 ${
                theme === "dark" ? "text-white" : "text-black"
              }`}
            >
              {courseCode}
            </p>
          </div>
          <div>
            <p
              className={`font-medium line-clamp-2 min-h-12 ${
                theme === "dark" ? "text-white" : "text-black"
              }`}
            >
              {courseName}
            </p>
          </div>
        </div> */}
      </div>
    </Link>
  );
};

export default SubjectComponent;
