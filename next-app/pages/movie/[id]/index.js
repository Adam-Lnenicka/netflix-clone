import Navigation from "../../../components/FilterNavigation/Navigation";
import Footer from "../../../components/Footer/Footer";
import MovieBanner from "../../../components/InnerBanner/MovieBanner";
import MovieCardsContainer from "../../../components/MovieCardsContainer/MovieCardsContainer";

const movie = () => {
  return (
    <>
      {" "}
      <MovieBanner />
      <Navigation />
      <MovieCardsContainer />
      <Footer />
    </>
  );
};
export default movie;
