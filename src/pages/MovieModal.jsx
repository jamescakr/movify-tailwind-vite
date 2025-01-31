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
            <div className="absolute bottom-[5%] left-[5%] text-3xl font-bold z-50 text-white">
              {data?.title}
            </div>
            <div className="absolute bottom-[20%] left-[5%] z-50 transform scale-125">
              <ActionBox />
            </div>
            <div className="absolute bottom-0 left-0 w-full h-56 bg-gradient-to-b from-transparent via=[rgba(24,24,24,0.5)] to-[rgb(24,24,24)] pointer-events-none" />
          </div>

          {/* movie info box */}
          <div className="flex relative h-[40%] bg-[rgb(24,24,24)] text-[rgb(175,175,175)]">
            <div className="w-3/5 p-10">
              <div className="flex mb-5">
                <div className="mr-3">{data.release_date.slice(0, 4)}</div>
                <div>
                  {hours}h {minutes}m
                </div>
              </div>
              <div>
                {data.overview.length > 200
                  ? data.overview.substring(0, 200) + "..."
                  : data.overview}
              </div>
            </div>
            <div className="w-2/5 p-10">
              <div>
                <span className="text-[#777]">Genre : </span>
                <span>{data.genres.map((genre) => genre.name)}</span>
              </div>
              <span className="text-[#777]">Cast :</span>
              <span>{data?.credits?.cast[0]?.name || "N/A"}</span>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </ModalPortal>
  );
};

export default MovieModal;
