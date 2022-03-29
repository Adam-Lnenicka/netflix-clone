import { Action } from "./action";
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
  action: Action
): StateInterface => {
  switch (action.type) {
    case ActionType.MOVIES_LOADED:
    case ActionType.MOVIES_LOADED_BY_TITLE:
    case ActionType.MOVIES_LOADED_BY_DATE:
    case ActionType.MOVIES_LOADED_BY_RATING:
      return {
        ...state,
        movies: [action.payload],
      };

    case ActionType.RESET:
      return {
        ...state,
        movies: [[...state.movies[0], (action.payload = {})]],
      };

    case ActionType.MOVIE_REMOVED:
      const moviesUpdated = state.movies[0].filter((movie) => {
        return movie.id !== action.payload;
      });

      return { ...state, movies: [moviesUpdated] };

    case ActionType.MOVIE_ADDED:
      return {
        ...state,
        movies: [[...state.movies[0].unshift(action.payload)]],
      };
    case ActionType.MOVIE_FILTER:
      return {
        ...state,
        filterMovie: action.payload,
      };

    case ActionType.SEARCH:
      return {
        ...state,
        searchFilter: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
