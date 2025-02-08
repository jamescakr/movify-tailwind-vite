import React, { useEffect } from "react";
import { useSearchMovieQuery } from "../hooks/useSearchMovie";
import { useSearchParams } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import MovieCard from "../common/MovieCard";
import LoadingSpinner from "../pages/components/LoadingSpinner";

// 3. MoviePage
//  - 필터 기능구현

const MoviePage = () => {
  const [query, setQuery] = useSearchParams();
  const keyword = query.get("q");

  const {
    data,
    isLoading,
    isError,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useSearchMovieQuery({ keyword });
  // console.log("search movie is ??", data);

  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage]);

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-12 gap-4 mt-12">
        <div className="col-span-12 lg:col-span-4 border-2 border-blue-600">
          filter area
        </div>
        <div className="col-span-12 lg:col-span-8 border-2 border-green-600">
          <div className="grid grid-cols-12 gap-4">
            {data?.pages?.length ? (
              data.pages.map((page) =>
                page.results.map((movie) => (
                  <div
                    className="col-span-12 md:col-span-4 lg:col-span-3"
                    key={movie.id}
                  >
                    <MovieCard movie={movie} />
                  </div>
                ))
              )
            ) : (
              <div>No Movies found </div>
            )}
          </div>
        </div>
      </div>
      {hasNextPage && (
        <h1 className="flex justify-center" ref={ref}>
          <LoadingSpinner />
        </h1>
      )}
    </div>
  );
};

export default MoviePage;
