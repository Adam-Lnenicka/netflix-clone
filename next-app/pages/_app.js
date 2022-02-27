import { Provider, useDispatch } from "react-redux";
import "../styles/globalStyles.scss";
import store from "../store";
import { useEffect } from "react";
import { loadMoviesThunk } from "../store/thunk";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
