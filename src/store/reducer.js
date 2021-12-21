import {
  COUNT,
  SEARCH,
  FILTER_MOVIE,
  SORT_CRITERIA,
  VISIBLE,
  LOAD_MOVIES,
  FILTER_ID,
} from "./actionTypes";

const initialState = {
  count: 0,
  movies: [],
  searchFilter: "",
  filterMovie: "",
  test: "",
  movieArray: [],
  sortCriteria: "",
  visibility: true,
  // id: "",
  id: {
    title: "",
  },
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_MOVIES:
      return {
        ...state,
        movies: [...state.movies, action.payload],
      };
    case COUNT:
      return {
        ...state,
        count: state.count + 1,
      };
    case FILTER_MOVIE:
      return {
        ...state,
        filterMovie: action.payload,
      };
    case FILTER_ID:
      return {
        ...state,
        id: {
          title: action.payload,
        },
      };
    case SEARCH:
      return {
        ...state,
        searchFilter: action.payload,
      };
    case SORT_CRITERIA:
      return {
        ...state,
        sortCriteria: action.payload,
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
