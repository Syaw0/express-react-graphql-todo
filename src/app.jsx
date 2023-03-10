import React, { useEffect, useState } from "react";
import AddTodo from "./components/addTodo";
import Dropdown from "./components/dropdown";
import { mainStore } from "./store/mainStore";

import globalStyle from "./styles/global";
import getTodo from "./util/getTodo";

const App = () => {
  globalStyle();

  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const data = mainStore((state) => state.data);
  const setData = mainStore((state) => state.setData);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const { data } = await getTodo();
    setData(data);
    setIsDataLoaded(true);
  };
  return (
    <div id="holder">
      <h3> SIMPLE TODO LIST WITH (EXPRESS , REACT , GRAPHQL)</h3>

      {!isDataLoaded ? (
        <p>LOADING DATA ...</p>
      ) : (
        <>
          {" "}
          <AddTodo />
          <Dropdown
            header="in progress"
            type="notCompleted"
            todos={data["inProgress"]}
          />
          <Dropdown
            header="completed"
            type="completed"
            todos={data["completed"]}
          />
        </>
      )}
    </div>
  );
};

export default App;
