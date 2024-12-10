import React from "react";
import GenreList from "./GenreList";
import ActionButton from "./ActionButton";

const MovieCard = ({ movie }) => {
  return (
    <div
      style={{
        backgroundImage: `url('https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path}')`,
      }}
      className="bg-cover cursor-pointer w-40 h-60 duration-200 delay-500 rounded-t-md hover:scale-125 hover:-translate-y-20 group"
    >
      <div className="bg-[rgba(43,41,41,0.5)] opacity-0 hover:opacity-100 duration-200 delay-500 w-full h-full">
        <h1 className="text-2xl h-16">{movie.title}</h1>
        <div>
          <GenreList movie={movie} />
        </div>
        <div>
          <div>{movie.adult ? "over18" : "under18"}</div>
          <div>{movie.original_language}</div>
        </div>
      </div>
      <div>
        <ActionButton />
      </div>
    </div>
  );
};

export default MovieCard;
