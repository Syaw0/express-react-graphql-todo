import React, { useEffect, useState } from "react";
import Dropdown from "./components/dropdown";

import globalStyle from "./styles/global";

const App4 = () => {
  globalStyle();

  return (
    <div id="holder">
      <h3> SIMPLE TODO LIST WITH (EXPRESS , REACT , GRAPHQL)</h3>
      <Dropdown
        header="in progress"
        type="notCompleted"
        todos={[{ todo: "bela" }]}
      />

      <Dropdown
        header="completed"
        type="completed"
        todos={[{ todo: "bela" }]}
      />
    </div>
  );
};

export default App4;
