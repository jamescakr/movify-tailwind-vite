import React from "react";
import Carousel from "react-multi-carousel";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieSlider.style.css";

const MovieSlider = ({ title, movies, responsive }) => {
  return (
    <div className="">
      <h3 className="text-[rgb(226,226,226)] text-2xl font-bold ml-14 mb-4 mt-14">
        {title}
      </h3>
      <Carousel
        responsive={responsive}
        infinite={true}
        containerClass="ml-14"
        itemClass=""
        centerMode={false}
        slidesToSlide={responsive.desktop.items}
      >
        {movies.map((movie, index) => (
          <MovieCard movie={movie} key={index} />
        ))}
      </Carousel>
    </div>
  );
};

export default MovieSlider;
