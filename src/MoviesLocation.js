import React, { useEffect } from "react";
import { useApiMoviesArraySelector } from "./store/selectors";
import { useLocation } from "react-router-dom";
import MoviesListLocation from "./components/MoviesListLocation";

const movies = [
  { title: "harry potter", id: 1, genre: "fantasy", rating: 35 },
  { title: "skyfall", id: 2, genre: "horror", rating: 24 },
  { title: "black panther", id: 3, genre: "comedy", rating: 18 },
];

const MoviesLocation = () => {
  const location = useLocation();

  const query = new URLSearchParams(location.search);
  const genre = query.get("");
  const rating = query.get("rating");
  let filteredMovies = genre ? movies.filter((u) => u.genre === genre) : movies;
  filteredMovies = rating
    ? filteredMovies.filter((u) => u.rating >= rating)
    : filteredMovies;

  return (
    <>
      <h2>movies</h2>
      <MoviesListLocation movies={filteredMovies}></MoviesListLocation>
    </>
  );
};

export default MoviesLocation;
