import React from "react";
import { useParams } from "react-router";
import { useApiMoviesArraySelector } from "../../store/selectors";
import { ButtonExit } from "../../styles/global/Buttons";
import Shorten from "../Shorten";
import {
  MovieContainer,
  MovieDetailsImage,
  MovieRating,
  Runtime,
} from "./styles/MovieBannerStyles";

const MovieBanner = () => {
  const { movieId } = useParams();
  const apiMoviesArray = useApiMoviesArraySelector();
  const thisMovie = apiMoviesArray.map((movie) =>
    movie.find((movie) => movie.id == movieId)
  );

  return (
    <MovieContainer>
      <MovieDetailsImage
        src={thisMovie.map((m) => m.poster_path)}
        alt={thisMovie.map((m) => m.title)}
        onError={(e) =>
          (e.target.src =
            "https://images.unsplash.com/photo-1560109947-543149eceb16?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80")
        }
      />
      <div>
        <div className="flex">
          <ButtonExit to="/">X</ButtonExit>
          <h2> {thisMovie.map((m) => m.title)}</h2>
          <MovieRating> {thisMovie.map((m) => m.vote_average)}</MovieRating>
        </div>
        <p>{thisMovie.map((m) => m.tagline)}</p>
        <Runtime>
          <p> {Shorten(thisMovie.map((m) => m.release_date))} </p>
          <p> {thisMovie.map((m) => m.runtime)} min</p>
        </Runtime>
        <p>{thisMovie.map((m) => m.overview)}</p>
      </div>
    </MovieContainer>
  );
};

export default MovieBanner;
