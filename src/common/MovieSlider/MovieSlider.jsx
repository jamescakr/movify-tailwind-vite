import React from "react";
import Carousel from "react-multi-carousel";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieSlider.style.css";

const MovieSlider = ({ title, movies, responsive }) => {
  return (
    <div>
      <h3>{title}</h3>
      <Carousel
        responsive={responsive}
        infinite={true}
        // containerClass="" css작업이 필요할경우 바로 테일윈드 코드를 ""안에 넣으면됨
        itemClass="movie-slider p-1"
        centerMode={false}
      >
        {movies.map((movie, index) => (
          <MovieCard movie={movie} key={index} />
        ))}
      </Carousel>
    </div>
  );
};

export default MovieSlider;
