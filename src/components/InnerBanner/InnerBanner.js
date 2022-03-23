import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchMovieTitleCreator } from "../../store/actionCreators";
import { Link } from "react-router-dom";
import { InnerBannerForm, MovieBanner } from "./styles/MovieBannerStyles";
import { ButtonMain } from "../../styles/global/Buttons";
// import NewMovie from "../NewMovie/NewMovie";

const InnerBanner = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <MovieBanner>
      <InnerBanner>
        <Link to="/add-movie">
          <div className="button-main add-button">Add Movie</div>
        </Link>

        <h1>FIND YOUR MOVIE</h1>
        <InnerBannerForm>
          <input
            type="text"
            placeholder="What do you want to watch"
            onChange={(e) => {
              setSearchTerm(e.target.value);
              console.log(searchTerm);
            }}
            // onChange={(e) => dispatch(searchMovieTitleCreator(e.target.value))}
          />
          <ButtonMain
            onClick={() => {
              dispatch(searchMovieTitleCreator(searchTerm));
            }}
          >
            search
          </ButtonMain>
        </InnerBannerForm>
      </InnerBanner>
    </MovieBanner>
  );
};
export default InnerBanner;
