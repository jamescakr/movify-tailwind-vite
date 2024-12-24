import React, { useState } from "react";
import { Check, Plus, ThumbsUp } from "lucide-react";
import LikeIconList from "./LikeIconList";
import TooltipButton from "./TooltipButton";
import Tooltip from "./TooltipButton";

const ActionButton = () => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckState = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div>
      <div
        onClick={(event) => event.stopPropagation()}
        className="flex opacity-0 group-hover:opacity-100 group-hover:bg-[rgb(40,40,40)] duration-200 delay-500 h-14 rounded-b-lg"
      >
        <TooltipButton
          icon={isChecked ? <Check /> : <Plus />}
          onClick={toggleCheckState}
        />
        <TooltipButton icon={<ThumbsUp />} tooltip="좋아요" />
      </div>
    </div>
  );
};

export default ActionButton;
