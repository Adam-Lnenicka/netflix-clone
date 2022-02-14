import React, { useEffect } from "react";
import "./styles/index.scss";
import Home from "./pages/Home";
import { Route, Routes, BrowserRouter as Router, Link } from "react-router-dom";
import EditMovie from "./components/FormikMovieForms/EditMovie";
import FormikAddMovie from "./components/FormikMovieForms/FormikAddMovie";
import { Provider, useDispatch } from "react-redux";
import { loadMoviesThunk } from "./store/thunk";
import Error404 from "./components/404/Error404";
import MoviePage from "./pages/MoviePage/MoviePage";

const App = ({ location, context, store }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadMoviesThunk());
  }, []);
  return (
    <Provider store={store}>
      <Router
        location={location}
        context={context}
        basename={process.env.NODE_ENV === "production" ? "/Movie-app" : ""}
      >
        {" "}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/add-movie" element={<FormikAddMovie />} />
          <Route path="/edit-movie" element={<EditMovie />} />
          <Route path="/movie/:movieId" element={<MoviePage />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
