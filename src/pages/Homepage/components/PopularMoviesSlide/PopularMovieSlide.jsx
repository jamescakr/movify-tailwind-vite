import React from "react";
import { usePopularMoviesQuery } from "../../../../hooks/usePopularMovies";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MovieCard from "../MovieCard/MovieCard";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 8,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const PopularMovieSlide = () => {
  const { data, isLoading, isError, error } = usePopularMoviesQuery();

  if (isLoading) {
    return <h1 className="text-2xl">Loading...</h1>;
  }

  if (isError) {
    return (
      <div className="bg-red-600 rounded-lg text-white p-4 shadow-lg max-w-md mx-auto">
        {error.message}
      </div>
    );
  }

  return (
    <div>
      <h3>Popular Movies</h3>
      <Carousel
        responsive={responsive}
        infinite={true}
        containerClass="carousel-container h-[28rem] border border-red-600"
        itemClass="movie-slider p-1"
        centerMode={false}
      >
        {data.results.map((movie, index) => (
          <MovieCard movie={movie} key={index} />
        ))}
      </Carousel>
      ;
    </div>
  );
};

export default PopularMovieSlide;
