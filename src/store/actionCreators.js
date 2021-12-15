import {
  FILTER_MOVIE,
  MOVIE_ARRAY,
  SORT_CRITERIA,
  VISIBLE,
} from "./actionsTypes";

export const filterMovie = (filter) => {
  return {
    type: FILTER_MOVIE,
    payload: filter,
  };
};

export const movieArray = (array) => {
  return {
    type: MOVIE_ARRAY,
    payload: array,
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
