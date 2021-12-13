import React from "react";
import PropTypes from "prop-types";

const MovieCard = (prop) => {
  return (
    <div className="card" onClick={() => prop.function(prop.movie)}>
      <img
        className="card-image"
        src={prop.poster_path}
        alt={prop.title}
        onError={prop.broken}
      />
      <div className="card-details">
        <div>
          <h4>{prop.title}</h4>
          <p> {prop.genres}</p>
        </div>
        <button>{prop.release_date.slice(0, 4)}</button>
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
