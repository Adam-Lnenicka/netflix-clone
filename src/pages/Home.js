import React, { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import Footer from "../components/Footer";
import ErrorBoundary from "../components/ErrorBoundary";
import FormikAddMovie from "../components/FormikAddMovie";
import NewMovie from "../components/NewMovie/NewMovie";
// import DATA from "../MOCK_DATA.json";

const Home = () => {
  const movieData = [
    {
      id: 1,
      title: "Two release_dates at Sea",
      genres: "Documentary",
      overview:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      release_date: 1993,
      runtime: "93 min",
      vote_average: 6.5,
      poster_path:
        "https://images.unsplash.com/photo-1560109947-543149eceb16?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fG1vdmllfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
    },
    {
      id: 2,
      title: "Def-Con 4",
      genres: "Action|Sci-Fi",
      overview:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      release_date: 2010,
      runtime: "93 min",
      vote_average: 6.5,
      poster_path:
        "https://images.unsplash.com/photo-1616530940355-351fabd9524b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fG1vdmllfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
    },
    {
      id: 3,
      title: "Sparrows Dance",
      genres: "Drama|Romance",
      overview:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      release_date: 2001,
      runtime: "93 min",
      vote_average: 6.5,
      poster_path:
        "https://images.unsplash.com/photo-1560109947-543149eceb16?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fG1vdmllfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
    },
    {
      id: 4,
      title:
        "Garden of the Finzi-Continis, The (Giardino dei Finzi-Contini, Il)",
      genres: "Drama",
      overview:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      release_date: 1988,
      runtime: "93 min",
      vote_average: 6.5,
      poster_path:
        "https://images.unsplash.com/photo-1560109947-543149eceb16?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fG1vdmllfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
    },
    {
      id: 5,
      title: "Zatoichi",
      genres: "Action|Drama",
      overview:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      release_date: 1993,
      runtime: "93 min",
      vote_average: 6.5,
      poster_path:
        "https://images.unsplash.com/photo-1637758180067-71d95d566a9e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=900&q=60",
    },
    {
      id: 6,
      title: "Natural, The",
      genres: "Drama",
      overview:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      release_date: 1973,
      runtime: "93 min",
      vote_average: 6.5,
      poster_path:
        "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bW92aWV8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60",
    },
  ];

  const [testAPI, setTestAPI] = useState([]);

  const movieApi = async () => {
    const url = "http://localhost:4000/movies";

    const response = await fetch(url);
    const data = await response.json();

    try {
      setTestAPI(data.data);
      console.log(data.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    movieApi();
  }, []);

  // const sortedMovieData2 = movieData.sort((a, b) => {
  //   return b.release_date - a.release_date;
  // });
  const [movieSort, setMovieSort] = useState(movieData);

  const [bannerObject, setBannerObject] = useState({
    title: "",
    poster_path: "",
    overview: "",
    release_date: "",
  });

  const sortedMovieData = () =>
    setMovieSort(
      movieData.sort((a, b) => {
        return a.release_date - b.release_date;
      })
    );

  // useEffect(() => {
  //   setMovieSort(
  //     movieData.sort((a, b) => {
  //       return a.release_date - b.release_date;
  //     })
  //   );
  // }, [sortedMovieData, Home]);

  // const handleSort = () => setMovieSort(sortedMovieData);

  const bannerHandle = (movie, id) => {
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

  const addMovieHandler = (movie) => {
    setTestAPI((prevMovies) => {
      return [movie, ...prevMovies];
    });
  };

  return (
    <>
      <FormikAddMovie />
      <div className={bannerObject.title !== "" ? "hide" : "banner"}>
        <div className="inner-banner">
          <button onClick={sortedMovieData}>sort</button>
          <h1>FIND YOUR MOVIE</h1>
          <form>
            <input type="text" placeholder="What do you want to watch?" />
            <button type="submit">search</button>
          </form>
          <br />
        </div>
      </div>
      <div className="movieDetails"></div>
      {/* <MovieDetailsBanner title={bannerObject.poster_path} /> */}
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
              <p> {bannerObject.runtime} min</p>
            </div>
            <p>{bannerObject.overview}</p>
          </div>
        </div>
      </div>
      {/* <div className="card-layout">
        {testAPI.map((movie) => (
          <div
            className="card"
            key={movie.id}
            onClick={() => bannerHandle(movie)}
          >
            <img
              className="card-image"
              src={movie.poster_path}
              alt={movie.title}
            />
            <div className="card-details">
              <div>
                <h4>{movie.title}</h4>
                {movie.genres.map((g) => (
                  <span key={g}>{g} /</span>
                ))}
              </div>
              <button>{movie.release_date.slice(0, 4)}</button>
            </div>
          </div>
        ))}
      </div> */}
      <NewMovie onAddMovie={addMovieHandler} />

      <ErrorBoundary>
        <div className="card-layout">
          {testAPI.map((movie) => (
            // {movieSort.map((movie) => (

            <MovieCard
              key={movie.id}
              poster_path={movie.poster_path}
              title={movie.title}
              // genres={movie.genres.map((g) => (
              //   <span key={g}>{g} /</span>
              // ))}
              // release_date={movie.release_date}
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
