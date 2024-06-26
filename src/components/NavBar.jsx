import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Typed from "typed.js";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaNoteSticky } from "react-icons/fa6";
import { FaRegNoteSticky } from "react-icons/fa6";

import { PiDetectiveFill } from "react-icons/pi";
import { PiDetective } from "react-icons/pi";

const NavBar = () => {
  const el = React.useRef(null);
  const location = useLocation();

  const [isNavOpen, setIsNavOpen] = useState(false);

  const openCloseNav = () => {
    setIsNavOpen((prev) => !prev);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

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
    <div className="relative">
      <div className="px-5 h-16 flex justify-between items-center border-gray-200 border rounded-t-lg py-4 shadow-lg">
        <div
          className={`cursor-pointer duration-150 ${
            isNavOpen ? "rotate-[90deg]" : ""
          } min-[600px]:hidden`}
          onClick={openCloseNav}
        >
          <RxHamburgerMenu size={25} />
        </div>

        <div className="hidden min-[600px]:block">
          <ul className="flex ">
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
                  location.pathname == "/leaks"
                    ? "border-b-2 border-gray-800 "
                    : ""
                }`}
              >
                Leaks
              </li>
            </Link>
          </ul>
        </div>

        <div>
          <span ref={el} className="text-base font-extralight font-mono"></span>
        </div>
      </div>

      <div
        className={`absolute bottom-auto  ${
          isNavOpen ? "block" : "hidden"
        } bg-white shadow-lg border-2 border-gray-300 rounded-b-lg w-full`}
      >
        <ul>
          <Link to="/reviewers" onClick={closeNav}>
            <li
              className={`flex items-center gap-x-5 px-4 py-2 m-2 rounded-t-md duration-200 hover:font-bold text-lg ${
                location.pathname.includes("/subject") ||
                location.pathname == "/reviewers"
                  ? "border-b-2 border-gray-800 "
                  : ""
              }`}
            >
              <div>
                {location.pathname.includes("/subject") ||
                location.pathname == "/reviewers" ? (
                  <FaNoteSticky />
                ) : (
                  <FaRegNoteSticky />
                )}
              </div>
              <div>Reviewers</div>
            </li>
          </Link>

          <Link to="/leaks" onClick={closeNav}>
            <li
              className={`flex items-center  gap-x-5 px-4 py-2 m-2 rounded-t-md duration-200 hover:font-bold text-lg ${
                location.pathname == "/leaks"
                  ? "border-b-2 border-gray-800 "
                  : ""
              }`}
            >
              <div>
                {location.pathname == "/leaks" ? (
                  <PiDetectiveFill />
                ) : (
                  <PiDetective />
                )}
              </div>
              <div>Leaks</div>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
