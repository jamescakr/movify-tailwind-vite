import React, { useState } from "react";
import { Check, X, Plus, ThumbsUp } from "lucide-react";
import LikeIconList from "./LikeIconList";

const ActionButton = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const toggleCheckState = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div>
      <div className="flex opacity-0 group-hover:opacity-100 group-hover:bg-[rgb(40,40,40)] duration-200 delay-500 h-14 rounded-b-lg">
        <button
          className="flex items-center justify-center border-2 border-[rgb(147,147,147)] hover:border-white rounded-full w-9 h-9 mt-3 mx-2"
          onClick={() => toggleCheckState()}
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
  );
};

export default ActionButton;
