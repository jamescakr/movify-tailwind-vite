import React, { useState } from "react";
import GenreList from "./GenreList";
import ActionButton from "./ActionButton";
import MovieModal from "../pages/MovieModal";

const MovieCard = ({ movie }) => {
  // const [selectedMovieId, setSelectedMovieId] = useState(null);
  // 내 생각엔 MovieSlider에 각종 데이터 (popular, upcoming, top)가 모여들기때문에
  // data.results가 movies형태로 props로 보내지므로 이거에서 id값을 같이 보내면
  // 굳이 moviecard에서 다시 데이터를 부를필요없이 id를 가지고올수있을듯
  // 내일 1월 3일에 이거보면 이거대로 실행해보기. 거의 알거같음!!
  const [showModal, setShowModal] = useState(false);

  const handleMovieClick = (event) => {};

  return (
    <div
      style={{
        backgroundImage: `url('https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path}')`,
      }}
      className="bg-cover cursor-pointer w-40 h-60 duration-200 delay-500 rounded-t-md hover:scale-125 hover:-translate-y-20 group"
      onClick={(event) => handleMovieClick()}
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
