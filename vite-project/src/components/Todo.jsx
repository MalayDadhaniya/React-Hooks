import React, { useState } from "react";
import "./Todo.css";

const Todo = () => {
  const [inputValue, setInputValue] = useState("");
  const [task, setTask] = useState([]);
  const [checkedState, setCheckedState] = useState({});

  // add task
  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (!inputValue) {
      return;
    } else {
      if (task.includes(inputValue)) {
        setInputValue("");
        return;
      } else {
        setTask((prev) => [...prev, inputValue]);
      }
      setInputValue("");
    }
  };

  // delete task
  const handleOnDelete = (currElem) => {
    const updatedTask = task.filter((item) => item !== currElem);
    const updatedCheckedState = { ...checkedState };
    delete updatedCheckedState[currElem];
    setTask(updatedTask);
    setCheckedState(updatedCheckedState);
  };

  // complete task
  const handleOnComplete = (currElem) => {
    setCheckedState((prevState) => ({
      ...prevState,
      [currElem]: !prevState[currElem], // Toggle completion for this task
    }));
  };

  return (
    <div className="mainContainer">
      <h1>Todo APP</h1>
      <div className="innerContainer">
        <form onSubmit={handleOnSubmit}>
          <input
            type="text"
            placeholder="Enter Todo"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
        <div className="todos">
          {task.map((currElem, index) => {
            return (
              <div key={index} className="todoItems">
                <span className={checkedState[currElem] ? "ch" : "notCh"}>
                  {currElem}
                </span>
                <div className="btns">
                  <button onClick={() => handleOnComplete(currElem)}>
                    {checkedState[currElem] ? "Undo" : "Complete"}
                  </button>
                  <button onClick={() => handleOnDelete(currElem)}>
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
          <button onClick={() => setTask([])}>Clear All</button>
        </div>
      </div>
    </div>
  );
};

export default Todo;
