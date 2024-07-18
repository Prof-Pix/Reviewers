import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export function useManageTimers() {
  const [timers, setTimers] = useState(
    JSON.parse(localStorage.getItem("timers")) || []
  );

  const handleAddNewTimer = (name) => {
    const newTimer = {
      id: uuidv4(),
      name: name,
      elapsedTime: {
        hours: 0,
        minutes: 0,
        seconds: 0,
      },
      isStarted: false,
      timeStarted: "",
    };
    setTimers((prevTimers) => {
      const updatedTimers = [...prevTimers, newTimer];
      localStorage.setItem("timers", JSON.stringify(updatedTimers));
      return updatedTimers;
    });
  };

  const handleDeleteTimer = (id) => {
    setTimers((prevTimers) => {
      const updatedTimers = prevTimers.filter((timer) => timer.id != id);
      localStorage.setItem("timers", JSON.stringify(updatedTimers));
      return updatedTimers;
    });
  };

  return { timers, setTimers, handleAddNewTimer, handleDeleteTimer };
}
