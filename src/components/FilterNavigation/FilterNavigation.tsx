import React from "react";
import { filterMovie } from "../../store/actionCreators";
import { useAppDispatch } from "../../store/selectors";

const FilterNavigation = () => {
  const dispatch = useAppDispatch();
  return (
    <div className="filter-navigation">
      <button onClick={() => dispatch(filterMovie("All"))}>All</button>
      <button onClick={() => dispatch(filterMovie("Drama"))}>Drama</button>
      <button onClick={() => dispatch(filterMovie("Fantasy"))}>Fantasy</button>
      <button onClick={() => dispatch(filterMovie("Comedy"))}>Comedy</button>
      <button onClick={() => dispatch(filterMovie("Action"))}>Action</button>
    </div>
  );
};

export default FilterNavigation;
