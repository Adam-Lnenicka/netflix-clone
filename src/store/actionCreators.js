import {
  COUNT,
  TEST_STRING,
  API,
  FILTER_MOVIE,
  MOVIE_ARRAY,
  SORT_CRITERIA,
  VISIBLE,
  LOAD_MOVIES,
  SEARCH_TERM,
} from "./actionTypes";

export const count = () => {
  return {
    type: COUNT,
  };
};

export const testString = (filter) => {
  return {
    type: TEST_STRING,
    payload: filter,
  };
};

export const reduxSearchTerm = (value) => {
  return {
    type: SEARCH_TERM,
    payload: value,
  };
};

export const api = () => async (dispatch) => {
  const url = "http://localhost:4000/movies?limit=100";
  const apiData = await fetch(url);
  const moviesData = await apiData.json();
  dispatch({
    type: API,
    payload: moviesData.data,
  });
};

// export function api() {
//   return async (dispatch, getState) => {
//     // const number = getState();
//     const baseUrl = "http://localhost:4000/movies?limit=100";

//     const response = await fetch(baseUrl);
//     const data = await response.json();

//     try {
//       console.log(data.data);
//       dispatch({
//         type: API,
//         payload: data.data,
//       });
//     } catch (err) {
//       console.error(err);
//     }
//     // fetch(`${baseUrl}/${number}`)
//     //   .then((res) => res.json())
//     //   .then((res) => {
//     //     console.log(res);
//     //     dispatch({
//     //       type: API,
//     //       payload: res,
//     //     });
//     //   });
//   };
// }

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
