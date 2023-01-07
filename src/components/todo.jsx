import React from "react";

const Todo = ({ data }) => {
  const handleChange = (e) => {
    console.log(data.id);
  };
  return (
    <div className="todo">
      <p>{data.value}</p>
      <input onChange={handleChange} type="checkbox" />
    </div>
  );
};

export default Todo;
