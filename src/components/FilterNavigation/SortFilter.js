import React from "react";
import { useDispatch } from "react-redux";

const SortFilter = () => {
  const dispatch = useDispatch();
  return (
    <>
      <span>SORT MOVIES</span>
      <select className="sort-movies">
        <option>SELECT CRITERIA</option>
        <option value="newest-date">Oldest date</option>
        <option value="oldest-date">Newest Releases</option>
        <option value="title">Title</option>
      </select>
    </>
  );
};

export default SortFilter;
