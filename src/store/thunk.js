import {
  LOAD_MOVIES,
  LOAD_MOVIES_BY_DATE,
  LOAD_MOVIES_BY_TITLE,
  LOAD_MOVIES_BY_TITLE_ASC,
} from "./actionTypes";

let api = "http://localhost:4000/movies?limit=100";

const sortParameter = (filter) => {
  if (sort === "title") api = "http://localhost:4000/movies?limit=100";
};

export const loadMovies = () => async (dispatch) => {
  const apiLink = "http://localhost:4000/movies?sortBy=date";
  const apiData = await fetch(apiLink);
  const moviesData = await apiData.json();
  dispatch({
    type: LOAD_MOVIES,
    payload: moviesData.data,
  });
};

export const loadMoviesByTitle = () => async (dispatch) => {
  const apiLink = "http://localhost:4000/movies?sortOrder=desc&sortBy=title";
  const apiData = await fetch(apiLink);
  const moviesData = await apiData.json();
  dispatch({
    type: LOAD_MOVIES_BY_TITLE,
    payload: moviesData.data,
  });
};

// export const loadMoviesByTitle = () => async (dispatch) => {
//   const apiLink = "http://localhost:4000/movies?sortOrder=desc&sortBy=title";
//   const apiData = await fetch(apiLink);
//   const moviesData = await apiData.json();
//   dispatch({
//     type: LOAD_MOVIES_BY_TITLE,
//     payload: moviesData.data,
//   });
// };

export const loadMoviesByTitleDescending = () => async (dispatch) => {
  const apiLink = "http://localhost:4000/movies?sortOrder=asc&sortBy=title";
  const apiData = await fetch(apiLink);
  const moviesData = await apiData.json();
  dispatch({
    type: LOAD_MOVIES_BY_TITLE_ASC,
    payload: moviesData.data,
  });
};

export const loadMoviesByDate = () => async (dispatch) => {
  const apiLink =
    "http://localhost:4000/movies?sortOrder=desc&sortBy=release_date";
  const apiData = await fetch(apiLink);
  const moviesData = await apiData.json();
  dispatch({
    type: LOAD_MOVIES_BY_DATE,
    payload: moviesData.data,
  });
};
