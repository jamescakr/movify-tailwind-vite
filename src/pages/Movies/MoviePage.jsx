import React from "react";
import { useSearchMovieQuery } from "../../hooks/useSearchMovie";
import { useSearchParams } from "react-router-dom";
import MovieCard from "../../common/MovieCard/MovieCard";

const MoviePage = () => {
  const [query, setQuery] = useSearchParams();
  const keyword = query.get("q");

  const { data, isLoading, isError, error } = useSearchMovieQuery({ keyword });
  console.log("search movie is ??", data);

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 lg:col-span-4 border border-red-600">
          filter area
        </div>
        <div className="col-span-12 lg:col-span-8 border border-green-600">
          <div className="grid grid-cols-12 gap-4">
            {data?.results.map((movie, index) => (
              <div className="col-span-12 md:col-span-4 lg:col-span-3" key={index}>
                <MovieCard movie={movie} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviePage;
