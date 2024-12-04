import { HandHeart, ThumbsDown, ThumbsUp } from "lucide-react";
import React from "react";

const LikeIconList = () => {
  return (
    <div>
      <div className="flex items-center justify-center bg-[rgb(35,35,35)] w-40 h-12 rounded-full shadow-lg duration-100 delay-100">
        <button className="flex items-center justify-center hover:bg-[rgb(54,54,54)] rounded-full w-9 h-9 mx-1">
          <ThumbsDown className="h-4 w-4" strokeWidth={3} />
        </button>
        <button className="flex items-center justify-center hover:bg-[rgb(54,54,54)] rounded-full w-9 h-9 mx-1">
          <ThumbsUp className="h-4 w-4" strokeWidth={3} />
        </button>
        <button className="flex items-center justify-center hover:bg-[rgb(54,54,54)] rounded-full w-9 h-9 mx-1">
          <HandHeart className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

export default LikeIconList;
