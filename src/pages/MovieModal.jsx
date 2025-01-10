import React from "react";
import MovieTrailer from "../common/MovieTrailer";
import ModalPortal from "../common/ModalPortal";
import { X } from "lucide-react";
import { useMovieDetailQuery } from "../hooks/useMovieDetail";
import LoadingSpinner from "./components/LoadingSpinner";
import ActionBox from "../common/ActionBox";

const MovieModal = ({ movieId, onClose }) => {
  const { data, isLoading, isError } = useMovieDetailQuery(movieId);
  console.log("Detail DATA", data);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <ModalPortal>
      <div className="fixed inset-0  bg-black bg-opacity-60 flex justify-center items-center z-50">
        <div className="relative bg-[rgb(24,24,24)] rounded-lg shadow-lg max-w-5xl w-full h-3/4 border-2 border-blue-600">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            className="absolute top-5 right-5 flex justify-center items-center bg-[rgb(24,24,24)] w-10 h-10 rounded-full z-10"
          >
            <X className="w-7 h-7" strokeWidth={1} />
          </button>
          <div className="absolute top-60 left-10 z-30 bg-red-600">
            <ActionBox />
          </div>
          <MovieTrailer movieId={movieId} iframeClassName="top-[-23%]" />
          <div className="absolute top-[53%] border border-red-400 bg-[rgb(24,24,24)] h-2/5 w-full">
            <div>{data.title}</div>
            <div>{data.overview}</div>
            <div>Release Date : {data.release_date}</div>
            <div>Runtime : {data.runtime} min</div>
            <div>Genre : {data.genres.map((genre) => genre.name)}</div>
            <div>Cast : {data.credits.cast[0].name}</div>
          </div>
        </div>
      </div>
    </ModalPortal>
  );
};

export default MovieModal;
