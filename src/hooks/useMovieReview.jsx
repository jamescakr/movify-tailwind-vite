import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchMovieReview = (movieId) => {
  return api.get(`/movie/${movieId}/reviews`);
};

export const useMovieReviewQuery = (movieId) => {
  return useQuery({
    queryKey: ["reviews", movieId],
    queryFn: () => fetchMovieReview(movieId),
    select: (result) => result.data.results,
  });
};
