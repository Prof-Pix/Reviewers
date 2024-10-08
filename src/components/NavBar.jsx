import React, { useState, useEffect } from "react";

import Typed from "typed.js";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaNoteSticky, FaRegNoteSticky } from "react-icons/fa6";

import { PiDetectiveFill, PiDetective } from "react-icons/pi";
import { AiFillFileZip, AiOutlineFileZip } from "react-icons/ai";

import { IoTimerOutline, IoTimerSharp } from "react-icons/io5";

import { FaSun, FaMoon } from "react-icons/fa";
import { useGlobalContext } from "../provider/Provider";
import SmallCustomLink from "./SmallCustomLink";
import LargeCustomLink from "./LargeCustomLink";

const NavBar = () => {
  const { theme, handleSwitchTheme } = useGlobalContext();
  const el = React.useRef(null);

  const [isNavOpen, setIsNavOpen] = useState(false);

  const openCloseNav = () => {
    setIsNavOpen((prev) => !prev);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.matchMedia("(max-width: 850px)").matches; // Adjust breakpoint as needed
      if (!isMobile && isNavOpen) {
        setIsNavOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [isNavOpen]);

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
    <div className="z-50 sticky top-0.5">
      <div
        className={`px-5 h-16 flex justify-between items-center rounded-t-lg py-4 border-gray-200 shadow-lg ${
          theme === "dark"
            ? "bg-[#202c47] shadow-[#202c47] shadow-md text-white"
            : "bg-white"
        }`}
      >
        <div className="min-[850px]:hidden flex gap-x-4">
          <div
            className={`cursor-pointer duration-150 ${
              isNavOpen ? "rotate-[90deg]" : ""
            } `}
            onClick={openCloseNav}
          >
            <RxHamburgerMenu size={25} />
          </div>

          <button onClick={handleSwitchTheme}>
            {theme === "light" ? <FaSun size={25} /> : <FaMoon size={25} />}
          </button>
        </div>

        <div className={`hidden min-[850px]:block`}>
          <ul className="flex items-center">
            <div
              className={`flex items-center pr-3 mr-2 border-r ${
                theme === "light" ? "border-black" : "border-white"
              }`}
            >
              <button onClick={handleSwitchTheme}>
                {theme === "light" ? <FaSun size={25} /> : <FaMoon size={25} />}
              </button>
            </div>

            <LargeCustomLink
              to="/reviewers"
              linkName="Reviewers"
              ActiveIcon={FaNoteSticky}
              InactiveIcon={FaRegNoteSticky}
              otherTo={"/subject"}
            />
            <LargeCustomLink
              to="/cheatsheets"
              linkName="Cheat Sheets"
              ActiveIcon={AiFillFileZip}
              InactiveIcon={AiOutlineFileZip}
            />

            <LargeCustomLink
              to="/leaks"
              linkName="Leaks"
              ActiveIcon={PiDetectiveFill}
              InactiveIcon={PiDetective}
            />

            <LargeCustomLink
              to="/timer"
              linkName="Timer"
              ActiveIcon={IoTimerSharp}
              InactiveIcon={IoTimerOutline}
            />
          </ul>
        </div>

        <div>
          <span ref={el} className="font-mono text-base font-extralight"></span>
        </div>
      </div>

      {/*Mobile Navbar*/}
      <div
        className={`absolute bottom-auto  ${isNavOpen ? "block" : "hidden"} ${
          theme === "dark" ? "bg-[#1f2937]" : "bg-white"
        } shadow-lg border-2 border-gray-300 rounded-b-lg w-full`}
      >
        <ul>
          <SmallCustomLink
            to="/reviewers"
            linkName="Reviewers"
            ActiveIcon={FaNoteSticky}
            InactiveIcon={FaRegNoteSticky}
            closeNav={closeNav}
            otherTo={"/subject"}
          />
          <SmallCustomLink
            to="/cheatsheets"
            linkName="Cheat Sheets"
            ActiveIcon={AiFillFileZip}
            InactiveIcon={AiOutlineFileZip}
            closeNav={closeNav}
          />
          <SmallCustomLink
            to="/leaks"
            linkName="Leaks"
            ActiveIcon={PiDetectiveFill}
            InactiveIcon={PiDetective}
            closeNav={closeNav}
          />
          <SmallCustomLink
            to="/timer"
            linkName="Timer"
            ActiveIcon={IoTimerSharp}
            InactiveIcon={IoTimerOutline}
            closeNav={closeNav}
          />
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
