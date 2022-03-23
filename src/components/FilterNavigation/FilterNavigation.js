import React from "react";
import { useDispatch } from "react-redux";
import { filterMovie } from "../../store/actionCreators";
import { Filter } from "./styles/FilterNavigation";

const FilterNavigation = () => {
  const dispatch = useDispatch();
  return (
    <Filter>
      <button onClick={() => dispatch(filterMovie("All"))}>All</button>
      <button onClick={() => dispatch(filterMovie("Drama"))}>Drama</button>
      <button onClick={() => dispatch(filterMovie("Fantasy"))}>Fantasy</button>
      <button onClick={() => dispatch(filterMovie("Comedy"))}>Comedy</button>
      <button onClick={() => dispatch(filterMovie("Action"))}>Action</button>
    </Filter>
  );
};

export default FilterNavigation;
