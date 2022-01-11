import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import {
  loadMovies,
  loadMoviesByDate,
  loadMoviesByRating,
  loadMoviesByTitle,
} from "../store/thunk";

const MovieCategories = () => {
  const dispatch = useDispatch();
  const [categories, setCategories] = useState([]);

  const changeCategoryCallback = (categoryValue) => {
    const categoriesUpdated = categories.map((item) => {
      if (item.name === categoryValue) {
        return { ...item };
      } else {
        return { ...item };
      }
    });
    setCategories(categoriesUpdated);
    if (categoryValue === "title") {
      dispatch(loadMoviesByTitle());
    }
    if (categoryValue === "date") {
      dispatch(loadMoviesByDate());
    }

    if (categoryValue === "rating") {
      dispatch(loadMoviesByRating());
    }
    if (categoryValue === "featured") {
      dispatch(loadMovies());
    }
  };
  return (
    <aside className="movieSection-categories">
      <select
        onChange={(e) => {
          changeCategoryCallback(e.target.value);
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

export default MovieCategories;
