import {
  SEARCH,
  MOVIE_FILTER,
  MOVIE_REMOVED,
  MOVIE_ADDED,
  RESET,
} from "./actionTypes";

export const resetMovieActionCreator = (movie: string) => {
  return {
    type: RESET,
    payload: movie,
  };
};

export const removeMovieActionCreator = (movieId: number) => {
  return {
    type: MOVIE_REMOVED,
    payload: movieId,
  };
};

export const addMovieActionCreator = (movie: string) => {
  return {
    type: MOVIE_ADDED,
    payload: movie,
  };
};

export const searchMovieTitleCreator = (filter: string) => {
  return {
    type: SEARCH,
    payload: filter,
  };
};

export const filterMovie = (filter: string) => {
  return {
    type: MOVIE_FILTER,
    payload: filter,
  };
};
