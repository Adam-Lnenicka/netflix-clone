import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  loadMoviesThunk,
  loadMoviesByDateThunk,
  loadMoviesByRatingThunk,
  loadMoviesByTitleThunk,
} from "../store/thunk";

const MovieSortCriteria = () => {
  const dispatch = useDispatch();
  const [sortCriteria, setSortCriteria] = useState([]);

  const changeSortHandler = (sortValue) => {
    const sortCriteriaUpdated = sortCriteria.map((item) => {
      if (item.name === sortValue) {
        return { ...item };
      } else {
        return { ...item };
      }
    });
    setSortCriteria(sortCriteriaUpdated);
    if (sortValue === "title") {
      dispatch(loadMoviesByTitleThunk());
    }
    if (sortValue === "date") {
      dispatch(loadMoviesByDateThunk());
    }

    if (sortValue === "rating") {
      dispatch(loadMoviesByRatingThunk());
    }
    if (sortValue === "featured") {
      dispatch(loadMoviesThunk());
    }
  };
  return (
    <aside>
      <select
        className="sort-movies"
        onChange={(e) => {
          changeSortHandler(e.target.value);
        }}
      >
        <option value="featured">featured</option>
        <option value="title">title</option>
        <option value="date">newest</option>
        <option value="rating">rating</option>
      </select>
    </aside>
  );
};

export default MovieSortCriteria;
