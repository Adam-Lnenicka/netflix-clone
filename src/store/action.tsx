import { ActionType } from "./actionTypes";

interface MoviesLoadedAction {
  type: ActionType.MOVIES_LOADED;
  payload: string[];
}

interface MoviesLoadedByDateAction {
  type: ActionType.MOVIES_LOADED_BY_DATE;
  payload: string[];
}

interface MoviesLoadedByRatingAction {
  type: ActionType.MOVIES_LOADED_BY_RATING;
  payload: string[];
}

interface MoviesLoadedByTitleAction {
  type: ActionType.MOVIES_LOADED_BY_TITLE;
  payload: string[];
}

interface ResetAction {
  type: ActionType.RESET;
  payload: string;
}

interface MovieRemovedAction {
  type: ActionType.MOVIE_REMOVED;
  payload: string;
}

interface MovieAddedAction {
  type: ActionType.MOVIE_ADDED;
  payload: string;
}

interface MovieFilterAction {
  type: ActionType.MOVIE_FILTER;
  payload: string;
}

interface SearchAction {
  type: ActionType.SEARCH;
  payload: string;
}

export type Action =
  | MoviesLoadedAction
  | MoviesLoadedByDateAction
  | MoviesLoadedByRatingAction
  | MoviesLoadedByTitleAction
  | ResetAction
  | MovieRemovedAction
  | MovieAddedAction
  | MovieFilterAction
  | SearchAction;
