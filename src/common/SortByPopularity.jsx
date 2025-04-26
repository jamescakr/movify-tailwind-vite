import React, { useState } from "react";

const SortByPopularity = ({ movies, onSorted }) => {
  const [active, setActive] = useState(false);

  const mostPopular = () => {
    const sortedMovies = [...movies].sort((a, b) => b.popularity - a.popularity);
    onSorted(sortedMovies);
    setActive("most");
  };

  const leastPopular = () => {
    const sortedMovies = [...movies].sort((a, b) => a.popularity - b.popularity);
    onSorted(sortedMovies);
    setActive("least");
  };

  return (
    <div>
      <div>
        <button
          className={`w-auto h-8 px-4 m-2 rounded-lg bg-red-600 font-bold ${
            active === "most" ? "border-2 border-white" : "border-transparent"
          }`}
          onClick={mostPopular}
        >
          Most Popular
        </button>
        <button
          className={`w-auto h-8 px-4 m-2 rounded-lg bg-green-600 font-bold ${
            active === "least" ? "border-2 border-white" : "border-transparent"
          }`}
          onClick={leastPopular}
        >
          Least Popular
        </button>
      </div>
    </div>
  );
};

export default SortByPopularity;
