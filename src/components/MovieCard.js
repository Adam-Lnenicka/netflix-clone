import React from "react";
import PropTypes from "prop-types";

const MovieCard = (props) => {
  return (
    <>
      <div className="card">
        <img className="card-image" src={props.image} alt={props.title} />
        <div className="card-details">
          <div>
            <h4>{props.title}</h4>
            <p>{props.description}</p>
          </div>
          <button>{props.year}</button>
          <button onClick={() => props.onClick(props.movie)}>test</button>
        </div>
      </div>
    </>
  );
};

MovieCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default MovieCard;
