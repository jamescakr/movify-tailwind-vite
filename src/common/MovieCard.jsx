import React, { useState, useEffect } from "react";
import GenreList from "./GenreList";
import ActionBox from "./ActionBox";
import MovieModal from "../pages/MovieModal";

const MovieCard = ({ movie }) => {
  // console.log("movie???", movie);

  const [showModal, setShowModal] = useState(false);

  const handleMovieClick = () => {
    setShowModal(true);
  };

  useEffect(() => {
    console.log("showModal123:", showModal);
  }, [showModal]);

  return (
    <div
      style={{
        backgroundImage: `url('https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path}')`,
      }}
      className="bg-cover cursor-pointer w-40 h-60 duration-200 delay-500 rounded-t-md hover:scale-125 hover:-translate-y-20 group"
      onClick={() => handleMovieClick()}
    >
      {showModal && (
        <MovieModal
          movieId={movie.id}
          onClose={() => {
            // console.log("onClose Called");
            setShowModal(false);
            // console.log("after setShowModal:", showModal);
          }}
        />
      )}
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
      <div className="relative flex opacity-0 group-hover:opacity-100 group-hover:bg-[rgb(40,40,40)] duration-200 delay-500 h-14 rounded-b-lg">
        <ActionBox />
      </div>
    </div>
  );
};

export default MovieCard;
