import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import Shorten from "../Shorten";

import { removeMovieActionCreator } from "../../store/actionCreators";
import { Link } from "react-router-dom";
import { Card, CardDetails, Image } from "./styles/MovieCardStyles";

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
    <Card>
      <Link to={`/movie/${id}`}>
        <Image src={poster_path} alt={title} onError={broken} />
        <CardDetails>
          <div>
            <h4>{title}</h4>
            <p> {genres}</p>
          </div>
          <button>{Shorten(release_date)}</button>
          <button onClick={() => dispatch(removeMovieActionCreator(id))}>
            remove movie
          </button>{" "}
        </CardDetails>
      </Link>
    </Card>
  );
};

MovieCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default MovieCard;
