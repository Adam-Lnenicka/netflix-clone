import React from "react";

import MovieForm from "./MovieForm";

const NewMovie = (props) => {
  const saveMovieDataHandler = (enteredMovieData) => {
    const movieData = {
      ...enteredMovieData,
      id: Math.random().toString(),
    };
    props.onAddMovie(movieData);
  };

  return (
    <div>
      <MovieForm onSaveMovieData={saveMovieDataHandler} />
    </div>
  );
};

export default NewMovie;
