import {
  FILTER_MOVIE,
  MOVIE_ARRAY,
  SORT_CRITERIA,
  VISIBLE,
} from "./actionTypes";

const initialState = {
  movieFilter: [],
  movieArray: [],
  sortCriteria: [],
  visibility: true,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_MOVIE:
      return {
        ...state,
        movieFilter: [...state.movieFilter, action.payload],
      };
    case MOVIE_ARRAY:
      return {
        ...state,
        movieArray: [...state.movieArray, action.payload],
      };
    case SORT_CRITERIA:
      return {
        ...state,
        sortCriteria: [...state.sortCriteria, action.payload],
      };
    case VISIBLE:
      return {
        ...state,
        visibility: !state.visibility,
      };
    default:
      return state;
  }
};

export default rootReducer;
