import React, { useRef, useState } from "react";
import ChevronDown from "../icons/chevronDown";
import { raiseDownHeight, raiseUpHeight } from "../styles/keyframes";
import Todo from "./todo";

const Dropdown = ({ header, todos, type }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const todoHolder = useRef(null);
  const todoHolderOpening = () => {
    if (isDropdownOpen) {
      todoHolder.current.style.animation = `${raiseDownHeight} 0.5s ease both`;

      setIsDropdownOpen(false);
      return;
    }
    todoHolder.current.style.animation = `${raiseUpHeight} 0.5s ease both`;

    setIsDropdownOpen(true);
  };
  return (
    <div className="dropdown">
      <p onClick={todoHolderOpening}>
        {header}{" "}
        <ChevronDown isReverse={isDropdownOpen} width="20" height="20" />
      </p>
      <div className="todoWrapper">
        <div className="todoHolder" ref={todoHolder}>
          {todos &&
            todos.length != 0 &&
            todos.map((t, i) => (
              <Todo
                key={t.id}
                data={t}
                id={t.id}
                isCompleted={type == "completed"}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
