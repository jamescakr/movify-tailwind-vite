import React from "react";
import Banner from "./components/Banner";
import PopularMovieSlide from "./components/PopularMovieSlide";
import TopRatedMovieSlide from "./components/TopRatedMovieSlide";
import UpcomingMovieSlide from "./components/UpcomingMovieSlide";

const Homepage = () => {
  return (
    <div className="relative">
      <Banner />
      <div className="absolute top-[58%] left-0 w-full z-10">
        <PopularMovieSlide />
        <TopRatedMovieSlide />
        <UpcomingMovieSlide />
      </div>
    </div>
  );
};

export default Homepage;
