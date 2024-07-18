import React, { useEffect, useState } from "react";
import { FaPauseCircle, FaPlayCircle, FaSearch } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

import { IoMdArrowDropdownCircle, IoMdArrowDropupCircle } from "react-icons/io";
import { GrPowerReset } from "react-icons/gr";

import { useTimer } from "../customHooks/useTimer";
import { useManageTimers } from "../customHooks/useManageTimer";
import { useGlobalContext } from "../provider/Provider";

const Timer = ({ handleDelete, componentTimer }) => {
  const { timers, setTimers } = useManageTimers();
  const { theme } = useGlobalContext();
  const {
    isPlaying,
    elapsedTime,
    timeStarted,
    isStarted,
    handlePlay,
    handleResetTimer,
    //Helpers
    padStartFormat,
    timeFormat,
  } = useTimer(componentTimer);

  const [isMoreInfoOpen, setIsMoreInfoOpen] = useState(false);

  const [isDeleting, setIsDeleting] = useState(false);

  const togglePlayPause = () => {
    handlePlay();
  };

  const toggleDelete = () => {
    setIsDeleting((prev) => !prev);
  };

  return (
    <div className="border-2 py-2 px-2 rounded-md relative">
      <div className=" flex flex-col items-center">
        <div className="w-full justify-end flex gap-x-1">
          <button onClick={() => setIsMoreInfoOpen((prev) => !prev)}>
            {isMoreInfoOpen ? (
              <IoMdArrowDropupCircle
                size={25}
                color={`${theme === "dark" ? "white" : "black"}`}
              />
            ) : (
              <IoMdArrowDropdownCircle
                size={25}
                color={`${theme === "dark" ? "white" : "black"}`}
              />
            )}
          </button>
        </div>
        <div className="h-10" />
        <div
          className={`flex gap-x-1 font-bold text-4xl min-[350px]:text-5xl ${
            theme === "dark" ? "text-white" : "text-black"
          }`}
        >
          <div>
            <p>{padStartFormat(elapsedTime.hours)}</p>
          </div>
          <div>
            <p>:</p>
          </div>
          <div>
            <p>{padStartFormat(elapsedTime.minutes)}</p>
          </div>
          <div>
            <p>:</p>
          </div>
          <div>
            <p>{padStartFormat(elapsedTime.seconds)}</p>
          </div>
        </div>
        <div className="h-4" />

        <div>
          <p
            className={`text-lg font-medium ${
              theme === "dark" ? "text-white" : "text-black"
            }`}
          >
            {componentTimer.name}
          </p>
        </div>
        <div className="h-4" />

        <div className="flex items-center gap-x-20 pb-4">
          <button onClick={togglePlayPause}>
            {isPlaying ? (
              <FaPauseCircle
                size={40}
                color={`${theme === "dark" ? "white" : "black"}`}
              />
            ) : (
              <FaPlayCircle
                size={40}
                color={`${theme === "dark" ? "white" : "black"}`}
              />
            )}
          </button>
          <button onClick={handleResetTimer}>
            <GrPowerReset
              size={43}
              color={`${theme === "dark" ? "white" : "black"}`}
            />
          </button>
          <button onClick={toggleDelete}>
            <MdDelete size={43} color="red" />
          </button>
        </div>
        <div
          className={`${
            isMoreInfoOpen ? "block" : "hidden"
          } w-full border-t border-t-gray-200 text-gray-500 text-sm px-7 py-2 flex flex-col gap-y-1 pt-3`}
        >
          <div className="grid grid-cols-2 ">
            <p>Start Time: </p>
            {isStarted ? <p>{timeStarted}</p> : <p>Not yet started</p>}
          </div>
          <div className="grid grid-cols-2">
            <p>Time Elapsed: </p>
            {isStarted ? (
              <div>
                {elapsedTime.hours >= 1 && (
                  <p>{`${timeFormat(elapsedTime.hours, "hour")} and`}</p>
                )}
                {elapsedTime.minutes >= 1 && (
                  <p>{`${timeFormat(elapsedTime.minutes, "minute")} and`}</p>
                )}
                <p>{timeFormat(elapsedTime.seconds, "second")}</p>
              </div>
            ) : (
              <p>Not yet started</p>
            )}
          </div>
          <div className="grid grid-cols-2">
            <p>Status:</p> {isPlaying ? <p>Running</p> : <p>Paused</p>}
          </div>
        </div>
      </div>

      {isDeleting && (
        <div className="px-4 py-5 border border-gray-200 bg-opacity-100 rounded-md absolute inset-0 bg-white">
          <div className="flex-col h-full justify-center items-center">
            <p className="font-bold">
              Are you sure you want to delete this timer?
            </p>
            <div className="h-1" />
            <p className="text-xs text-gray-400">
              The action cannot be undone. This will permanently delete the
              timer.
            </p>
            <div className="h-5" />
            <div className="flex gap-x-2 justify-end">
              <button
                onClick={() => setIsDeleting(false)}
                className="border border-black px-3 py-1 rounded text-sm"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="bg-black text-white px-3 py-1 rounded text-sm"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Timer;
