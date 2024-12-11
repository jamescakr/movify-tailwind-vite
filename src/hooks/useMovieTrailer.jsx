import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchMovieTrailer = (movieId) => {
  return api.get(`/movie/${movieId}/videos`);
};

export const useMovieTrailerQuery = (movieId) => {
  return useQuery({
    queryKey: ["play-trailer", movieId],
    queryFn: () => fetchMovieTrailer(movieId),
    // select: (result) => result.data.results,
  });
};
