import {
  COUNT,
  SEARCH,
  FILTER_MOVIE,
  SORT_CRITERIA,
  VISIBLE,
  FILTER_ID,
  MOVIES_SORTED,
} from "./actionTypes";

export const count = () => {
  return {
    type: COUNT,
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
    type: FILTER_MOVIE,
    payload: filter,
  };
};

export const moviesSorted = (filter) => {
  return {
    type: MOVIES_SORTED,
    payload: filter,
  };
};

export const filterId = (filter) => {
  return {
    type: FILTER_ID,
    payload: filter,
  };
};

export const sortCriteria = (sort) => {
  return {
    type: SORT_CRITERIA,
    payload: sort,
  };
};

export const visibility = () => {
  return {
    type: VISIBLE,
  };
};
