import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  loadMoviesThunk,
  loadMoviesByDateThunk,
  loadMoviesByRatingThunk,
  loadMoviesByTitleThunk,
} from "../store/thunk";

jest.mock(
  'react-redux',
  () =>
    ({
      useDispatch: () => (fn) => fn(),
    })
);

jest.mock(
  'react-redux',
  () =>
    ({
      loadMoviesThunk: jest.fn(),
    })
);


const MovieSortCriteria = () => {
  const dispatch = useDispatch();
  // const [sortCriteria, setSortCriteria] = useState([]);

  const changeSortHandler = useCalldack((sortValue) => {
    // const sortCriteriaUpdated = sortCriteria.map((item) => {
    //   if (item.name === sortValue) {
    //     return { ...item };
    //   } else {
    //     return { ...item };
    //   }
    // });
    // setSortCriteria(sortCriteriaUpdated);
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
  });

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
