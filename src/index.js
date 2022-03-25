import React from "react";
import ReactDOM from "react-dom";
import { applyMiddleware } from "redux";
import App from "./App.js";
import { Provider } from "react-redux";
import store from "./store";
import { GlobalStyles } from "./styles/global/Global.Styles.js";

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyles />
    <App />
  </Provider>,
  document.getElementById("app")
);

applyMiddleware.listen(8080, () => {
  console.log("app is running in mode: ", process.env.NODE_ENV);
});
