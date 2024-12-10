import React from "react";
import { usePopularMoviesQuery } from "../../../hooks/usePopularMovies";

const Banner = () => {
  const { data, isLoading, isError, error } = usePopularMoviesQuery();

  if (isLoading) {
    return <h1 className="text-2xl">Loading...</h1>;
  }

  if (isError) {
    return (
      <div className="bg-red-600 text-white p-4 rounded-lg shadow-lg max-w-md mx-auto">
        {error.message}
      </div>
    );
  }

  if (error) {
    console.log("error fetching data", error);
  }
  console.log("Popular Movie for Banner", data);

  return (
    <div
      style={{
        backgroundImage: `url('https://media.themoviedb.org/t/p/w533_and_h300_bestv2${data.pages[0].results[0].poster_path}')`,
      }}
      className="h-2/5 bg-cover relative"
    >
      <div className="inset-0 bg-gradient-to-b from-transparent to-[rgb(20,20,20)] absolute"></div>
      <div className="flex flex-col justify-center pl-10 h-96">
        <h1 className="text-4xl text-white max-w-72 z-10">
          {data.pages[0].results[0].title}
        </h1>
        <p className="text-white max-w-96 z-10">
          {data.pages[0].results[0].overview}
        </p>
      </div>
    </div>
  );
};

export default Banner;
