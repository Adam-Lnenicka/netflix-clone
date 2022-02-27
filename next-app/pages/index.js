import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Navigation from "../components/FilterNavigation/Navigation";
import Footer from "../components/Footer/Footer";
import InnerBanner from "../components/InnerBanner/InnerBanner";
import MovieCardsContainer from "../components/MovieCardsContainer/MovieCardsContainer";
import { loadMoviesThunk } from "../store/thunk";

export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadMoviesThunk());
  }, []);
  return (
    <div>
      <InnerBanner />
      <Navigation />
      <MovieCardsContainer />
      <Footer />
    </div>
  );
}
