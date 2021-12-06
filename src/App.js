import React from "react";
import "./styles/index.scss";
import Home from "./pages/Home";
import { Route, Routes, BrowserRouter as Router, Link } from "react-router-dom";
import EditMovie from "./components/EditMovie";
import FormikAddMovie from "./components/FormikAddMovie";

const App = () => {
  return (
    <>
      {/* <Home /> */}

      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/add-movie">Add Movie</Link>
            </li>
            <li>
              <Link to="/edit-movie">Edit Movie</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/add-movie" element={<FormikAddMovie />} />
          <Route path="/edit-movie" element={<EditMovie />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
