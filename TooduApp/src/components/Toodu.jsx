import React, { useState } from "react";
import style from "./Toodu.module.css";

// react icon
import { FaCheckCircle } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";

const Toodu = () => {
  const [inputValue, setInputValue] = useState("");
  const [task, setTask] = useState([]);
  const [dateTime, setDateTime] = useState("");

  setInterval(() => {
    const localDate = new Date().toLocaleDateString();
    const localTime = new Date().toLocaleTimeString();
    setDateTime(`${localDate} - ${localTime}`);
  }, 1000);

  const hendaleOnSubmit = (e) => {
    e.preventDefault();

    if (!inputValue) return;
    setTask((prevTask) => [...prevTask, inputValue]);
    setInputValue("");
  };

  return (
    <div className={style.container}>
      <div className={style.innerContainer}>
        <h1>Toodu App</h1>
        <h2>Data And Time</h2>
        <p>{dateTime}</p>
        <form onSubmit={hendaleOnSubmit}>
          <input
            type="text"
            placeholder="Enter Your Toodu"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button className={style.submitBtn}>Submit</button>
        </form>
        <ul>
          {task.map((currElm, index) => {
            return (
              <li key={index}>
                <span className={style.todoList}>{currElm}</span>
                <button className={style.btnCheck}>
                  <FaCheckCircle />
                </button>
                <button className={style.btnDelete}>
                  <MdOutlineDelete />
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Toodu;
