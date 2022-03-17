import { useSelector } from "react-redux";
import { RootState } from ".";

export const useMovieGenreFilterSelector = () =>
  useSelector((state: RootState) => state.filterMovie);

export const useMovieArraySearchSelector = () =>
  useSelector((state: RootState) => state.searchFilter);

export const useApiMoviesArraySelector = () =>
  useSelector((state: RootState) => state.movies);
