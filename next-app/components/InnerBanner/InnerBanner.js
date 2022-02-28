import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Link from "next/link";

import { searchMovieTitleCreator } from "../../store/actionCreators";

const InnerBanner = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="banner">
      <div className="inner-banner">
        <Link href="/add-movie">
          <a>
            <div className="button-main add-button">Add Movie</div>
          </a>
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
          <button
            className="button-main"
            onClick={() => {
              dispatch(searchMovieTitleCreator(searchTerm));
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
