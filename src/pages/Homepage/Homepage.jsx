import React from "react";
import Banner from "./components/Banner/Banner";
import PopularMovieSlide from "./components/PopularMoviesSlide/PopularMovieSlide";

const Homepage = () => {
  return (
    <div className="h-screen">
      <Banner />
      <PopularMovieSlide />
    </div>
  );
};

export default Homepage;
