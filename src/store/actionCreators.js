import {
  SEARCH,
  MOVIE_FILTER,
  FILTER_ID,
  MOVIE_REMOVED,
  MOVIE_ADDED,
  RESET,
} from "./actionTypes";

export const resetMovieActionCreator = (movie) => {
  return {
    type: RESET,
    payload: movie,
  };
};

export const removeMovieActionCreator = (movieId) => {
  return {
    type: MOVIE_REMOVED,
    payload: movieId,
  };
};

export const addMovieActionCreator = (movie) => {
  return {
    type: MOVIE_ADDED,
    payload: movie,
  };
};

export const searchMovieTitleCreator = (filter) => {
  return {
    type: SEARCH,
    payload: filter,
  };
};

export const filterMovie = (filter) => {
  return {
    type: MOVIE_FILTER,
    payload: filter,
  };
};

export const filterId = (filter) => {
  return {
    type: FILTER_ID,
    payload: filter,
  };
};
