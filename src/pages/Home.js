import React, { useState } from "react";
import MovieCard from "../components/MovieCard";
import Footer from "../components/Footer/Footer";
import InnerBanner from "../components/InnerBanner/InnerBanner";
import MovieBanner from "../components/InnerBanner/MovieBanner";
import Navigation from "../components/FilterNavigation/Navigation";
import ErrorBoundary from "../components/ErrorBoundary";
import { useSelector } from "react-redux";

const Home = () => {
  const FilterIdSelector = useSelector((state) => state.id);
  const movieGenreFilterSelector = useSelector((state) => state.filterMovie);
  const apiMoviesArraySelector = useSelector((state) => state.movies);
  const movieArraySearchSelector = useSelector((state) => state.searchFilter);

  return (
    <>
      <div className="banner">
        <InnerBanner />
      </div>

      <div className="movie-details">
        <MovieBanner
          title={FilterIdSelector.title}
          vote_average={FilterIdSelector.vote_average}
          poster_path={FilterIdSelector.poster_path}
          tagline={FilterIdSelector.tagline}
          genres={FilterIdSelector.genres}
          release_date={FilterIdSelector.release_date.slice(0, 4)}
          runtime={FilterIdSelector.runtime}
          overview={FilterIdSelector.overview}
          id={FilterIdSelector.id}
          broken={(e) =>
            (e.target.src =
              "https://images.unsplash.com/photo-1560109947-543149eceb16?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80")
          }
        />
      </div>
      <Navigation />
      <ErrorBoundary>
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
                  vote_average={m.vote_average}
                  overview={m.overview}
                  movie={movie}
                  runtime={m.runtime}
                  broken={(e) =>
                    (e.target.src =
                      "https://images.unsplash.com/photo-1560109947-543149eceb16?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80")
                  }
                />
              ))
              .slice(0, 10)
          )}
        </div>
      </ErrorBoundary>

      <Footer />
    </>
  );
};

export default Home;
