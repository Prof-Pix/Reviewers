import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../provider/Provider";

const largeNavBarStyles =
  "px-3 py-2 m-2 rounded-t-md duration-200 hover:font-bold text-lg";

const darkModeBorderBottom = "border-b-2 border-white ";
const lightModeBorderBottom = "border-b-2 border-gray-800";

const LargeCustomLink = ({ to, linkName, ...props }) => {
  const { theme } = useGlobalContext();
  return (
    <Link to={to}>
      <li
        className={`${largeNavBarStyles} ${
          location.pathname.includes(props.otherTo) || location.pathname == to
            ? `${
                theme === "dark" ? darkModeBorderBottom : lightModeBorderBottom
              }`
            : ""
        }`}
      >
        {linkName}
      </li>
    </Link>
  );
};

export default LargeCustomLink;
