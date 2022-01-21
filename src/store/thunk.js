import {
  MOVIES_LOADED,
  MOVIES_LOADED_BY_DATE,
  MOVIES_LOADED_BY_RATING,
  MOVIES_LOADED_BY_TITLE,
} from "./actionTypes";

const api = "http://localhost:4000/movies";

export const loadMoviesThunk = (filters) => async (dispatch) => {
  const apiLink = `${api}?limit=100${filters}`;
  const apiData = await fetch(apiLink);
  const moviesData = await apiData.json();
  dispatch({
    type: MOVIES_LOADED,
    payload: moviesData.data,
  });
};

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ data: { test: '123' } }),
  })
);

describe("Given loadMoviesThunk", () => {
  it('should call dispatch with correct atr', () => {
    const mockedDispatch = jest.fn();

    loadMoviesThunk({})(mockedDispatch);

    expect(mockedDispatch).toHaveBeenCalledWith({type: MOVIES_LOADED,
      payload: { test: '123' } });
  });
});

export const loadMoviesByTitleThunk = () => async (dispatch) => {
  const apiLink = `${api}?sortOrder=desc&sortBy=title`;
  const apiData = await fetch(apiLink);
  const moviesData = await apiData.json();
  dispatch({
    type: MOVIES_LOADED_BY_TITLE,
    payload: moviesData.data,
  });
};

export const loadMoviesByRatingThunk = () => async (dispatch) => {
  const apiLink = `${api}?sortOrder=desc&sortBy=vote_average`;
  const apiData = await fetch(apiLink);
  const moviesData = await apiData.json();
  dispatch({
    type: MOVIES_LOADED_BY_RATING,
    payload: moviesData.data,
  });
};

export const loadMoviesByDateThunk = () => async (dispatch) => {
  const apiLink = `${api}?sortOrder=desc&sortBy=release_date`;
  const apiData = await fetch(apiLink);
  const moviesData = await apiData.json();
  dispatch({
    type: MOVIES_LOADED_BY_DATE,
    payload: moviesData.data,
  });
};

// export const loadFilteredMoviesThunk = () => async (dispatch) => {
//   const apiLink = `${api}?filter=${filter}`;
//   const apiData = await fetch(apiLink);
//   const moviesData = await apiData.json();
//   dispatch({
//     type: MOVIES_LOADED,
//     payload: moviesData.data,
//   });
// };

// export const searchMoviesThunk = () => async (dispatch) => {
//   const apiLink = `${api}?search=${parameter}&searchBy=title`;

//   const apiData = await fetch(apiLink);
//   const moviesData = await apiData.json();
//   dispatch({
//     type: MOVIES_LOADED_BY_DATE,
//     payload: moviesData.data,
//   });
// };
