import React, { useState } from "react";
import { Check, Plus, ThumbsUp } from "lucide-react";
import LikeIconList from "./LikeIconList";
import TooltipButton from "./TooltipButton";
import Tooltip from "./TooltipButton";

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
        <TooltipButton
          icon={<ThumbsUp />}
          tooltip="I like this"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        />
        {isHovered && (
          <LikeIconList className="absolute top-full left-0 bg-red-600 z-50" />
        )}
      </div>
    </div>
  );
};

export default ActionBox;
