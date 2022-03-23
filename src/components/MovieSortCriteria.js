import React from "react";
import { useDispatch } from "react-redux";
import {
  loadMoviesThunk,
  loadMoviesByDateThunk,
  loadMoviesByRatingThunk,
  loadMoviesByTitleThunk,
} from "../store/thunk";
import { SortNavigation } from "./FilterNavigation/styles/FilterNavigation";

const MovieSortCriteria = () => {
  const dispatch = useDispatch();

  const changeSortHandler = (sortValue) => {
    switch (sortValue) {
      case "title":
        dispatch(loadMoviesByTitleThunk());
        break;
      case "date":
        dispatch(loadMoviesByDateThunk());
        break;
      case "rating":
        dispatch(loadMoviesByRatingThunk());
        break;
      case "featured":
        dispatch(loadMoviesThunk());
    }
  };
  return (
    <aside>
      <SortNavigation
        onChange={(e) => {
          changeSortHandler(e.target.value);
        }}
      >
        <option value="featured">featured</option>
        <option value="title">title</option>
        <option value="date">newest</option>
        <option value="rating">rating</option>
      </SortNavigation>
    </aside>
  );
};

export default MovieSortCriteria;
