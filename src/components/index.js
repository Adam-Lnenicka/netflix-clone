// import React from "react";
// import ReactDOM from "react-dom";
// import { applyMiddleware } from "redux";
// import App from "./App.js";
// import { Provider } from "react-redux";
// import store from "./store";

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById("app")
// );

// applyMiddleware.listen(8080, () => {
//   console.log("app is running in mode: ", process.env.NODE_ENV);
// });

import React from "react";
import { hydrate } from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

const app = <App Router={BrowserRouter} />;

hydrate(app, document.getElementById("root"));
