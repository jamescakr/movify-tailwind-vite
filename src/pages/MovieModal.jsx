import React from "react";
import MovieTrailer from "../common/MovieTrailer";
import { useUpcomingMoviesQuery } from "../hooks/useUpcomingMovies";

const MovieModal = () => {
  const { data, isLoading, isError, error } = useUpcomingMoviesQuery();
  console.log("Modal DATA???", data);

  return (
    <div>
      <div className="fixed inset-0  bg-gray-800 bg-opacity-50 flex justify-center item-center pt-10 z-50">
        <div className="bg-black rounded-lg shadow-lg max-w-3xl w-full h-3/4 p-6">
          Modal Page
          <MovieTrailer />
        </div>
      </div>
    </div>
  );
};

export default MovieModal;
