import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchMovieDetail = (movieId) => api.get(`/movie/${movieId}`);
const fetchCredits = (movieId) => api.get(`/movie/${movieId}/credits`);

const fetchMovieDetailWithCredits = async (movieId) => {
  const [movieDetailResponse, creditsResponse] = await Promise.all([
    fetchMovieDetail(movieId),
    fetchCredits(movieId),
  ]);

  return {
    // movieDetail: movieDetailResponse.data
    ...movieDetailResponse.data, //위의 코드 대신 spread 연산자를 이용 >>  한 객체안에 credits까지 같어 접근히 편함
    credits: creditsResponse.data,
  };
};

export const useMovieDetailQuery = (movieId) => {
  return useQuery({
    queryKey: ["movie-detail", movieId],
    queryFn: () => fetchMovieDetailWithCredits(movieId),
  });
};
