import React from "react";

export default function MoviesListLocation({ movies }) {
  const movieList = movies.map((movie) => (
    <li key={movie.id}>{movie.title}</li>
  ));
  return <ul>{movieList}</ul>;
}
