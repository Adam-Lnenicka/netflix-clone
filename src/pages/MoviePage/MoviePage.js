import React from "react";
import Navigation from "../../components/FilterNavigation/Navigation";
import Footer from "../../components/Footer/Footer";
import MovieBanner from "../../components/InnerBanner/MovieBanner";
import MovieCardsContainer from "../../components/MovieCardsContainer/MovieCardsContainer";

const MoviePage = () => {
  return (
    <>
      <MovieBanner />
      <Navigation />
      <MovieCardsContainer />
      <Footer />
    </>
  );
};

export default MoviePage;
