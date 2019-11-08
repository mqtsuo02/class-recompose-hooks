import React from "react";
import ReactDOM from "react-dom";
import ClassContainer from "./Containers/ClassContainer";
import RecomposeContainer from "./Containers/RecomposeContainer";
import HooksContainer from "./Containers/HooksContainer";

const App = () => (
  <div>
    <h1>Class vs Recompose vs ReactHooks</h1>
    <div
      style={{ width: "100%", display: "flex", justifyContent: "space-around" }}
    >
      <ClassContainer />
      <RecomposeContainer />
      <HooksContainer />
    </div>
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
