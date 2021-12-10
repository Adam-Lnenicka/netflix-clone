import React from "react";
import ReactDOM from "react-dom";
import { applyMiddleware } from "redux";
import App from "./App.js";

ReactDOM.render(<App />, document.getElementById("app"));

applyMiddleware.listen(8080, () => {
  console.log("app is running in mode: ", process.env.NODE_ENV);
});
