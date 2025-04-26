import React, { useState } from "react";
import { useMovieReviewQuery } from "../hooks/useMovieReview";

const ReviewList = ({ movieId }) => {
  const { data, isLoading, isError, error } = useMovieReviewQuery(movieId);
  console.log("review DATA", data);
  const [expandReviews, setExpandReviews] = useState(false);

  const toggleReview = (reviewId) => {
    setExpandReviews((prev) => ({
      ...prev,
      [reviewId]: !prev[reviewId],
    }));
  };

  return (
    <div>
      <div>
        {data?.map((review) => (
          <div key={review.id}>
            <div className="bg-neutral-800 mt-10 p-5 rounded-xl">
              <div className="text-xl text-[#64FFDA]">{review?.author} </div>
              <div>
                <div className="text-gray-300">
                  {expandReviews[review.id] || review.content.length <= 150
                    ? review.content
                    : review.content.substring(0, 150) + "..."}
                </div>
                <button
                  className="text-blue-300"
                  onClick={() => toggleReview(review.id)}
                >
                  {expandReviews[review.id] ? "read less" : "read more"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewList;
