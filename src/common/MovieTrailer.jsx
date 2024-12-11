import React from "react";
import { useMovieTrailerQuery } from "../hooks/useMovieTrailer";
import LoadingSpinner from "../pages/components/LoadingSpinner";

const MovieTrailer = ({ movieId }) => {
  const { data, isLoading, isError, error } = useMovieTrailerQuery(movieId);
  console.log("what DATA is this??", data);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (isError) {
    return (
      <div>
        <div className="bg-red-600 rounded-lg text-white p-4 shadow-lg max-w-md mx-auto">
          {error.message}
        </div>
      </div>
    );
  }

  if (error) {
    console.log("error", error);
    return <div>Failed to load movie trailer</div>;
  }

  return (
    <div className="border border-red-600 h-96 w-2/3">
      <div>video test</div>
      <div></div>
    </div>
  );
};

export default MovieTrailer;
