import React from "react";

const InnerBanner = (prop) => {
  return (
    <div className="inner-banner">
      {/* <button onClick={sortedMovieData} className="button-basic">
          sort
        </button> */}
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
      <br />
    </div>
  );
};
export default InnerBanner;
