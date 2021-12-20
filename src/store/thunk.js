import { LOAD_MOVIES } from "./actionTypes";

export const loadMovies = () => async (dispatch) => {
  const apiLink = "http://localhost:4000/movies?limit=100";
  const apiData = await fetch(apiLink);
  const moviesData = await apiData.json();
  dispatch({
    type: LOAD_MOVIES,
    payload: moviesData.data,
  });
};
