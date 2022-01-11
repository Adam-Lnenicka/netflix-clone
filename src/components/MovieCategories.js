import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import {
  loadMovies,
  loadMoviesByDate,
  loadMoviesByTitle,
  loadMoviesByTitleDescending,
} from "../store/thunk";

const MovieCategories = () => {
  const dispatch = useDispatch();
  const [categories, setCategories] = useState([
    { name: "All" },
    { name: "Drama" },
  ]);

  const changeCategoryCallback = useCallback(
    (categoryValue) => {
      const categoriesUpdated = categories.map((item) => {
        if (item.name === categoryValue) {
          return { ...item };
        } else {
          return { ...item };
        }
      });
      setCategories(categoriesUpdated);

      if (categoryValue === "title-ascending") {
        dispatch(loadMoviesByTitle());
      }
      if (categoryValue === "title-descending") {
        dispatch(loadMoviesByTitleDescending());
      }
      if (categoryValue === "newest") {
        dispatch(loadMoviesByDate());
      } else {
        dispatch(loadMovies());
      }
    },
    [dispatch, categories]
  );
  return (
    <select
      onChange={(e) => {
        changeCategoryCallback(e.target.value);
      }}
    >
      <option value="default">Featured</option>
      <option value="title-ascending">title-ascending</option>
      <option value="title-descending">title-descending</option>
      <option value="newest">newest</option>
    </select>
  );
};

export default MovieCategories;
