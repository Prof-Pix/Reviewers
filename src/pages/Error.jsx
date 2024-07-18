import React from "react";

const Error = () => {
  return (
    <div className="h-[85vh] flex flex-col gap-y-3 justify-center items-center">
      <img
        className="h-28 w-28 min-[650px]:h-40 min-[650px]:w-40 min-[850px]:h-52 min-[850px]:w-52 object-cover"
        src={"images/error-icon.png"}
        alt={"Error"}
      />
      <p className="font-medium text-center">
        Lost your way? Head back to the{" "}
        <a href="/">
          <span className="underline">homepage</span>
        </a>
        .
      </p>
    </div>
  );
};

export default Error;
