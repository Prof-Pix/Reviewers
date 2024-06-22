import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Typed from "typed.js";

const NavBar = () => {
  const el = React.useRef(null);
  const location = useLocation();

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["lindtsey.dev", "Rhem Giou Salvador"],
      typeSpeed: 200,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
  return (
    <div className="h-16 flex justify-between items-center border-gray-200 border rounded-t-lg py-10 shadow-lg">
      <ul className="flex items-center">
        {/* <Link to="/">
          <li
            className={`px-4 py-2 m-2 rounded-t-md duration-200 hover:font-bold text-lg ${
              location.pathname == "/" ? "border-b-2 border-gray-800 " : ""
            }`}
          >
            Home
          </li>
        </Link> */}
        <Link to="/reviewers">
          <li
            className={`px-4 py-2 m-2 rounded-t-md duration-200 hover:font-bold text-lg ${
              location.pathname.includes("/subject") ||
              location.pathname == "/reviewers"
                ? "border-b-2 border-gray-800 "
                : ""
            }`}
          >
            Reviewers
          </li>
        </Link>
        <Link to="/leaks">
          <li
            className={`px-4 py-2 m-2 rounded-t-md duration-200 hover:font-bold text-lg ${
              location.pathname == "/leaks" ? "border-b-2 border-gray-800 " : ""
            }`}
          >
            Leaks
          </li>
        </Link>
        {/* <Link to="/about">
          <li
            className={`px-4 py-2 m-2 rounded-t-md duration-200 hover:font-bold text-lg ${
              location.pathname == "/about" ? "border-b-2 border-gray-800 " : ""
            }`}
          >
            About
          </li>
        </Link> */}
      </ul>
      <div className="pr-5">
        <span ref={el} className="text-xl font-extralight font-mono"></span>
      </div>
    </div>
  );
};

export default NavBar;
