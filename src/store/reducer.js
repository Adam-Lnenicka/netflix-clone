import {
  SEARCH,
  FILTER_MOVIE,
  VISIBLE,
  LOAD_MOVIES,
  FILTER_ID,
  REMOVE_MOVIE,
  NEW_MOVIE,
  ADD_MOVIE,
  RESET,
  LOAD_MOVIES_BY_TITLE,
  LOAD_MOVIES_BY_DATE,
  LOAD_MOVIES_BY_RATING,
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
    case LOAD_MOVIES:
    case LOAD_MOVIES_BY_TITLE:
    case LOAD_MOVIES_BY_DATE:
    case LOAD_MOVIES_BY_RATING:
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
