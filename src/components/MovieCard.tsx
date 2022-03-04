import React from "react";
import { useDispatch } from "react-redux";
import Shorten from "./Shorten";

import { removeMovieActionCreator } from "../store/actionCreators";
import { Link } from "react-router-dom";

interface MovieInterface {
  id: number;
  poster_path: string;
  title: string;
  broken: any;
  release_date: string;
  genres: string[];
}

const MovieCard = ({
  id,
  poster_path,
  title,
  broken,
  release_date,
  genres,
}: MovieInterface) => {
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

export default MovieCard;
