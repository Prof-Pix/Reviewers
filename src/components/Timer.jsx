import React, { useEffect, useState } from "react";
import { FaPauseCircle, FaPlayCircle, FaSearch } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

import { IoMdArrowDropdownCircle, IoMdArrowDropupCircle } from "react-icons/io";

const Timer = ({ name, handleDelete }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const [time, setTime] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [startTime, setStartTime] = useState(null);

  const [isStarted, setIsStarted] = useState(false);

  const [isMoreInfoOpen, setIsMoreInfoOpen] = useState(false);

  const [isDeleting, setIsDeleting] = useState(false);

  const handleAddSecond = () => {
    setTime((prevTime) => {
      return { ...prevTime, seconds: prevTime.seconds + 1 };
    });
  };

  const handleAddMinute = () => {
    setTime((prevTime) => {
      return { ...prevTime, seconds: 0, minutes: prevTime.minutes + 1 };
    });
  };

  const handleAddHour = () => {
    setTime((prevTime) => {
      return { ...prevTime, minutes: 0, hours: prevTime.hours + 1 };
    });
  };

  const handlePlay = () => {
    setIsPlaying((prev) => !prev);
    setIsStarted(true);

    if (!startTime) {
      handleStartTime();
    }
  };

  const timeFormat = (value, suffixText) => {
    if (value > 1) return `${value} ${suffixText + "s"}`;
    return `${value} ${suffixText}`;
  };

  const padStartFormat = (value) => {
    return value.toString().padStart(2, "0");
  };

  const handleStartTime = () => {
    const now = new Date();

    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const amORpm = hours < 12 ? "AM" : "PM";

    setStartTime(
      `${padStartFormat(hours - 12)}:${padStartFormat(minutes)} ${amORpm}`
    );
  };

  const toggleDelete = () => {
    setIsDeleting((prev) => !prev);
  };

  useEffect(() => {
    let intervalId;
    if (isPlaying) {
      intervalId = setInterval(() => handleAddSecond(), 1000);
    }

    if (time.seconds == 60) {
      handleAddMinute();
    }

    if (time.minutes == 60) {
      handleAddHour();
    }

    return () => clearInterval(intervalId);
  }, [time, isPlaying]);

  return (
    <div className="border-2 py-4 px-2 rounded-md relative">
      <div className=" flex flex-col items-center">
        <div className="w-full justify-end flex gap-x-1">
          <button onClick={() => setIsMoreInfoOpen((prev) => !prev)}>
            {isMoreInfoOpen ? (
              <IoMdArrowDropupCircle size={25} />
            ) : (
              <IoMdArrowDropdownCircle size={25} />
            )}
          </button>
        </div>
        <div className="h-10" />
        <div className="flex gap-x-1 font-bold text-4xl min-[350px]:text-5xl">
          <div>
            <p>{time.hours.toString().padStart(2, "0")}</p>
          </div>
          <div>
            <p>:</p>
          </div>
          <div>
            <p>{time.minutes.toString().padStart(2, "0")}</p>
          </div>
          <div>
            <p>:</p>
          </div>
          <div>
            <p>{time.seconds.toString().padStart(2, "0")}</p>
          </div>
        </div>
        <div className="h-4" />

        <div>
          <p className="text-lg font-medium">{name}</p>
        </div>
        <div className="h-4" />

        <div className="flex items-center gap-x-20">
          <button onClick={handlePlay}>
            {isPlaying ? (
              <FaPauseCircle size={40} />
            ) : (
              <FaPlayCircle size={40} />
            )}
          </button>
          <button onClick={toggleDelete}>
            <MdDelete size={43} color="red" enableBackground={true} />
          </button>
        </div>
        <div
          className={`${
            isMoreInfoOpen ? "block" : "hidden"
          } w-full border-t border-t-gray-200 text-gray-500 text-sm px-2 py-2 flex flex-col gap-y-1 pt-3 mt-2`}
        >
          <div className="grid grid-cols-2">
            <p>Start Time: </p>
            {isStarted ? <p>{startTime}</p> : <p>Not yet started</p>}
          </div>
          <div className="grid grid-cols-2">
            <p>Time Elapsed: </p>
            {isStarted ? (
              <div>
                {time.hours >= 1 && (
                  <p>{`${timeFormat(time.hours, "hour")} and`}</p>
                )}
                {time.minutes >= 1 && (
                  <p>{`${timeFormat(time.minutes, "minute")} and`}</p>
                )}
                <p>{timeFormat(time.seconds, "second")}</p>
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
          <div className="flex-col h-full justify-center items-center translate-y-[15%]">
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
