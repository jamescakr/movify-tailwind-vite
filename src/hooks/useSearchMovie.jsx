import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchMovies } from "../utils/api";

export const useSearchMovieQuery = ({ keyword }) => {
  return useInfiniteQuery({
    queryKey: ["search-movie", keyword],
    queryFn: ({ pageParams = 1 }) =>
      fetchMovies(
        keyword ? `/search/movie?query=${keyword}` : "/movie/popular",
        pageParams
      ),
    getNextPageParam: (lastPage) => {
      if (lastPage.page < lastPage.total_pages) {
        // console.log("last page is", lastPage);

        return lastPage.page + 1;
      }
      return undefined;
    },
    initialPageParam: 1,
  });
};
