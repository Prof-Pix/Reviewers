import { Link, useLocation } from "react-router-dom";
import { useGlobalContext } from "../provider/Provider";

const largeNavBarStyles =
  "flex items-center gap-x-1 px-3 py-2 m-2 rounded-t-md duration-200 hover:font-bold text-lg";

const darkModeBorderBottom = "border-b-2 border-white ";
const lightModeBorderBottom = "border-b-2 border-gray-800";

const LargeCustomLink = ({
  to,
  linkName,
  ActiveIcon,
  InactiveIcon,
  ...props
}) => {
  const { theme } = useGlobalContext();
  const location = useLocation();
  return (
    <Link to={to}>
      <li
        className={`${largeNavBarStyles} ${
          (location.pathname.includes(props.otherTo) ||
            location.pathname == to) &&
          `${theme === "dark" ? darkModeBorderBottom : lightModeBorderBottom}`
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

export default LargeCustomLink;
