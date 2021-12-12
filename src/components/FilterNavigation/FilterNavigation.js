import React from "react";

const FilterNavigation = (prop) => {
  return (
    <>
      <button onClick={() => prop.changeFilter(prop.all)}>All</button>
      <button onClick={() => prop.changeFilter(prop.fantasy)}>Fantasy</button>
      <button onClick={() => prop.changeFilter(prop.drama)}>Drama</button>
      <button onClick={() => prop.changeFilter(prop.crime)}>Crime</button>
      <button onClick={() => prop.changeFilter(prop.action)}>Action</button>
    </>
  );
};

export default FilterNavigation;
