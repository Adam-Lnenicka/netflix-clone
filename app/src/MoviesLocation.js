import React, { useEffect } from "react";
import { useApiMoviesArraySelector } from "./store/selectors";
import { useLocation } from "react-router-dom";
import MoviesListLocation from "./components/MoviesListLocation";

const movies = [
  { title: "harry potter", id: 1, genre: "fantasy", vote_average: 1 },
  { title: "skyfall", id: 2, genre: "horror", vote_average: 8 },
  { title: "black panther", id: 3, genre: "comedy", vote_average: 7 },
];

const MoviesLocation = () => {
  const location = useLocation();
  const apiMoviesArray = useApiMoviesArraySelector();

  return (
    <>
      <h2>movies</h2>
    </>
  );
};

export default MoviesLocation;