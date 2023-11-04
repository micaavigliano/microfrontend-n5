import React from "react";
import ReactDOM from "react-dom";
import { LayoutRm } from "./components/Layout_rm";

import "./index.css";

const App = () => (
  <div className="container">
    <LayoutRm title={"test"} />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
