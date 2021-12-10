import React from "react";
import PropTypes from "prop-types";

const MovieCard = ({ image, title, year, description }) => {
  return (
    <div className="card">
      <img className="card-image" src={image} alt={title} />
      <div className="card-details">
        <div>
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
        <button>{year}</button>
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
