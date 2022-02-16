import React from "react";

const RemoveButton = () => {
  return (
    <button onClick={() => dispatch(removeMovieActionCreator(id))}>
      remove movie
    </button>
  );
};

export default RemoveButton;
