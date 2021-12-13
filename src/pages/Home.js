import React, { useState, useEffect, useCallback } from "react";
import MovieCard from "../components/MovieCard";
import Footer from "../components/Footer/Footer";
import ErrorBoundary from "../components/ErrorBoundary";
import NewMovie from "../components/NewMovie/NewMovie";
import InnerBanner from "../components/InnerBanner/InnerBanner";
import MovieBanner from "../components/InnerBanner/MovieBanner";
import FilterNavigation from "../components/FilterNavigation/FilterNavigation";
import SortFilter from "../components/FilterNavigation/SortFilter";

const Home = () => {
  // const [movieSort, setMovieSort] = useState(movies);
  const [display, setDisplay] = useState(false);
  const [filterTerm, setFilterTerm] = useState("");

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
    const url = "http://localhost:4000/movies?limit=100";

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
  useEffect(() => {
    movieApi();
  }, []);

  const searchTermHandler = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
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

  return (
    <>
      <FilterNavigation
        all=""
        action="Action"
        fantasy="Fantasy"
        drama="Drama"
        crime="Crime"
        changeFilter={setFilterTerm}
      />
      <button>delete movie</button>

      <div className={bannerObject.title !== "" ? "hide" : "banner"}>
        <InnerBanner
          searchTerm={searchTerm}
          searchTermHandler={searchTermHandler}
          all=""
          action="Action"
          fantasy="Fantasy"
          drama="Drama"
          crime="Crime"
          changeFilter={setFilterTerm}
          arrangeMovies={(event) => sortMovies(event.target.value)}
          onAddMovie={addMovieHandler}
          close={handleDisplay}
        />
      </div>
      <div onClick={deletePost(354912)}>test test delete</div>

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
        />
      </div>
      <h1>{movies.length}</h1>

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
            .filter((data) => {
              if (filterTerm === "") {
                return data;
              } else if (data.genres.includes(filterTerm)) {
                return data;
              }
              return null;
            })
            .filter((data) => data.poster_path.status !== 200)
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
                broken={(event) => (event.target.src = "")}
              />
            ))}
        </div>
      </ErrorBoundary>
      <Footer />
    </>
  );
};

export default Home;
