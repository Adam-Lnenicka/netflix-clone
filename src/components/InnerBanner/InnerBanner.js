import React from "react";
import NewMovie from "../NewMovie/NewMovie";
import { useDispatch } from "react-redux";

const InnerBanner = (prop) => {
  const dispatch = useDispatch();
  return (
    <div className="inner-banner">
      <NewMovie onAddMovie={prop.onAddMovie} close={prop.close} />
      <h1>FIND YOUR MOVIE</h1>
      <div className="inner-banner__form">
        <input
          type="text"
          placeholder="What do you want to watch"
          value={prop.searchTerm}
          onInput={prop.searchTermHandler}
        />
        <button className="button-main" onClick={prop.submitFunction}>
          search
        </button>
      </div>
    </div>
  );
};
export default InnerBanner;
