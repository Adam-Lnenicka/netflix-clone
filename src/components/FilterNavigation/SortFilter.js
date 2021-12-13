import React from "react";

const SortFilter = (prop) => {
  return (
    <>
      <select className="sort-movies" onChange={prop.arrangeMovies}>
        <option>Sort Movies</option>
        <option value="newest-date">Oldest date</option>
        <option value="oldest-date">Newest Releases</option>
        <option value="title">Title</option>
      </select>
    </>
  );
};

export default SortFilter;
