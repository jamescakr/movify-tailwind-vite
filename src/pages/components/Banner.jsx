import React, { useState, useEffect } from "react";
import MovieTrailer from "../../common/MovieTrailer";
import { useUpcomingMoviesQuery } from "../../hooks/useUpcomingMovies";
import LoadingSpinner from "./LoadingSpinner";

const Banner = () => {
  const [showText, setShowText] = useState(true);
  const { data, isLoading, isError, error } = useUpcomingMoviesQuery();
  // console.log("Upcoming Movies", data);
  const [randomIndex, setRandomIndex] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(false);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (isError) {
    return <div>{error.message}</div>;
  }

  if (randomIndex === null) {
    setRandomIndex(() => Math.floor(Math.random() * data.results.length));
    return <LoadingSpinner />;
  }

  const selectRandomMovie = data.results[randomIndex];
  const movieId = selectRandomMovie.id;

  return (
    <div className="relative h-[40vh] sm:h-[60vh] md:h-[80vh] lg:h-screen">
      <MovieTrailer movieId={movieId} iframeClassName="top-[-17%]" />
      <div
        className={`absolute top-[25%] left-[5%] font-bold z-20 transition-all duration-[2000ms] ${
          showText
            ? "text-3xl sm:text-4xl md:text-6xl lg:text-8xl xl:text-10xl"
            : "text-2xl sm:text-3xl md:text-3xl lg:text-5xl xl:text-6xl"
        }`}
      >
        {selectRandomMovie.title.length > 20
          ? selectRandomMovie.title.substring(0, 20)
          : selectRandomMovie.title}
      </div>
      <div
        className={`absolute top-[35%] left-[5%] text-2xl z-20 w-1/3 transition-opacity duration-[2000ms]  ${
          showText ? "opacity-100" : "opacity-0"
        } ${"text-xs sm:text-sm md:text-base lg:text-xl"}`}
      >
        {selectRandomMovie.overview.length > 300
          ? selectRandomMovie.overview.substring(0, 300) + "..."
          : selectRandomMovie.overview}
      </div>
    </div>
  );
};

export default Banner;
