import React, { useEffect } from "react";
import "./styles/index.scss";
import Home from "./pages/Home";
import { Route, Routes, BrowserRouter as Router, Link } from "react-router-dom";
import EditMovie from "./components/FormikMovieForms/EditMovie";
import FormikAddMovie from "./components/FormikMovieForms/FormikAddMovie";
import { useDispatch } from "react-redux";
import { loadMoviesThunk } from "./store/thunk";
import Error404 from "./components/404/Error404";
import MovieBanner from "./components/InnerBanner/MovieBanner";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadMoviesThunk());
  }, []);
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/add-movie" element={<FormikAddMovie />} />
          <Route path="/edit-movie" element={<EditMovie />} />
          <Route path="/movie/:movieId" element={<MovieBanner />} />
          <Route path="*" element={<Error404 />} />

          {/* <Link to={`/movie/${prop.id}`}>Profile Info</Link> */}
        </Routes>
      </Router>
    </>
  );
};

export default App;
