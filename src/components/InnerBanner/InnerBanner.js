import React from "react";
import NewMovie from "../NewMovie/NewMovie";
import { useDispatch, useSelector } from "react-redux";

const InnerBanner = (prop) => {
  const dispatch = useDispatch();
  const searchFilter = useSelector;
  return (
    <div className="inner-banner">
      <NewMovie onAddMovie={prop.onAddMovie} close={prop.close} />
      <h1>FIND YOUR MOVIE</h1>
      <div className="inner-banner__form">
        <input type="text" placeholder="What do you want to watch" />
        <button className="button-main">search</button>
      </div>
    </div>
  );
};
export default InnerBanner;
