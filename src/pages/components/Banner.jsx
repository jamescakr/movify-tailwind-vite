import React from "react";
import MovieTrailer from "../../common/MovieTrailer";
import { useTopRatedMoviesQuery } from "../../hooks/useTopRatedMovies";

const Banner = () => {
  const { data } = useTopRatedMoviesQuery();
  console.log("TOP RATED!!!", data);

  const movieId = data.results[0].id;

  return (
    <div>
      <MovieTrailer movieId={movieId} />
    </div>
  );
};

export default Banner;
