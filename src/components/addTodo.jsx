import React, { useState } from "react";
import { mainStore } from "../store/mainStore";
import addTodo from "../util/addTodo";

const AddTodo = () => {
  const [inp, setInp] = useState("");
  const handleChange = (e) => {
    setInp(e.currentTarget.value);
  };

  const handleClick = async () => {
    if (inp.trim() !== "") {
      setInp("");
      const result = await addTodo(inp);
      mainStore.getState().setData(result.data);
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
