import React from "react";
import { useDispatch } from "react-redux";
import { sortCriteria } from "../../store/actionCreators";

const SortFilter = (prop) => {
  const dispatch = useDispatch();
  return (
    <>
      <span>SORT MOVIES</span>
      <select
        className="sort-movies"
        onChange={(e) => {
          dispatch(sortCriteria(e.target.value));
        }}
      >
        <option>SELECT CRITERIA</option>
        <option value="newest-date">Oldest date</option>
        <option value="oldest-date">Newest Releases</option>
        <option value="title">Title</option>
      </select>
    </>
  );
};

export default SortFilter;
