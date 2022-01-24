import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchMovieTitleCreator } from "../../store/actionCreators";
import { Link } from "react-router-dom";
import { exact } from "prop-types";
// import NewMovie from "../NewMovie/NewMovie";

const InnerBanner = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const [value, setValue] = useState("");

  return (
    <div className="banner">
      <div className="inner-banner">
        <Link to="/add-movie">
          <div className="button-main add-button">Add Movie</div>
        </Link>

        <h1>FIND YOUR MOVIE</h1>
        <div className="inner-banner__form">
          <input
            type="text"
            placeholder="What do you want to watch"
            onChange={(e) => {
              setSearchTerm(e.target.value);
              console.log(searchTerm);
            }}
            // onChange={(e) => dispatch(searchMovieTitleCreator(e.target.value))}
          />
          <Link
            className="button-main"
            to={`/movies?name=${searchTerm}&ganra=${value}`}
          >
            search
          </Link>
          <div className="filter-navigation">
            {["all", "drama", ...ect].map((ganra) => <button classNmame="" onClick={() => setValue(ganra)}>{ganra}</button>)}

          </div>
        </div>
      </div>
    </div>
  );
};
export default InnerBanner;
