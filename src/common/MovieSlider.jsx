import React from "react";
import Carousel from "react-multi-carousel";
import "../App.css";
import MovieCard from "./MovieCard";

const MovieSlider = ({ title, movies, responsive }) => {
  return (
    <div className="overflow-hidden h-96">
      <h3 className="text-[rgb(226,226,226)] text-3xl font-bold ml-14 mb-6 mt-14">
        {title}
      </h3>
      <Carousel
        responsive={responsive}
        infinite={true}
        containerClass="ml-14"
        itemClass=""
        centerMode={false}
        slidesToSlide={responsive.tablet.items}
      >
        {movies.map((movie, index) => (
          <MovieCard movie={movie} key={index} />
        ))}
      </Carousel>
    </div>
  );
};

export default MovieSlider;
