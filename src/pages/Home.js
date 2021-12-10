import React, { useState, useEffect, useCallback } from "react";
import MovieCard from "../components/MovieCard";
import Footer from "../components/Footer/Footer";
import ErrorBoundary from "../components/ErrorBoundary";
import NewMovie from "../components/NewMovie/NewMovie";
import IntroBanner from "../components/IntroBanner/IntroBanner";
import { ProvidePlugin } from "webpack";

const Home = () => {
  // const [movieSort, setMovieSort] = useState(movies);
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
      id: movie.id,
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

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const movieApi = useCallback(async () => {
    const url = "http://localhost:4000/movies";

    const response = await fetch(url);
    const data = await response.json();

    try {
      setMovies(data.data);
      console.log(data.data);
    } catch (err) {
      console.error(err);
    }
  }, [movies]);

  async function deletePost(id) {
    await fetch(`http://localhost:4000/movies/${id}`, { method: "DELETE" });
  }

  async function postData(url = "http://localhost:4000/movies/", data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }

  postData("http://localhost:4000/movies/", { answer: 42 }).then((data) => {
    console.log(data); // JSON data parsed by `data.json()` call
  });

  useEffect((id) => {
    deletePost(id);
    movieApi();
  }, []);

  const searchTermHandler = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
  };

  // const sortedMovieData = () =>
  //   setMovies(
  //     movies.sort((a, b) => {
  //       return a.release_date - b.release_date;
  //     })
  //   );

  const addMovieHandler = (movie) => {
    setMovies((prevMovies) => {
      return [movie, ...prevMovies];
    });
  };

  return (
    <>
      <button>delete movie</button>
      <NewMovie onAddMovie={addMovieHandler} close={handleDisplay} />
      <div className={bannerObject.title !== "" ? "hide" : "banner"}>
        <IntroBanner />
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
            <p>{bannerObject.id}</p>
            {console.log(bannerObject.id)}
            <button onClick={deletePost(bannerObject.id)}>delete</button>
          </div>
        </div>
      </div>

      <ErrorBoundary>
        <div className="card-layout">
          {movies
            .filter((data) => {
              if (searchTerm === "") {
                return data;
              } else if (
                data.title.toLowerCase().includes(searchTerm.toLowerCase())
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
                myFunction={bannerHandle}
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
