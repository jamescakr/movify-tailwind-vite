import React from "react";
import { useMovieGenreQuery } from "../hooks/useMovieGenre";

const GenreList = ({ movie }) => {
  const { data: genreData } = useMovieGenreQuery();

  const showGenre = (genreIdList) => {
    // console.log("genre DATA", genreData);
    if (!genreData) return [];
    const genreNameList = genreIdList.map((id) => {
      const matchedGenre = genreData.find((genre) => genre.id === id);
      return matchedGenre.name;
    });

    return genreNameList;
  };

  return (
    <div>
      <div className="flex flex-wrap w-auto gap-1 ml-2">
        {showGenre(movie.genre_ids).map((genre, index) => (
          <div
            className="flex justify-center items-center bg-gradient-to-tr from-orange-400 via-red-600 to-black rounded-lg h-6 px-1 text-xs font-bold"
            key={index}
          >
            {genre}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GenreList;
