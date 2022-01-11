import React from "react";
import { useDispatch } from "react-redux";
import { searchMovieTitle } from "../../store/actionCreators";
import { Link } from "react-router-dom";
// import NewMovie from "../NewMovie/NewMovie";

const InnerBanner = () => {
  const dispatch = useDispatch();
  return (
    <div className="inner-banner">
      <Link to="/add-movie">
        <div className="button-main">Add Movie</div>
      </Link>

      <h1>FIND YOUR MOVIE</h1>
      <div className="inner-banner__form">
        <input
          type="text"
          placeholder="What do you want to watch"
          onChange={(e) => dispatch(searchMovieTitle(e.target.value))}
        />
        <button className="button-main">search</button>
      </div>
    </div>
  );
};
export default InnerBanner;
