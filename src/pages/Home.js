import React, { useState, useEffect, useCallback } from "react";
import MovieCard from "../components/MovieCard";
import Footer from "../components/Footer/Footer";
import ErrorBoundary from "../components/ErrorBoundary";
import NewMovie from "../components/NewMovie/NewMovie";

const Home = () => {
  // const [movieSort, setMovieSort] = useState(testAPI);
  const [display, setDisplay] = useState(false);

  const handleDisplay = () => {
    setDisplay(!display);
  };

  const [bannerObject, setBannerObject] = useState({
    title: "",
    poster_path: "",
    overview: "",
    release_date: "",
  });

  const bannerHandle = (movie) => {
    console.log(bannerObject);
    setBannerObject((bannerObject) => ({
      ...bannerObject,
      title: movie.title,
      vote_average: movie.vote_average,
      tagline: movie.tagline,
      genres: movie.genres,
      overview: movie.overview,
      release_date: movie.release_date,
      runtime: movie.runtime,
      poster_path: movie.poster_path,
    }));
  };

  const [testAPI, setTestAPI] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const movieApi = useCallback(async () => {
    const url = "http://localhost:4000/movies";

    const response = await fetch(url);
    const data = await response.json();

    try {
      setTestAPI(data.data);
      console.log(data.data);
    } catch (err) {
      console.error(err);
    }
  }, [testAPI]);

  useEffect(() => {
    movieApi();
  }, []);

  const sortedMovieData = () =>
    setTestAPI(
      testAPI.sort((a, b) => {
        return a.release_date - b.release_date;
      })
    );

  const addMovieHandler = (movie) => {
    setTestAPI((prevMovies) => {
      return [movie, ...prevMovies];
    });
  };

  return (
    <>
      <button className="button-main" onClick={handleDisplay}>
        ADD MOVIE
      </button>
      <div className={display === false ? "hide" : null}>
        <NewMovie onAddMovie={addMovieHandler} close={handleDisplay} />
      </div>
      <div className={bannerObject.title !== "" ? "hide" : "banner"}>
        <div className="inner-banner">
          <button onClick={sortedMovieData} className="button-basic">
            sort
          </button>
          <h1>FIND YOUR MOVIE</h1>
          <form>
            <input type="text" placeholder="What do you want to watch?" />

            <input
              type="text"
              placeholder="search test"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
              }}
            />
            <button type="submit" className="button-main">
              search
            </button>
          </form>
          <br />
        </div>
      </div>
      <div className="movieDetails"></div>
      <div className={bannerObject.title !== "" ? "movie-details" : null}>
        <div className="movie-details__container">
          <img src={bannerObject.poster_path} />
          <div>
            <div className="flex">
              <h2> {bannerObject.title}</h2>
              <span> {bannerObject.vote_average}</span>
            </div>
            <p>{bannerObject.tagline}</p>
            <div className="flex">
              <p> {bannerObject.release_date.slice(0, 4)} </p>
              <p> {bannerObject.runtime}</p>
            </div>
            <p>{bannerObject.overview}</p>
          </div>
        </div>
      </div>

      <ErrorBoundary>
        <div className="card-layout">
          {testAPI
            .filter((data) => {
              if (searchTerm === "") {
                return data;
              } else if (
                data.name.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return data;
              }
              return null;
            })
            .map((movie) => (
              // {movieSort.map((movie) => (
              <MovieCard
                key={movie.id}
                poster_path={movie.poster_path}
                title={movie.title}
                genres={movie.genres.map((g) => (
                  <span key={g}>{g} /</span>
                ))}
                release_date={movie.release_date}
                function={bannerHandle}
                movie={movie}
              />
            ))}
        </div>
      </ErrorBoundary>
      <Footer />
    </>
  );
};

export default Home;
