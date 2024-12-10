import React, { useEffect } from "react";
import { useSearchMovieQuery } from "../../hooks/useSearchMovie";
import { useSearchParams } from "react-router-dom";
import MovieCard from "../../common/MovieCard/MovieCard";
import { useInView } from "react-intersection-observer";
import LoadingSpinner from "../Homepage/components/LoadingSpinner";

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
  console.log("search movie is ??", data);

  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView]);

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 lg:col-span-4 border border-red-600">
          filter area
        </div>
        <div className="col-span-12 lg:col-span-8 border border-green-600">
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
      <h1 className="text-4xl flex justify-center" ref={ref}>
        Load More
      </h1>
    </div>
  );
};

export default MoviePage;
