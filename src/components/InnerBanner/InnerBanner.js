import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchMovieTitleCreator } from "../../store/actionCreators";
import { Link } from "react-router-dom";
// import NewMovie from "../NewMovie/NewMovie";

const InnerBanner = () => {
  // const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const onClick = () => {};
  return (
    <div className="banner">
      <div className="inner-banner">
        {/* <Link to="/add-movie">
          <div className="button-main add-button">Add Movie</div>
        </Link> */}

        <h1>FIND YOUR MOVIE</h1>
        <div className="inner-banner__form">
          <input
            type="text"
            className="input-box"
            placeholder="What do you want to watch"
            onChange={(e) => {
              setSearchTerm(e.target.value);
              console.log(searchTerm);
            }}
            // onChange={(e) => dispatch(searchMovieTitleCreator(e.target.value))}
          />
          <button
            className="button-main"
            data-test="submit-button"
            onClick={() => {
              // dispatch(searchMovieTitleCreator(searchTerm));
            }}
          >
            search
          </button>
        </div>
      </div>
    </div>
  );
};
export default InnerBanner;
