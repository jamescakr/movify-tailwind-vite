import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchMovies } from "../utils/api";

// await new Promise((resolve) => setTimeout(resolve, 10000)); >> for loading spinner test

export const usePopularMoviesQuery = () => {
  return useInfiniteQuery({
    queryKey: ["movie-popular"],
    queryFn: ({ pageParam = 1 }) => fetchMovies("/movie/popular", pageParam),
    getNextPageParam: (lastPage) => {
      if (lastPage.page < lastPage.total_pages) {
        return lastPage.page + 1;
      }
      return undefined;
    },
    initialPageParam: 1,
  });
};
