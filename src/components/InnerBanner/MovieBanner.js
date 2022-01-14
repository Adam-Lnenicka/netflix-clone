import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";

const moviesData = [
  {
    name: "Lawn Mowing",
    price: 30,
    id: 1,
    description: "Have a carpet-like lawn without any work.",
  },
  {
    name: "Leaf Raking",
    price: 50,
    id: 2,
    description: "Remove those pesky dead tree parts from your property.",
  },
  {
    name: "Weeding",
    price: 50,
    id: 337167,
    description: "Don't let the invaders ruin your yard.",
  },
  {
    name: "Sprinkler repair",
    price: 100,
    id: 4,
    description: "Keep your irrigation system top-notch.",
  },
];

const MovieBanner = () => {
  const { movieId } = useParams();
  // const movieId = 3;

  // const thismovie = moviesData.find((movie) => movie.id == movieId);

  const apiMoviesArraySelector = useSelector((state) => state.movies);

  const thismovie = apiMoviesArraySelector.map((movie) =>
    movie.find((movie) => movie.id == movieId)
  );

  return (
    <div className="movie-details__container">
      <p>{thismovie.id}</p>
      <p>{thismovie.map((m) => m.id)}</p>
      <p>{thismovie.map((m) => m.poster_path)}</p>
      {console.log(`movieId ${thismovie.map((m) => m)} hello`)}
      bhjbj
      <br />
      <br />
      <br />
      {/* {movieId} */}
      {/* <h3>{thismovie.id} </h3>
      <h3>{thismovie.poster_path} </h3> */}
      {/* <img
        src={prop.poster_path}
        alt={prop.title}
        onError={() => prop.broken}
      />
      <div>
        <div className="flex">
          <h2> {prop.title}</h2>
          <span> {prop.vote_average}</span>
        </div>
        <p>{prop.tagline}</p>
        <div className="flex movie-details__date-runtime">
          <p> {prop.release_date.slice(0, 4)} </p>
          <p> {prop.runtime}</p>
        </div>
        <p>{prop.overview}</p>
      </div> */}
    </div>
  );
};

export default MovieBanner;
