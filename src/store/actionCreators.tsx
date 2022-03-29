import { ActionType } from "./actionTypes";

export const resetMovieActionCreator = (movie: string) => {
  return {
    type: ActionType.RESET,
    payload: movie,
  };
};

export const removeMovieActionCreator = (movieId: number) => {
  return {
    type: ActionType.MOVIE_REMOVED,
    payload: movieId,
  };
};

export const addMovieActionCreator = (movie: string) => {
  return {
    type: ActionType.MOVIE_ADDED,
    payload: movie,
  };
};

export const searchMovieTitleCreator = (filter: string) => {
  return {
    type: ActionType.SEARCH,
    payload: filter,
  };
};

export const filterMovie = (filter: string) => {
  return {
    type: ActionType.MOVIE_FILTER,
    payload: filter,
  };
};
