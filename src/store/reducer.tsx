import { ActionType } from "./actionTypes";

interface StateInterface {
  movies: any;
  searchFilter: string;
  filterMovie: string;
  movieArray: string[];
}

const initialState = {
  movies: [],
  searchFilter: "",
  filterMovie: "",
  movieArray: [],
};

const rootReducer = (
  state: StateInterface = initialState,
  { type, payload }
): StateInterface => {
  switch (type) {
    case ActionType.MOVIES_LOADED:
    case ActionType.MOVIES_LOADED_BY_TITLE:
    case ActionType.MOVIES_LOADED_BY_DATE:
    case ActionType.MOVIES_LOADED_BY_RATING:
      return {
        ...state,
        movies: [payload],
      };

    case ActionType.RESET:
      return {
        ...state,
        movies: [[...state.movies[0], (payload = {})]],
      };

    case ActionType.MOVIE_REMOVED:
      const moviesUpdated = state.movies[0].filter((movie) => {
        return movie.id !== payload;
      });

      return { ...state, movies: [moviesUpdated] };

    case ActionType.MOVIE_ADDED:
      return {
        ...state,
        movies: [[...state.movies[0].unshift(payload)]],
      };
    case ActionType.MOVIE_FILTER:
      return {
        ...state,
        filterMovie: payload,
      };

    case ActionType.SEARCH:
      return {
        ...state,
        searchFilter: payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
