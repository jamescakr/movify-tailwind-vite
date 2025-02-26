import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchMovies } from "../utils/api";

export const useSearchMovieQuery = ({ keyword, selectedGenre }) => {
  return useInfiniteQuery({
    queryKey: ["search-movie", keyword, selectedGenre],
    queryFn: ({ pageParam = 1 }) =>
      fetchMovies(
        keyword
          ? `/search/movie?query=${keyword}${
              selectedGenre ? `&with_genres=${selectedGenre}` : ""
            }`
          : `/movie/popular${selectedGenre ? `?with_genres=${selectedGenre}` : ""}`,
        pageParam
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
