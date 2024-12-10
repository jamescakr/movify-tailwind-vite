import React from "react";
import { usePopularMoviesQuery } from "../../../hooks/usePopularMovies";
import "react-multi-carousel/lib/styles.css";
import MovieSlider from "../../../common/MovieSlider/MovieSlider";
import { responsive } from "../../../constants/responsive";
import LoadingSpinner from "./LoadingSpinner";

const PopularMovieSlide = () => {
  const {
    data,
    isLoading,
    isError,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = usePopularMoviesQuery();

  console.log("popular moviesss", data);

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

  const movies = data.pages.flatMap((page) => page.results);
  //이거부터 해결해야함 왜 되는지 모르겠음..

  return (
    <div>
      <MovieSlider title="Popular Movies" movies={movies} responsive={responsive} />
    </div>
  );
};

export default PopularMovieSlide;
