import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  loadMovies,
  loadMoviesByDate,
  loadMoviesByRating,
  loadMoviesByTitle,
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
      dispatch(loadMoviesByTitle());
    }
    if (sortValue === "date") {
      dispatch(loadMoviesByDate());
    }

    if (sortValue === "rating") {
      dispatch(loadMoviesByRating());
    }
    if (sortValue === "featured") {
      dispatch(loadMovies());
    }
  };
  return (
    <aside>
      <select
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
