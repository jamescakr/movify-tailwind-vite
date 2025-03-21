import React from "react";
import { useMovieGenreQuery } from "../hooks/useMovieGenre";
import LoadingSpinner from "../pages/components/LoadingSpinner";

const GenreFilter = ({ selectedGenre, onGenreSelect }) => {
  const { data, isLoading, isError } = useMovieGenreQuery();
  //   console.log("genre???", data);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div>
      <div>
        {data?.map((genre) => (
          <button
            key={genre.id}
            className={`w-auto h-8 px-4 m-2 rounded-lg bg-gradient-to-tr from-orange-400 via-red-600 to-black font-bold ${
              selectedGenre === genre.id ? "border-2 border-white" : ""
            }`}
            onClick={() => onGenreSelect(genre.id)}
          >
            {genre.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default GenreFilter;
