import React from "react";
import MovieCard from "../components/MovieCard";
import Footer from "../components/Footer";
import ErrorBoundary from "../components/ErrorBoundary";
// import DATA from "../MOCK_DATA.json";

const Home = () => {
  const movieData = [
    // {
    //   id: 1,
    //   title: "Two Years at Sea",
    //   description: "Documentary",
    //   year: 1993,
    //   image:
    //     "https://images.unsplash.com/photo-1560109947-543149eceb16?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fG1vdmllfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
    // },
    // {
    //   id: 2,
    //   title: "Def-Con 4",
    //   description: "Action|Sci-Fi",
    //   year: 2010,
    //   image:
    //     "https://images.unsplash.com/photo-1616530940355-351fabd9524b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fG1vdmllfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
    // },
    // {
    //   id: 3,
    //   title: "Sparrows Dance",
    //   description: "Drama|Romance",
    //   year: 2001,
    //   image:
    //     "https://images.unsplash.com/photo-1560109947-543149eceb16?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fG1vdmllfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
    // },
    // {
    //   id: 4,
    //   title:
    //     "Garden of the Finzi-Continis, The (Giardino dei Finzi-Contini, Il)",
    //   description: "Drama",
    //   year: 1988,
    //   image:
    //     "https://images.unsplash.com/photo-1560109947-543149eceb16?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fG1vdmllfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
    // },
    // {
    //   id: 5,
    //   title: "Zatoichi",
    //   description: "Action|Drama",
    //   year: 1993,
    //   image:
    //     "https://images.unsplash.com/photo-1637758180067-71d95d566a9e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=900&q=60",
    // },
    // {
    //   id: 6,
    //   title: "Natural, The",
    //   description: "Drama",
    //   year: 1973,
    //   image:
    //     "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bW92aWV8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60",
    // },
  ];
  return (
    <>
      <div className="banner">
        <div className="inner-banner">
          <h1>FIND YOUR MOVIE</h1>
          <form>
            <input type="text" placeholder="What do you want to watch?" />
            <button type="submit">search</button>
          </form>
        </div>
      </div>
      <div className="card-layout">
        <ErrorBoundary>
          {movieData.map((movie) => (
            <MovieCard
              key={movie.id}
              image={movie.image}
              title={movie.title}
              description={movie.description}
              year={movie.year}
            />
          ))}
        </ErrorBoundary>
      </div>

      <Footer />
    </>
  );
};

export default Home;
