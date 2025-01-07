import React from "react";
import MovieSlider from "../../common/MovieSlider";
import { responsive } from "../../constants/responsive";
import { useTopRatedMoviesQuery } from "../../hooks/useTopRatedMovies";

const TopRatedMovieSlide = () => {
  const { data, isLoading, isError, error } = useTopRatedMoviesQuery();
  // console.log("Top Rated Movies DATA", data);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>{error.message}</div>;
  }

  if (error) {
    console.log("error occurred from TopRatedMovieSlide", error);
  }

  return (
    <div>
      <MovieSlider
        title="Top Rated Movies"
        movies={data.results}
        responsive={responsive}
      />
    </div>
  );
};

export default TopRatedMovieSlide;
