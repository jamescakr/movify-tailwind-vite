import React, { useEffect, useState } from "react";
import { useSearchMovieQuery } from "../hooks/useSearchMovie";
import { useSearchParams } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import MovieCard from "../common/MovieCard";
import LoadingSpinner from "../pages/components/LoadingSpinner";
import GenreFilter from "../common/GenreFilter";

const MoviePage = () => {
  const [query, setQuery] = useSearchParams();
  const keyword = query.get("q");
  const [selectedGenre, setSelectedGenre] = useState(null);

  const {
    data,
    isLoading,
    isError,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
  } = useSearchMovieQuery({ keyword, selectedGenre });
  console.log("search movie is ??", data);

  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, isFetchingNextPage]);

  const allMovies = data?.pages?.flatMap((page) => page.results) || [];
  const filteredMovies = selectedGenre
    ? allMovies.filter((movie) => movie.genre_ids.includes(Number(selectedGenre)))
    : allMovies;

  const noResultFound = !isLoading && !isFetching && filteredMovies.length === 0;

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-12 gap-4 mt-12">
        <div className="col-span-12 lg:col-span-4">
          <div className="ml-10 mb-5 text-2xl">Genre</div>
          <GenreFilter
            selectedGenre={selectedGenre}
            onGenreSelect={setSelectedGenre}
          />
        </div>
        <div className="col-span-12 lg:col-span-8">
          <div className="grid grid-cols-12 gap-4">
            {noResultFound ? (
              <div className="col-span-12 text-sm md:text-lg">
                <div className="ml-3 sm:ml-0 mb-5">
                  Oops! We couldn’t find anything matching "{keyword}".
                </div>
                <ul className="ml-3 sm:ml-0 mb-3 list-disc">
                  Not sure where to start?
                  <li className="ml-3 lg:ml-10">Double-checking your spelling</li>
                  <li className="ml-3 lg:ml-10">
                    Searching for a movie, actor or genre
                  </li>
                  <li className="ml-3 lg:ml-10">Browsing popular picks instead!</li>
                </ul>
              </div>
            ) : (
              filteredMovies.map((movie) => (
                <div
                  className="col-span-12 md:col-span-4 lg:col-span-3"
                  key={movie.id}
                >
                  <MovieCard movie={movie} />
                </div>
              ))
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
