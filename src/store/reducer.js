import {
  SEARCH,
  MOVIE_FILTER,
  VISIBLE,
  MOVIES_LOADED,
  FILTER_ID,
  MOVIE_REMOVED,
  NEW_MOVIE,
  MOVIE_ADDED,
  RESET,
  MOVIES_LOADED_BY_TITLE,
  MOVIES_LOADED_BY_DATE,
  MOVIES_LOADED_BY_RATING,
} from "./actionTypes";

const initialState = {
  movies: [],
  searchFilter: "",
  filterMovie: "",
  movieArray: [],
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
    case MOVIES_LOADED:
    case MOVIES_LOADED_BY_TITLE:
    case MOVIES_LOADED_BY_DATE:
    case MOVIES_LOADED_BY_RATING:
      return {
        ...state,
        movies: [action.payload],
      };

    case RESET:
      return {
        ...state,
        movies: [[...state.movies[0], (action.payload = {})]],
      };

    case MOVIE_REMOVED:
      const moviesUpdated = state.movies[0].filter((movie) => {
        return movie.id !== action.payload;
      });

      return { ...state, movies: [moviesUpdated] };

    case NEW_MOVIE:
      return {
        ...state,
        newMovie: action.payload,
      };

    case MOVIE_ADDED:
      return {
        ...state,
        movies: [[...state.movies[0].unshift(action.payload)]],
      };
    case MOVIE_FILTER:
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
