import React from "react";
import MovieSortCriteria from "../MovieSortCriteria";
import FilterNavigation from "./FilterNavigation";

const Navigation = (prop) => {
  return (
    <div
      className="flex navigation"
      style={{ justifyContent: "space-between" }}
    >
      <FilterNavigation
        all={prop.all}
        action={prop.action}
        fantasy={prop.fantasy}
        drama={prop.drama}
        crime={prop.crime}
      />
      <div className="flex">
        <p>SELECT CRITERIA</p>
        <MovieSortCriteria />
      </div>
    </div>
  );
};

export default Navigation;
