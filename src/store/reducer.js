import {
  COUNT,
  SEARCH,
  FILTER_MOVIE,
  VISIBLE,
  LOAD_MOVIES,
  FILTER_ID,
  MOVIES_SORTED,
} from "./actionTypes";

const initialState = {
  count: 0,
  movies: [],
  searchFilter: "",
  filterMovie: "",
  movieArray: [],
  sortCriteria: "",
  visibility: true,
  id: {
    title: "",
    poster_path: "",
    vote_average: "",
    tagline: "",
    genres: "",
    overview: "",
    release_date: "",
    runtime: "",
  },
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case MOVIES_SORTED:
      return {
        ...state,
        movies: [action.payload],
      };
    case LOAD_MOVIES:
      return {
        ...state,
        movies: [action.payload],
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
        id: action.payload,
      };
    case SEARCH:
      return {
        ...state,
        searchFilter: action.payload,
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
