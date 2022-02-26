import React from "react";
import { useApiMoviesArraySelector } from "../../store/selectors";
import MovieCard from "../MovieCard/MovieCard";

const MovieCardsContainer = () => {
  const apiMoviesArray = useApiMoviesArraySelector();

  return (
    <div className="card-layout">
      {apiMoviesArray.map((movie) =>
        movie
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
  );
};

export default MovieCardsContainer;
