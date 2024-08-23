import React, { useState, useRef, useEffect } from "react";
import Timer from "../components/Timer";
import { MdOutlineTimer } from "react-icons/md";
import { IoIosCloseCircle } from "react-icons/io";
import { TbClockPlus } from "react-icons/tb";

import { FaLeaf } from "react-icons/fa";
import { useManageTimers } from "../customHooks/useManageTimer";
import { useGlobalContext } from "../provider/Provider";

const TimerPage = () => {
  const { timers, setTimers, handleAddNewTimer, handleDeleteTimer } =
    useManageTimers();
  const { theme } = useGlobalContext();

  const inputRef = useRef();
  const dialogRef = useRef();

  //CRUD [Create, Delete] Operations
  const handleClickAddNewTimer = () => {
    //Get the name from the input
    const name = inputRef.current.value;

    if (!name) {
      alert("Please enter required fields.");
      return;
    }

    //Perform addition of timers
    handleAddNewTimer(name);

    //Reset
    //Clear input field and close the modal
    inputRef.current.value = "";
    closeFormModal();
  };

  const handleClickDeleteTimer = (id) => {
    handleDeleteTimer(id);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    handleClickAddNewTimer();
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleFormModal = () => {
    dialogRef.current.hasAttribute("open") ? closeFormModal() : openFormModal();
  };

  const openFormModal = () => {
    dialogRef.current.showModal();
    setIsModalOpen(true);
  };

  const closeFormModal = () => {
    dialogRef.current.close();
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-[90vh] w-full relative">
      {/*Floating Button */}
      <div className="z-50 flex justify-end shadow-lg">
        <button
          onClick={toggleFormModal}
          className={`${isModalOpen ? "invisible" : "visible"} ${
            theme === "dark" ? "bg-white" : "bg-black"
          } flex items-center gap-x-1  text-white p-4 text-base font-light rounded-lg fixed bottom-3 z-50  hover:bg-gray-500  transition duration-200`}
        >
          <TbClockPlus
            size={30}
            color={`${theme === "dark" ? "black" : "white"}`}
          />
        </button>
      </div>

      <div className="p-3 mt-5">
        {timers.length == 0 ? (
          <div className="flex justify-center h-[85vh] items-center">
            <p className={`${theme === "dark" ? "text-white" : "text-black"}`}>
              Add timers to get started!
            </p>
          </div>
        ) : (
          <div
            className={`${
              isModalOpen ? "hidden" : "block"
            } grid grid-cols-1 gap-2 min-[650px]:grid-cols-2 min-[1000px]:grid-cols-3`}
          >
            {timers.map((timer) => {
              return (
                <Timer
                  key={timer.id}
                  handleDelete={() => handleClickDeleteTimer(timer.id)}
                  timers={timers}
                  componentTimer={timer}
                />
              );
            })}
          </div>
        )}
      </div>

      {/*Modal Form*/}

      <dialog ref={dialogRef} className="w-full h-full bg-white bg-opacity-0 ">
        <div className="flex items-center justify-center h-full ">
          <form
            onSubmit={(e) => handleSubmitForm(e)}
            className="px-4 py-5 bg-white border border-gray-200 rounded-md shadow-md w-72 "
          >
            <div className="flex justify-end">
              <button type="button" onClick={toggleFormModal}>
                <IoIosCloseCircle size={25} />
              </button>
            </div>
            <p className="text-2xl font-bold">Set Up Timer</p>
            <p className="text-sm text-gray-600">Configure your new timer.</p>
            <div className="h-10" />
            <div className="flex flex-col gap-y-1">
              <label className="text-sm font-medium">Timer Name</label>
              <input
                ref={inputRef}
                className="p-2 text-sm border border-gray-200 rounded"
                placeholder="Enter a name for your timer"
              />
            </div>
            <div className="h-7" />
            <div className="flex justify-center ">
              <button
                type="submit"
                className="px-3 py-1 text-white bg-black rounded-lg"
              >
                Add Timer
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default TimerPage;
