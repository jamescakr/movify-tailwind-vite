import React, { useState } from "react";
import { Check, Plus, ThumbsUp } from "lucide-react";
import LikeIconList from "./LikeIconList";
import TooltipButton from "./TooltipButton";

const ActionBox = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const toggleCheckState = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div>
      <div
        onClick={(event) => event.stopPropagation()}
        className="relative flex opacity-0 group-hover:opacity-100 group-hover:bg-[rgb(40,40,40)] duration-200 delay-500 h-14 rounded-b-lg"
      >
        <TooltipButton
          icon={isChecked ? <Check /> : <Plus />}
          tooltip={isChecked ? "Remove from My List" : "Add to My List"}
          onClick={toggleCheckState}
        />
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative inline-block"
        >
          <TooltipButton icon={<ThumbsUp />} />
          <LikeIconList
            isVisible={isHovered}
            className="absolute top-1 left-1/2 bg-[rgb(60,60,60)] shadow-2xl transform -translate-x-1/2 transition-all duration-300 ease-out"
          />
        </div>
      </div>
    </div>
  );
};

export default ActionBox;
