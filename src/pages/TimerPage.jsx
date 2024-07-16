import React, { useState, useRef } from "react";
import Timer from "../components/Timer";
import { MdOutlineTimer } from "react-icons/md";
import { IoIosCloseCircle } from "react-icons/io";
import { v4 as uuidv4 } from "uuid";

const TimerPage = () => {
  const [timers, setTimers] = useState([]);

  const inputRef = useRef();
  const dialogRef = useRef();

  const handleAddNewTimer = () => {
    const newTimer = { id: uuidv4(), name: inputRef.current.value };
    setTimers((prevTimers) => [...prevTimers, newTimer]);
    inputRef.current.value = "";
    closeFormModal();
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

  const handleDeleteTimer = (id) => {
    setTimers((prevTimers) => prevTimers.filter((timer) => timer.id != id));
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    handleAddNewTimer();
  };

  return (
    <div className="min-h-[90vh] relative p-3">
      {timers.length == 0 ? (
        <div className="flex justify-center h-[85vh] items-center">
          <p>Add timers to get started!</p>
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
                name={timer.name}
                handleDelete={() => handleDeleteTimer(timer.id)}
              />
            );
          })}
        </div>
      )}

      {/*Floating Button */}
      <button
        onClick={toggleFormModal}
        className={`${
          isModalOpen ? "invisible" : "visible"
        } flex items-center gap-x-1 bg-black text-white px-3 py-1 text-base font-light rounded-lg fixed bottom-3 right-3 hover:bg-gray-500 shadow-md transition duration-200`}
      >
        <MdOutlineTimer size={20} />
        <p>Add Timer</p>
      </button>

      {/*Modal Form*/}

      <dialog ref={dialogRef} className="bg-white bg-opacity-0 h-full w-full ">
        <div className="flex justify-center items-center h-full ">
          <form
            onSubmit={(e) => handleSubmitForm(e)}
            className="border bg-white border-gray-200 w-72 px-4 py-5 rounded-md shadow-md "
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
                className="border border-gray-200 rounded p-2 text-sm"
                placeholder="Enter a name for your timer"
              />
            </div>
            <div className="h-7" />
            <div className=" flex justify-center">
              <button
                type="submit"
                className="bg-black px-3 py-1 text-white rounded-lg"
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
