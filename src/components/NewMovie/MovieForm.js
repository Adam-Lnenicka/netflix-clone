import React, { useState } from "react";

const MovieForm = (props) => {
  const [userInput, setUserInput] = useState({
    title: "",
    release_date: "",
    poster_path: "",
    genres: [],
    overview: "",
    runtime: "",
  });

  const resetHandle = () => {
    setUserInput((userInput) => ({
      ...userInput,
      title: "",
      release_date: "",
      poster_path: "",
      genres: [],
      overview: "",
      runtime: "",
    }));
  };

  const [genre, setGenre] = useState("hello motherfucker");

  const handleTitleChange = (event) => {
    setUserInput((userInput) => ({
      ...userInput,
      title: event.target.value,
    }));
  };

  const handleReleaseDateChange = (event) => {
    setUserInput((userInput) => ({
      ...userInput,
      release_date: event.target.value,
    }));
  };

  const handleGendreChange = (event) => {
    setUserInput((userInput) => ({
      ...userInput,
      genres: event.target.value,
    }));
  };

  const handleMovieUrlChange = (event) => {
    setUserInput((userInput) => ({
      ...userInput,
      poster_path: event.target.value,
    }));
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
    <div className="form-container">
      <div className="form">
        <button onClick={props.onCancel}>X</button>
        <h1>Add Movie</h1>

        <form onSubmit={submitHandler} className="form__content">
          <div className="form__contact-field-box">
            <div>
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
            <select onChange={handleGendreChange} value={userInput.genres}>
              <option></option>
              <option value={["horror"]}>Horror</option>

              <option value="drama">Drama</option>
            </select>
            {console.log(userInput.genres)}

            <label htmlFor="release_date">Release Date</label>
            <br />

            <input
              type="text"
              name="release-date"
              id="title"
              className="form__input"
              placeholder="Release Date"
              value={userInput.release_date}
              onChange={handleReleaseDateChange}
            />

            <input
              type="text"
              name="release-date"
              id="title"
              className="form__input"
              placeholder="Release Date"
              value={userInput.release_date}
              onChange={handleReleaseDateChange}
            />

            <label htmlFor="poster_path">Movie URL</label>
            <br />
            <input
              type="text"
              name="movie-url"
              className="form__input"
              placeholder="Movie Url Here"
              value={userInput.poster_path}
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
              type="number"
              name="runtime"
              placeholder="Runtime"
              className="form__input"
              value={userInput.runtime}
              onChange={handleRuntimeChange}
            />
            <div className="button-area">
              <button className="button-secondary" onClick={resetHandle}>
                reset
              </button>
              <button className="button-main" type="submit">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MovieForm;
