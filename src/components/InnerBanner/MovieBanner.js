import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const MovieBanner = () => {
  const { movieId } = useParams();
  const apiMoviesArraySelector = useSelector((state) => state.movies);
  const thismovie = apiMoviesArraySelector.map((movie) =>
    movie.find((movie) => movie.id == movieId)
  );

  return (
    <div className="movie-details__container">
      <img
        src={thismovie.map((m) => m.poster_path)}
        alt={thismovie.map((m) => m.title)}
        onError={(e) =>
          (e.target.src =
            "https://images.unsplash.com/photo-1560109947-543149eceb16?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80")
        }
      />
      <div>
        <div className="flex">
          <Link to="/" className="exit-button">
            X
          </Link>
          <h2> {thismovie.map((m) => m.title)}</h2>
          <span> {thismovie.map((m) => m.vote_average)}</span>
        </div>
        <p>{thismovie.map((m) => m.tagline)}</p>
        <div className="flex movie-details__date-runtime">
          <p> {thismovie.map((m) => m.release_date).slice(0, 4)} </p>
          <p> {thismovie.map((m) => m.runtime)}</p>
        </div>
        <p>{thismovie.map((m) => m.overview)}</p>
      </div>
    </div>
  );
};

export default MovieBanner;
