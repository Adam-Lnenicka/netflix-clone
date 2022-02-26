import { useSelector } from "react-redux";
import { createSelector } from "reselect";

export const useMovieGenreFilterSelector = () =>
  useSelector((state) => state.filterMovie);

export const useMovieArraySearchSelector = () =>
  useSelector((state) => state.searchFilter);

export const useApiMoviesArraySelector = () =>
  useSelector((state) => state.movies);

export const usesMovieGenreFilterSelector = () =>
  createSelector((state) => state.filterMovie);

export const usesMovieArraySearchSelector = () =>
  createSelector((state) => state.filterMovie);
