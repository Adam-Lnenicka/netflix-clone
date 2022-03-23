import React from "react";
import MovieSortCriteria from "../MovieSortCriteria";
import FilterNavigation from "./FilterNavigation";

const Navigation = () => {
  return (
    <Navigation className="flex">
      <FilterNavigation />
      <div className="flex">
        <p>SELECT CRITERIA</p>
        <MovieSortCriteria />
      </div>
    </Navigation>
  );
};

export default Navigation;
