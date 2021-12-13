import React from "react";
import FilterNavigation from "../FilterNavigation/FilterNavigation";
import SortFilter from "../FilterNavigation/SortFilter";
import NewMovie from "../NewMovie/NewMovie";

const InnerBanner = (prop) => {
  return (
    <div className="inner-banner">
      <NewMovie onAddMovie={prop.onAddMovie} close={prop.close} />
      <h1>FIND YOUR MOVIE</h1>
      <form>
        <input
          type="text"
          placeholder="What do you want to watch"
          value={prop.searchTerm}
          onChange={prop.searchTermHandler}
        />
        <button type="submit" className="button-main">
          search
        </button>
      </form>
      <FilterNavigation
        all={prop.all}
        action={prop.action}
        fantasy={prop.fantasy}
        drama={prop.drama}
        crime={prop.crime}
        changeFilter={prop.changeFilter}
      />
      <SortFilter arrangeMovies={prop.arrangeMovies} />
    </div>
  );
};
export default InnerBanner;
