import React from "react";
import Banner from "./components/Banner";
import PopularMovieSlide from "./components/PopularMovieSlide";
import TopRatedMovieSlide from "./components/TopRatedMovieSlide";
import UpcomingMovieSlide from "./components/UpcomingMovieSlide";

const Homepage = () => {
  return (
    <div>
      <Banner />
      <div>
        <PopularMovieSlide />
        <TopRatedMovieSlide />
        <UpcomingMovieSlide />
      </div>
    </div>
  );
};

export default Homepage;
