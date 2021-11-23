import React from "react";
import ReactDOM from "react-dom";
import { applyMiddleware } from "redux";
import App from "./App.js";

ReactDOM.render(<App />, document.getElementById("app"));

applyMiddleware.listen(3000, () => {
  console.log("app is running in mode: ", process.env.REACT_APP_BASE_URL);
});
