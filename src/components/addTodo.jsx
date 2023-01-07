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
    <div id="addTodo">
      <label htmlFor="inp">Write New Todo</label>
      <input id="inp" type="text" value={inp} onChange={handleChange} />
      <button type="button" onClick={handleClick}>
        ADD TODO
      </button>
    </div>
  );
};

export default AddTodo;
