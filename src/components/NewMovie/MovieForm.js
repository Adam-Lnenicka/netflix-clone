import React, { useState } from "react";

const MovieForm = (props) => {
  const [userInput, setUserInput] = useState({
    title: "",
    release_date: "",
    poster_path: "",
    genres: "",
    overview: "",
    runtime: "",
  });

  const handleTitleChange = (event) => {
    setUserInput((values) => ({
      ...values,
      title: event.target.value,
    }));
  };

  const handleReleaseDateChange = (event) => {
    setUserInput((values) => ({
      ...values,
      releaseDate: event.target.value,
    }));
  };

  const handleMovieUrlChange = (event) => {
    setUserInput({
      ...userInput,
      poster_path: event.target.value,
    });
  };

  const handleOverviewChange = (event) => {
    setUserInput((userInput) => ({
      ...userInput,
      overview: event.target.value,
    }));
  };

  const handleRuntimeChange = (event) => {
    setUserInput((userInput) => ({
      ...userInput,
      runtime: event.target.value,
    }));
  };

  const submitHandler = (event) => {
    event.preventDefault();

    props.onSaveMovieData(userInput);
    // setTitle("");
    // setPosterPath("");
  };

  return (
    <div className="form">
      <h1>Add Movie</h1>

      <form onSubmit={submitHandler} className="form__content">
        <div className="form__contact-field-box">
          <div className="new-expense__control">
            <label>title</label>
            <br />

            <input
              type="text"
              className="form__input"
              placeholder="Title"
              value={userInput.title}
              onChange={handleTitleChange}
            />
          </div>

          <label htmlFor="release_date">Release Date</label>
          <br />

          <input
            type="text"
            name="release-date"
            id="title"
            className="form__input"
            placeholder="Release Date"
            value={userInput.releaseDate}
            setValue={handleReleaseDateChange}
          />

          <label htmlFor="poster_path">Movie URL</label>
          <br />
          <input
            type="text"
            name="movie-url"
            className="form__input"
            placeholder="Movie Url Here"
            value={userInput.movieUrl}
            onChange={handleMovieUrlChange}
          />

          <label htmlFor="overview">Overview</label>
          <br />

          <input
            type="text"
            name="overview"
            placeholder="Overview"
            className="form__input"
            value={userInput.overview}
            onChange={handleOverviewChange}
          />

          <label htmlFor="runtime">Runtime</label>
          <br />

          <input
            type="text"
            name="runtime"
            placeholder="Runtime"
            className="form__input"
            value={userInput.runtime}
            onChange={handleRuntimeChange}
          />
          <div className="button-area">
            <button className="button-secondary" onClick={props.onCancel}>
              reset
            </button>
            <button className="button-main" type="submit">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default MovieForm;
