import {
  LOAD_MOVIES,
  LOAD_MOVIES_BY_DATE,
  LOAD_MOVIES_BY_RATING,
  LOAD_MOVIES_BY_TITLE,
} from "./actionTypes";

export const loadMoviesThunk = () => async (dispatch) => {
  const apiLink = "http://localhost:4000/movies?limit=100";
  const apiData = await fetch(apiLink);
  const moviesData = await apiData.json();
  dispatch({
    type: LOAD_MOVIES,
    payload: moviesData.data,
  });
};

export const loadMoviesByTitleThunk = () => async (dispatch) => {
  const apiLink = "http://localhost:4000/movies?sortOrder=desc&sortBy=title";
  const apiData = await fetch(apiLink);
  const moviesData = await apiData.json();
  dispatch({
    type: LOAD_MOVIES_BY_TITLE,
    payload: moviesData.data,
  });
};

export const loadMoviesByRatingThunk = () => async (dispatch) => {
  const apiLink =
    "http://localhost:4000/movies?sortOrder=desc&sortBy=vote_average";
  const apiData = await fetch(apiLink);
  const moviesData = await apiData.json();
  dispatch({
    type: LOAD_MOVIES_BY_RATING,
    payload: moviesData.data,
  });
};

export const loadMoviesByDateThunk = () => async (dispatch) => {
  const apiLink =
    "http://localhost:4000/movies?sortOrder=desc&sortBy=release_date";
  const apiData = await fetch(apiLink);
  const moviesData = await apiData.json();
  dispatch({
    type: LOAD_MOVIES_BY_DATE,
    payload: moviesData.data,
  });
};
