import { useState, useEffect } from "react";
import { useManageTimers } from "./useManageTimer";

const getCurrentTime = () => {
  const now = new Date();

  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const amORpm = hours < 12 ? "AM" : "PM";

  let currentTime;
  if (hours > 12) {
    currentTime = `${padStartFormat(hours - 12)}:${padStartFormat(
      minutes
    )} ${amORpm}`;
  } else {
    currentTime = `${padStartFormat(hours)}:${padStartFormat(
      minutes
    )} ${amORpm}`;
  }

  return currentTime;
};

//Helpers
const padStartFormat = (value) => {
  //Function for putting a 0 start whenever a time is a single digit
  //Ex: 1 -> 01, 24 -> 24

  if (!value) return "00";
  return value.toString().padStart(2, "0");
};

const timeFormat = (value, suffixText) => {
  //Add a "s" when the time is greater than 1
  // 1 -> second, 3 -> seconds
  if (value > 1) return `${value} ${suffixText + "s"}`;
  return `${value} ${suffixText}`;
};

export function useTimer(timer) {
  const { timers, setTimers } = useManageTimers();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isStarted, setIsStarted] = useState(timer.isStarted);
  const [elapsedTime, setElapsedTime] = useState(timer.elapsedTime);
  const [timeStarted, setTimeStarted] = useState(timer.timeStarted);

  const handleAddSecond = () => {
    setElapsedTime((prevTime) => {
      return { ...prevTime, seconds: prevTime.seconds + 1 };
    });
  };

  const handleAddMinute = () => {
    setElapsedTime((prevTime) => {
      return { ...prevTime, seconds: 0, minutes: prevTime.minutes + 1 };
    });
  };

  const handleAddHour = () => {
    setElapsedTime((prevTime) => {
      return { ...prevTime, minutes: 0, hours: prevTime.hours + 1 };
    });
  };

  const handlePlay = () => {
    if (!isStarted) {
      handleStartTime();
    }

    setIsPlaying((prev) => !prev);
  };

  const handleStartTime = () => {
    const startingTime = getCurrentTime();

    const updatedTimers = timers.map((t) => {
      return t.id == timer.id
        ? { ...timer, timeStarted: startingTime, isStarted: true }
        : timer;
    });

    localStorage.setItem("timers", JSON.stringify(updatedTimers));
    setTimers(updatedTimers);

    setTimeStarted(startingTime);
    setIsStarted(true);
  };

  const handleResetTimer = () => {
    const updatedTimers = timers.map((t) => {
      return t.id == timer.id
        ? {
            ...timer,
            elapsedTime: { hours: 0, minutes: 0, seconds: 0 },
            isStarted: false,
            timeStarted: "",
          }
        : timer;
    });
    localStorage.setItem("timers", JSON.stringify(updatedTimers));
    setTimers(updatedTimers);
    setIsPlaying(false);

    //Resetting everything
    setElapsedTime({ hours: 0, minutes: 0, seconds: 0 });
    setIsStarted(false);
    setTimeStarted("");
  };

  //Incrementing the timer
  useEffect(() => {
    let intervalId;
    if (isPlaying) {
      intervalId = setInterval(() => handleAddSecond(), 1000);

      if (elapsedTime.seconds == 60) {
        handleAddMinute();
      }

      if (elapsedTime.minutes == 60) {
        handleAddHour();
      }

      const updatedTimers = timers.map((t) =>
        t.id == timer.id
          ? {
              ...t,
              elapsedTime: {
                hours: elapsedTime.hours,
                minutes: elapsedTime.minutes,
                seconds: elapsedTime.seconds,
              },
            }
          : t
      );
      localStorage.setItem("timers", JSON.stringify(updatedTimers));
      setTimers(updatedTimers);
    }

    return () => clearInterval(intervalId);
  }, [elapsedTime, isPlaying]);

  return {
    isPlaying,
    elapsedTime,
    timeStarted,
    isStarted,
    handlePlay,
    handleResetTimer,
    handleAddSecond,
    handleAddMinute,
    handleAddHour,
    //Helpers
    padStartFormat,
    timeFormat,
  };
}
