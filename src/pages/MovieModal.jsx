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

  const runtime = data.runtime;
  const hours = Math.floor(runtime / 60);
  const minutes = runtime % 60; //60으로 나눈 후 "나머지값" 반환

  return (
    <ModalPortal>
      <div className="fixed inset-0  bg-black bg-opacity-60 flex justify-center items-center z-50">
        <div className="relative bg-[rgb(24,24,24)] rounded-lg shadow-lg max-w-5xl w-3/5 h-4/5">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            className="absolute top-5 right-5 flex justify-center items-center bg-[rgb(24,24,24)] w-10 h-10 rounded-full z-10"
          >
            <X className="w-7 h-7" strokeWidth={1} />
          </button>
          <div className="relative h-[60%]">
            <MovieTrailer movieId={movieId} iframeClassName="top-0" />
            <div className="absolute top-64 left-10 z-50 border border-red-600 rounded-lg">
              <ActionBox />
            </div>
            <div className="absolute bottom-0 left-0 w-full h-56 bg-gradient-to-b from-transparent via=[rgba(24,24,24,0.5)] to-[rgb(24,24,24)] pointer-events-none" />
          </div>

          <div className="relative h-[40%] bg-[rgb(24,24,24)] text-[rgb(175,175,175)]">
            <div className="flex py-5 m-10">
              <div>{data.release_date.slice(0, 4)}</div>
              <div>
                {hours}h {minutes}m
              </div>
            </div>
            <div>{data.title}</div>
            <div>{data.overview}</div>
            <div>
              <div>Genre : {data.genres.map((genre) => genre.name)}</div>
              <div>Cast : {data?.credits?.cast[0]?.name || "N/A"}</div>
            </div>
          </div>
        </div>
      </div>
    </ModalPortal>
  );
};

export default MovieModal;
