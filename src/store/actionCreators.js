import {
  SEARCH,
  MOVIE_FILTER,
  VISIBLE,
  FILTER_ID,
  MOVIE_REMOVED,
  MOVIE_ADDED,
  NEW_MOVIE,
  RESET,
} from "./actionTypes";

export const resetMovie = (movie) => {
  return {
    type: RESET,
    payload: movie,
  };
};

export const removeMovie = (movieId) => {
  return {
    type: MOVIE_REMOVED,
    payload: movieId,
  };
};

export const newMovie = (movie) => {
  return {
    type: NEW_MOVIE,
    payload: movie,
  };
};

export const addMovie = (movie) => {
  return {
    type: MOVIE_ADDED,
    payload: movie,
  };
};

export const searchMovieTitle = (filter) => {
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

export const visibility = () => {
  return {
    type: VISIBLE,
  };
};
