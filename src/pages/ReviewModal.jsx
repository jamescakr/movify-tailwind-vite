import React from "react";
import ModalPortal from "../common/ModalPortal";
import { X } from "lucide-react";
import ReviewList from "../common/ReviewList";

const ReviewModal = ({ movieId, onClose }) => {
  return (
    <ModalPortal>
      <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-[60]">
        <div
          className="relative bg-[rgb(24,24,24)] w-full sm:w-2/3 h-4/5 sm:h-3/5 rounded-lg overflow-y-auto p-6"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            className="absolute top-5 right-5 flex justify-center items-center border border-white w-10 h-10 rounded-full z-10"
          >
            <X className="w-7 h-7" strokeWidth={1} />
          </button>
          <div className="text-2xl font-semibold">Reviews</div>
          <ReviewList movieId={movieId} />
        </div>
      </div>
    </ModalPortal>
  );
};

export default ReviewModal;
