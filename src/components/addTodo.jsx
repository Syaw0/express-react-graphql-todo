import React, { useState } from "react";

const AddTodo = () => {
  const [inp, setInp] = useState("");
  const handleChange = (e) => {
    setInp(e.currentTarget.value);
  };

  const handleClick = () => {
    if (inp.trim() !== "") {
      // add todo
    }
  };

  return (
    <>
      <label htmlFor="inp">new todo</label>
      <input id="inp" type="text" value={inp} onChange={handleChange} />
      <button type="button" onClick={handleClick}>
        add TODO
      </button>
    </>
  );
};

export default AddTodo;
