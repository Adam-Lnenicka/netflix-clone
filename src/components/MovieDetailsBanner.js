import React from "react";

const MovieDetailsBanner = (props) => {
  return (
    <>
      <div className="movie-details">
        <h2> {props.title}</h2>
        <p> {props.year}</p>
        <p>{props.description}</p>
        <img src={props.image} />
      </div>
    </>
  );
};

export default MovieDetailsBanner;
