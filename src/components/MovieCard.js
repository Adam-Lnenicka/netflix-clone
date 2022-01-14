import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { removeMovieActionCreator } from "../store/actionCreators";
import { Link } from "react-router-dom";

const MovieCard = (prop) => {
  const dispatch = useDispatch();

  return (
    <div className="card">
      <Link to={`/movie/${prop.id}`}>
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
          <button onClick={() => dispatch(removeMovieActionCreator(prop.id))}>
            remove movie
          </button>{" "}
        </div>
      </Link>
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
