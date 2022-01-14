import React from "react";
import Footer from "../components/Footer/Footer";
import InnerBanner from "../components/InnerBanner/InnerBanner";
import Navigation from "../components/FilterNavigation/Navigation";
import MovieCardsContainer from "../components/MovieCardsContainer/MovieCardsContainer";

const Home = () => {
  return (
    <>
      <InnerBanner />
      <Navigation />
      <MovieCardsContainer />
      <Footer />
    </>
  );
};

export default Home;
