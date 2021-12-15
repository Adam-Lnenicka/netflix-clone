import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterMovie } from "../../store/actionCreators";
import { count } from "../../store/actionCreators";

const FilterNavigation = () => {
  const dispatch = useDispatch();
  const c = useSelector((state) => state.count);
  return (
    <div className="filter-navigation">
      REDUX COUNT
      <h1>{c}</h1>
      <button
        onClick={() => {
          dispatch(count());
        }}
      >
        increase
      </button>
      <button onClick={() => dispatch(filterMovie(prop.all))}>All</button>
      <button onClick={() => dispatch(filterMovie(prop.fantasy))}>
        Fantasy
      </button>
      <button onClick={() => dispatch(filterMovie(prop.drama))}>Drama</button>
      <button onClick={() => dispatch(filterMovie(prop.crime))}>Crime</button>
      <button onClick={() => dispatch(filterMovie(prop.action))}>Action</button>
    </div>
  );
};

export default FilterNavigation;
