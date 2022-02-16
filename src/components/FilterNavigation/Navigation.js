import React from "react";
import MovieSortCriteria from "../MovieSorting/MovieSortCriteria";
import FilterNavigation from "./FilterNavigation";

const Navigation = () => {
  return (
    <div className="flex navigation">
      <FilterNavigation />
      <div className="flex">
        <p>SELECT CRITERIA</p>
        <MovieSortCriteria />
      </div>
    </div>
  );
};

export default Navigation;
