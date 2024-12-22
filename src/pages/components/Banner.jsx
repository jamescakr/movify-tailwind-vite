import React from "react";
import MovieTrailer from "../../common/MovieTrailer";
import { useUpcomingMoviesQuery } from "../../hooks/useUpcomingMovies";

const Banner = () => {
  const { data, isLoading, isError, error } = useUpcomingMoviesQuery();
  console.log("Upcoming Movies", data);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>{error.message}</div>;
  }

  const randomIndex = Math.floor(Math.random() * data.results.length);
  console.log("RANDOM INDEX", randomIndex);
  const selectRandomMovie = data.results[randomIndex];
  const movieId = selectRandomMovie.id;

  return (
    <div className="relative h-screen">
      <MovieTrailer movieId={movieId} />
      <div className="absolute top-[25%] left-[5%] font-bold text-8xl z-20">
        {selectRandomMovie.title.length > 20
          ? selectRandomMovie.title.substring(0, 20)
          : selectRandomMovie.title}
      </div>
      <div className="absolute top-[35%] left-[5%] text-2xl z-20 w-1/3">
        {selectRandomMovie.overview.length > 300
          ? selectRandomMovie.overview.substring(0, 300) + "..."
          : selectRandomMovie.overview}
      </div>
    </div>
  );
};

export default Banner;
