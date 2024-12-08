import React from "react";
import { usePopularMoviesQuery } from "../../../hooks/usePopularMovies";
import "react-multi-carousel/lib/styles.css";
import MovieSlider from "../../../common/MovieSlider/MovieSlider";
import { responsive } from "../../../constants/responsive";
import LoadingSpinner from "./LoadingSpinner";

const PopularMovieSlide = () => {
  const { data, isLoading, isError, error } = usePopularMoviesQuery();

  if (isLoading) {
    return <LoadingSpinner />;
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
      <MovieSlider
        title="Popular Movies"
        movies={data.results}
        responsive={responsive}
      />
    </div>
  );
};

export default PopularMovieSlide;
