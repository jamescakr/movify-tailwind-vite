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
          className="flex items-center justify-center border-2 border-[rgb(147,147,147)] hover:border-white rounded-full w-9 h-9 mt-3 mx-2"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <ThumbsUp
            className={`h-4 w-4 transition-all duration-1000 delay-1000 ${
              isHovered ? "opacity-0" : "opacity-100"
            }`}
            strokeWidth={3}
          />
          <LikeIconList
            className={`transition-all duration-1000 delay-1000 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          />
        </button>
      </div>
    </div>
  );
};

export default ActionButton;
