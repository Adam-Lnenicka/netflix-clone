import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeMovieActionCreator } from "../../store/actionCreators";
import Shorten from "../CompoundFunctions/Shorten";

const MovieCard = ({
  id,
  poster_path,
  title,
  broken,
  release_date,
  genres,
}) => {
  const dispatch = useDispatch();

  return (
    <div className="card">
      <Link to={`/movie/${id}`}>
        <img
          className="card-image"
          src={poster_path}
          alt={title}
          onError={broken}
        />
        <div className="card-details">
          <div>
            <h4>{title}</h4>
            <p> {genres}</p>
          </div>
          <button>{Shorten(release_date)}</button>
          <button onClick={() => dispatch(removeMovieActionCreator(id))}>
            remove movie
          </button>{" "}
        </div>
      </Link>
    </div>
  );
};

MovieCard.propTypes = {
  poster_path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  release_date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default MovieCard;
