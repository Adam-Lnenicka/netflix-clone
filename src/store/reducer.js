import {
  SEARCH,
  FILTER_MOVIE,
  VISIBLE,
  LOAD_MOVIES,
  FILTER_ID,
  MOVIES_SORTED,
  REMOVE_MOVIE,
  NEW_MOVIE,
  ADD_MOVIE,
  RESET,
  LOAD_MOVIES_BY_TITLE,
  SORT_CRITERIA,
} from "./actionTypes";

const initialState = {
  movies: [],
  searchFilter: "",
  filterMovie: "",
  movieArray: [],
  sortCriteria: "",
  visibility: true,
  newMovie: {
    title: "",
    poster_path: "",
    vote_average: "",
    tagline: "",
    genres: "",
    overview: "",
    release_date: "",
    runtime: "",
  },
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
    case SORT_CRITERIA:
      return {
        ...state,
        sortCriteria: [action.payload],
      };
    case LOAD_MOVIES:
      return {
        ...state,
        movies: [action.payload],
      };
    case LOAD_MOVIES_BY_TITLE:
      return {
        ...state,
        movies: [action.payload],
      };
    case RESET:
      return {
        ...state,
        movies: [[...state.movies[0], (action.payload = {})]],
      };

    case REMOVE_MOVIE:
      const moviesUpdated = state.movies[0].filter((movie) => {
        return movie.id !== action.payload;
      });

      return { ...state, movies: [moviesUpdated] };

    case NEW_MOVIE:
      return {
        ...state,
        newMovie: action.payload,
      };

    case ADD_MOVIE:
      return {
        ...state,
        movies: [[...state.movies[0].unshift(action.payload)]],
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
