import React, { useState } from "react";
import MovieTrailer from "../common/MovieTrailer";
import ModalPortal from "../common/ModalPortal";
import { X } from "lucide-react";
import { useMovieDetailQuery } from "../hooks/useMovieDetail";
import ActionBox from "../common/ActionBox";
import ReviewModal from "./ReviewModal.jsx";

const MovieModal = ({ movieId, onClose }) => {
  const [showReview, setShowReview] = useState(false);
  const { data, isLoading, isError } = useMovieDetailQuery(movieId);
  console.log("Detail DATA", data);

  if (isLoading) {
    return null;
  }

  const runtime = data.runtime;
  const hours = Math.floor(runtime / 60);
  const minutes = runtime % 60; //60으로 나눈 후 "나머지값" 반환

  const castList = (data?.credits?.cast || []).slice(0, 3);
  const actorNames =
    castList.length > 0 ? castList.map((cast) => cast.name).join(", ") : "N/A";

  return (
    <ModalPortal>
      <div
        className="fixed inset-0  bg-black bg-opacity-60 flex justify-center items-center z-50"
        onClick={(e) => {
          // console.log("overlay clicked!!!");
          onClose();
        }}
      >
        <div
          className="relative bg-[rgb(24,24,24)] rounded-lg shadow-lg max-w-5xl w-full md:w-3/5 h-4/5 overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
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
            <div className="absolute bottom-[5%] left-[5%] text-2xl md:text-3xl font-bold z-50 text-white">
              {data?.title}
            </div>
            <div className="absolute bottom-[20%] left-[5%] z-50 transform scale-125">
              <ActionBox />
            </div>
            <div className="absolute bottom-0 left-0 w-full h-56 bg-gradient-to-b from-transparent via=[rgba(24,24,24,0.5)] to-[rgb(24,24,24)] pointer-events-none" />
          </div>

          {/* movie info box */}
          <div className="grid grid-cols-1 sm:grid-cols-2 relative h-[40%] bg-[rgb(24,24,24)] text-[rgb(175,175,175)]">
            <div className="sm:col-span-1 w-full p-10">
              <div className="flex mb-5 gap-5">
                <div>{data.release_date.slice(0, 4)}</div>
                <div>
                  {hours}h {minutes}m
                </div>
                <div className="border border-[rgba(255,255,255,0.4)] rounded-md px-2 text-sm">
                  HD
                </div>
              </div>
              <div>
                {data.overview.length > 200
                  ? data.overview.substring(0, 200) + "..."
                  : data.overview}
              </div>
            </div>

            <div className="sm:col-span-1 w-full p-10 gap-5">
              <div>
                <span className="text-[#777]">Genre: </span>
                <span>{data.genres.map((genre) => genre.name).join(", ")}</span>
              </div>
              <div>
                <span className="text-[#777]">Cast: </span>
                <span>{actorNames}</span>
              </div>
              <button
                className="flex justify-center items-center bg-red-600 rounded-lg text-lg w-28 h-10 p-5 text-white"
                onClick={() => setShowReview(true)}
              >
                Reviews
              </button>
              {showReview && (
                <ReviewModal
                  movieId={movieId}
                  onClose={() => setShowReview(false)}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </ModalPortal>
  );
};

export default MovieModal;
