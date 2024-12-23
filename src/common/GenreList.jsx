import React from "react";
import { useMovieGenreQuery } from "../hooks/useMovieGenre";

const GenreList = ({ movie }) => {
  const { data: genreData } = useMovieGenreQuery();

  const showGenre = (genreIdList) => {
    // console.log("genre DATA", genreData);
    if (!genreData) return [];
    const genreNameList = genreIdList.map((id) => {
      const genreObj = genreData.find((genre) => genre.id === id);
      return genreObj.name;
    });

    return genreNameList;
  };

  return (
    <div>
      <div className="flex">
        {showGenre(movie.genre_ids).map((genre, index) => (
          <div
            className="flex justify-center items-center bg-red-500 rounded-lg w-20 h-6 text-white text-xs font-bold"
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
