import React from "react";
import MovieSortCriteria from "../MovieSortCriteria";
import FilterNavigation from "./FilterNavigation";

const Navigation = () => {
  return (
    <div
      className="flex navigation"
      style={{ justifyContent: "space-between" }}
    >
      <FilterNavigation />
      <div className="flex">
        <p>SELECT CRITERIA</p>
        <MovieSortCriteria />
      </div>
    </div>
  );
};

export default Navigation;
