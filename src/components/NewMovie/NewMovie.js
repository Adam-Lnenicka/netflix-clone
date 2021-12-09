import React, { useState } from "react";

import MovieForm from "./MovieForm";

const NewMovie = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveMovieDataHandler = (enteredMovieData) => {
    const movieData = {
      ...enteredMovieData,
      id: Math.random().toString(),
    };
    props.onAddMovie(movieData);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div>
      <button onClick={startEditingHandler} className="button-main">
        add movie
      </button>
      {isEditing && (
        <MovieForm
          onSaveMovieData={saveMovieDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewMovie;
