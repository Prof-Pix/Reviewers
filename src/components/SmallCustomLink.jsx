import React from "react";
import { useGlobalContext } from "../provider/Provider";
import { Link, useLocation } from "react-router-dom";

const smallNavBarStyles =
  "flex items-center gap-x-5 px-4 py-2 m-2 rounded-t-md duration-200 hover:font-bold text-lg";

const SmallCustomLink = ({
  to,
  linkName,
  ActiveIcon,
  InactiveIcon,
  closeNav,
  ...props
}) => {
  const { theme } = useGlobalContext();
  const location = useLocation();
  return (
    <Link to={to} onClick={closeNav}>
      <li
        className={`${smallNavBarStyles} ${
          location.pathname.includes(props.otherTo) || location.pathname == to
            ? `border-b-2 ${
                theme === "dark" ? "border-gray-600 " : "border-gray-800"
              }`
            : ""
        }`}
      >
        <div>
          {location.pathname.includes(props.otherTo) ||
          location.pathname == to ? (
            <ActiveIcon color={`${theme === "dark" ? "white" : "black"}`} />
          ) : (
            <InactiveIcon color={`${theme === "dark" ? "white" : "black"}`} />
          )}
        </div>
        <div className={`${theme === "dark" ? "text-white" : "text-black"}`}>
          {linkName}
        </div>
      </li>
    </Link>
  );
};

export default SmallCustomLink;
