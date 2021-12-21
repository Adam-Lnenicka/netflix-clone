import React, { useState, useEffect, useCallback } from "react";
import MovieCard from "../components/MovieCard";
import Footer from "../components/Footer/Footer";
import ErrorBoundary from "../components/ErrorBoundary";
import InnerBanner from "../components/InnerBanner/InnerBanner";
import MovieBanner from "../components/InnerBanner/MovieBanner";
import Navigation from "../components/FilterNavigation/Navigation";
import {
  filterId,
  reduxSearchTerm,
  searchMovieTitle,
} from "../store/actionCreators";
import { useDispatch, useSelector } from "react-redux";
import Card from "../components/Card";
import { loadMovies } from "../store/thunk";

const Home = () => {
  const [display, setDisplay] = useState(false);
  const [filterTerm, setFilterTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [submitSearch, setSubmitSearch] = useState("");

  const [bannerObject, setBannerObject] = useState({
    title: "",
    poster_path: "",
    overview: "",
    release_date: "",
  });
  const FilterIdSelector = useSelector((state) => state.id);

  const movieGenreFilterSelector = useSelector((state) => state.filterMovie);
  const apiMoviesArraySelector = useSelector((state) => state.movies);
  const movieArraySearchSelector = useSelector((state) => state.searchFilter);

  const dispatch = useDispatch();

  const movieApi = useCallback(async () => {
    const url = "http://localhost:4000/movies?limit=100";

    const response = await fetch(url);
    const data = await response.json();

    try {
      setMovies(data.data);
      // console.log(data.data);
    } catch (err) {
      console.error(err);
    }
  }, [movies]);

  async function deletePost(id) {
    await fetch(`http://localhost:4000/movies/${id}`, { method: "DELETE" });
  }
  useEffect(() => {
    movieApi();
    // () => {
    //   dispatch(api());
    dispatch(loadMovies());

    // };
  }, []);

  const searchTermHandler = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
  };

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

  const sortMovies = (x) => {
    if (x === "newest-date") {
      const result = [...movies].sort((a, b) => {
        const dateA = new Date(a.release_date).getYear();
        const dateB = new Date(b.release_date).getYear();
        if (dateA < dateB) {
          return -1;
        }
        if (dateA < dateB) {
          return 1;
        }
        return 0;
      });
      setMovies(result);
    }
    if (x === "oldest-date") {
      const result = [...movies].sort((a, b) => {
        const dateA = new Date(a.release_date).getYear();
        const dateB = new Date(b.release_date).getYear();
        if (dateA > dateB) {
          return -1;
        }
        if (dateA > dateB) {
          return 1;
        }
        return 0;
      });
      setMovies(result);
    }
    if (x === "title") {
      const result = [...movies].sort((a, b) => {
        if (a.title < b.title) {
          return -1;
        }
        if (a.title < b.title) {
          return 1;
        }
        return 0;
      });
      setMovies(result);
    }
  };

  const addMovieHandler = (movie) => {
    setMovies((prevMovies) => {
      return [movie, ...prevMovies];
    });
  };

  const handleDisplay = () => {
    setDisplay(!display);
  };

  const handleSubmit = () => {
    setSubmitSearch(searchTerm);
  };

  return (
    <>
      {FilterIdSelector.title.title}

      <input
        type="text"
        onChange={(e) => dispatch(searchMovieTitle(e.target.value))}
      />
      <button
        type="submit"
        onClick={() => dispatch(searchMovieTitle("hello people"))}
      >
        dispatch
      </button>
      {/* </form> */}
      <div className={bannerObject.title !== "" ? "hide" : "banner"}>
        <InnerBanner
          searchTerm={searchTerm}
          onAddMovie={addMovieHandler}
          close={handleDisplay}
        />
      </div>
      {/* <div onClick={deletePost(354912)}>test test delete</div> */}

      <div>
        <div className="card-layout">
          {apiMoviesArraySelector.map((movie) =>
            movie
              .filter((data) => {
                if (movieArraySearchSelector === "") {
                  return data;
                } else if (
                  data.title
                    .toLowerCase()
                    .includes(movieArraySearchSelector.toLowerCase())
                ) {
                  return data;
                }
                return null;
              })
              .filter((data) => {
                if (movieGenreFilterSelector === "") {
                  return data;
                } else if (data.genres.includes(movieGenreFilterSelector)) {
                  return data;
                }
                return null;
              })
              .filter((data) => data.poster_path.includes(""))
              .slice(0, 10)
              .map((m) => (
                <MovieCard
                  key={m.id}
                  id={m.id}
                  title={m.title}
                  poster_path={m.poster_path}
                  genres={m.genres.map((g) => (
                    <span key={g}>{g} /</span>
                  ))}
                  release_date={m.release_date}
                  function={bannerHandle}
                  movie={movie}
                  broken={(e) =>
                    (e.target.src =
                      "https://images.unsplash.com/photo-1560109947-543149eceb16?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80")
                  }
                />
              ))
          )}
        </div>
      </div>

      <div className={bannerObject.title !== "" ? "movie-details" : null}>
        <MovieBanner
          title={bannerObject.title}
          vote_average={bannerObject.vote_average}
          poster_path={bannerObject.poster_path}
          tagline={bannerObject.tagline}
          genres={bannerObject.genres}
          release_date={bannerObject.release_date.slice(0, 4)}
          runtime={bannerObject.runtime}
          overview={bannerObject.overview}
          id={bannerObject.id}
          deletePost={deletePost}
          broken={(e) =>
            (e.target.src =
              "https://images.unsplash.com/photo-1560109947-543149eceb16?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80")
          }
        />
      </div>
      <Navigation
        all=""
        action="Action"
        fantasy="Fantasy"
        drama="Drama"
        crime="Crime"
        arrangeMovies={(event) => sortMovies(event.target.value)}
      />

      <ErrorBoundary>
        <div className="card-layout">
          {/* {apiMoviesArraySelector.map((movie) => (
            <div key={movie.id}>
              <p>{movie.title}</p>
            </div>
          ))} */}
          {console.log(apiMoviesArraySelector)}

          <p>hello</p>
          {movies
            .filter((data) => {
              if (movieArraySearchSelector === "") {
                return data;
              } else if (
                data.title
                  .toLowerCase()
                  .includes(movieArraySearchSelector.toLowerCase())
              ) {
                return data;
              }
              return null;
            })
            .filter((data) => {
              if (movieGenreFilterSelector === "") {
                return data;
              } else if (data.genres.includes(movieGenreFilterSelector)) {
                return data;
              }
              return null;
            })
            .filter((data) => data.poster_path.includes(""))
            .slice(0, 10)
            .map((movie) => (
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
                broken={(e) =>
                  (e.target.src =
                    "https://images.unsplash.com/photo-1560109947-543149eceb16?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80")
                }
              />
            ))}
        </div>
      </ErrorBoundary>
      <Footer />
    </>
  );
};

export default Home;
