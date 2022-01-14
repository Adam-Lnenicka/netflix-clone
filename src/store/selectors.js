import { useSelector } from "react-redux";

export const useMovieGenreFilterSelector = useSelector(
  (state) => state.filterMovie
);

export const useMovieArraySearchSelector = useSelector(
  (state) => state.searchFilter
);

// const useMovieTitleSelector = () =>
//   useSelector((state) => state.newMovie.title);
// const useMovieTitleSelector = () =>
//   useSelector((state) => state.newMovie.title);
// const useMovieTitleSelector = () =>
//   useSelector((state) => state.newMovie.title);
// const useMovieTitleSelector = () =>
//   useSelector((state) => state.newMovie.title);
// const useMovieTitleSelector = () =>
//   useSelector((state) => state.newMovie.title);
// const useMovieTitleSelector = () =>
//   useSelector((state) => state.newMovie.title);
// const useMovieTitleSelector = () =>
//   useSelector((state) => state.newMovie.title);
// const useMovieTitleSelector = () =>
//   useSelector((state) => state.newMovie.title);
