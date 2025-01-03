import React from "react";
import MovieTrailer from "../common/MovieTrailer";
import ModalPortal from "../common/ModalPortal";
import { X } from "lucide-react";

const MovieModal = ({ movieId, onClose }) => {
  return (
    <ModalPortal>
      <div className="fixed inset-0  bg-gray-800 bg-opacity-50 flex justify-center items-center pt-10 z-50">
        <div className="bg-black rounded-lg shadow-lg max-w-3xl w-full h-3/4 p-6">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            className="bg-[rgb(24,24,24)] w-10 h-10 rounded-full"
          >
            <X className="w-7 h-7" />
          </button>
          <MovieTrailer movieId={movieId} className="" />
        </div>
      </div>
    </ModalPortal>
  );
};

export default MovieModal;
