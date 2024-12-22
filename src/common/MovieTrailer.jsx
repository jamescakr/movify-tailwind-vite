import React from "react";
import { useMovieTrailerQuery } from "../hooks/useMovieTrailer";
import LoadingSpinner from "../pages/components/LoadingSpinner";

const MovieTrailer = ({ movieId }) => {
  const { data, isLoading, isError, error } = useMovieTrailerQuery(movieId);
  console.log("video DATA", data);

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

  const trailer = data?.find(
    (video) => video.site === "YouTube" && video.type === "Trailer"
  );

  if (!trailer) {
    return <div>No Trailer Available</div>;
  }

  const trailerURL = `https://www.youtube.com/embed/${trailer.key}?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&loop=1&showinfo=0&iv_load_policy=3`;

  return (
    <div className="relative h-full w-full overflow-hidden">
      <iframe
        className="absolute top-[-17%] left-0 w-full h-full object-cover pointer-events-none"
        width="100%"
        height="100%"
        src={trailerURL}
        title="Youtube Movie Trailer"
        frameBorder="0"
        allowFullScreen
        allow="autoplay encrypted-media"
      ></iframe>
    </div>
  );
};

export default MovieTrailer;
