import React, { useState } from "react";
import { Check, X, Plus, ThumbsUp, ThumbsDown, HandHeart } from "lucide-react";
import LikeIconList from "../LikeIconList";

const MovieCard = ({ movie }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const FromPlusToCheck = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div>
      <div
        style={{
          backgroundImage: `url('https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path}')`,
        }}
        className="bg-cover cursor-pointer w-40 h-60 duration-200 delay-500 rounded-t-md hover:scale-125 hover:-translate-y-20 group"
      >
        <div className="bg-[rgba(43,41,41,0.5)] opacity-0 hover:opacity-100 duration-200 delay-500 w-full h-full">
          <h1 className="text-2xl h-16">{movie.title}</h1>
          <div>
            <div>{movie.adult ? "over18" : "under18"}</div>
            <div>{movie.original_language}</div>
            <div>{movie.popularity}</div>
          </div>
        </div>

        {/* icons setting */}
        <div className="flex opacity-0 group-hover:opacity-100 group-hover:bg-[rgb(40,40,40)] duration-200 delay-500 h-14 rounded-b-lg">
          <button
            className="flex items-center justify-center border-2 border-[rgb(147,147,147)] hover:border-white rounded-full w-9 h-9 mt-3 mx-2"
            onClick={() => FromPlusToCheck()}
          >
            {isChecked ? <Check /> : <Plus />}
          </button>
          <button className="flex items-center justify-center border-2 border-[rgb(147,147,147)] hover:border-white rounded-full w-9 h-9 mt-3 mx-2">
            <X className="h-5 w-5" strokeWidth={3} />
          </button>
          <button
            className="flex items-center justify-center border-2 border-[rgb(147,147,147)] hover:border-white delay-500 duration-500 rounded-full w-9 h-9 mt-3 mx-2"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {isHovered ? (
              <LikeIconList />
            ) : (
              <ThumbsUp className="h-4 w-4" strokeWidth={3} />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
