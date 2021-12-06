import React from "react";

const MovieDetailsBanner = (prop) => {
  return (
    <>
      <div className={prop.title !== "" ? "movie-details" : null}>
        <div className="movie-details__container">
          <img src={prop.poster_path} />
          <div>
            <div className="flex">
              <h2> {prop.title}</h2>
              <span> {prop.vote_average}</span>
            </div>
            <p>{prop.tagline}</p>
            <div className="flex">
              <p> {prop.release_date.slice(0, 4)} </p>
              <p> {prop.runtime} min</p>
            </div>
            <p>{prop.overview}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetailsBanner;
