import React from "react";
import PropTypes from "prop-types";

const MovieCard = ({
  myFunction,
  poster_path,
  title,
  movie,
  genres,
  release_date,
}) => {
  return (
    <div className="card" onClick={() => myFunction(movie)}>
      <img className="card-image" src={poster_path} alt={title} />
      <div className="card-details">
        <div>
          <h4>{title}</h4>
          <p> {genres}</p>
        </div>
        <button>{release_date.slice(0, 4)}</button>
      </div>
    </div>
  );
};

MovieCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default MovieCard;
