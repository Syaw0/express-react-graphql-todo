import React, { useRef, useState } from "react";
import Todo from "./todo";

const Dropdown = ({ header, todos, type }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const todoHolder = useRef(null);
  const todoHolderOpening = () => {
    if (isDropdownOpen) {
      todoHolder.current.style.height = "0px";
      setIsDropdownOpen(false);
      return;
    }
    todoHolder.current.style.height = "fit-content";
    setIsDropdownOpen(true);
  };
  return (
    <div className="dropdown">
      <h5 onClick={todoHolderOpening}>{header}</h5>
      <div className="todoHolder" ref={todoHolder}>
        {todos &&
          todos.length != 0 &&
          todos.map((t) => <Todo data={t} isCompleted={type == "completed"} />)}
      </div>
    </div>
  );
};

export default Dropdown;
