import React from "react";
import { useDispatch } from "react-redux";
import { filterMovie } from "../../store/actionCreators";

const FilterNavigation = () => {
  const dispatch = useDispatch();
  const MOVIE_GENRES = ["Fantasy", "Drama", "Comedy", "Action"];
  return (
    <div className="filter-navigation">
      {/* <button
        onClick={() =>
          dispatch(
            filterMovie(
              MOVIE_GENRES.map((g) => {
                g;
              })
            )
          )
        }
      >
        {MOVIE_GENRES.map((g) => {
          g;
        })}
      </button> */}
      <button onClick={() => dispatch(filterMovie("All"))}>All</button>
      <button onClick={() => dispatch(filterMovie("Drama"))}>Drama</button>
      <button onClick={() => dispatch(filterMovie("Fantasy"))}>Fantasy</button>
      <button onClick={() => dispatch(filterMovie("Comedy"))}>Comedy</button>
      <button onClick={() => dispatch(filterMovie("Action"))}>Action</button>
    </div>
  );
};

export default FilterNavigation;
