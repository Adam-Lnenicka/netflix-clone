import React, { useState } from "react";

const AddMovie = () => {
  const [values, setValues] = useState({
    title: "",
    releaseDate: "",
    movieUrl: "",
    genre: "",
    overview: "",
    runtime: "",
  });

  const handleTitleChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      title: event.target.value,
    }));
  };

  const handleReleaseDateChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      releaseDate: event.target.value,
    }));
  };

  const handleMovieUrlChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      movieUrl: event.target.value,
    }));
  };

  const handleGenreChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      genre: event.target.value,
    }));
  };

  const handleOverviewChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      overview: event.target.value,
    }));
  };

  const handleRuntimeChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      runtime: event.target.value,
    }));
  };

  return (
    <>
      <h1>Add Movie</h1>
      <form>
        <label>title</label>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={values.title}
          setValue={handleTitleChange}
        />

        <label>release date</label>
        <input
          type="text"
          name="release-date"
          placeholder="Release Date"
          value={values.releaseDate}
          setValue={handleReleaseDateChange}
        />

        <label>movie url</label>
        <input
          type="text"
          name="movie-url"
          placeholder="Movie Url Here"
          value={values.movieUrl}
          setValue={handleMovieUrlChange}
        />

        <label>genre</label>
        <select name="genre" value={values.genre} setValue={handleGenreChange}>
          <option>Horror</option>
          <option>Comedy</option>
        </select>

        <label>overview</label>
        <input
          type="text"
          name="overview"
          placeholder="Overview"
          value={values.overview}
          setValue={handleOverviewChange}
        />

        <label>runtime</label>
        <input
          type="text"
          name="runtime"
          placeholder="Runtime"
          value={values.runtime}
          setValue={handleRuntimeChange}
        />

        <button className="button-main">reset</button>
        <button className="button-secondary">submit</button>
      </form>
    </>
  );
};

export default AddMovie;
