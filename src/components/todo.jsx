import React from "react";
import { mainStore } from "../store/mainStore";
import completeTodo from "../util/completeTodo";

const Todo = ({ data, isCompleted }) => {
  const handleChange = async (e) => {
    if (isCompleted) {
      return;
    }
    const result = await completeTodo(data.id, data.value);
    mainStore.getState().setData(result.data);
  };
  return (
    <div className="todo">
      <p>{data.value}</p>
      <input
        onChange={handleChange}
        checked={isCompleted ? true : false}
        type="checkbox"
      />
    </div>
  );
};

export default Todo;
