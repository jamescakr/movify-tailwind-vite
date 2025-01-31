import React, { useState } from "react";
import { Check, Plus, ThumbsUp } from "lucide-react";
import LikeIconList from "./LikeIconList";
import TooltipButton from "./TooltipButton";

const ActionBox = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  //lifting state from LikeIconList to ActionBox
  //상태관리를 부모에서 함으로써 onMouseLeave가 되어도 언마운트 되지않고 마운트 상태를 유지한다. 즉, 흰색아이콘 표시가 유지된다 -> props로 넘겨주기
  const [filledState, setFilledState] = useState({
    ThumbsDown: false,
    ThumbsUp: false,
    Heart: false,
  });

  const toggleCheckState = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div>
      <div
        onClick={(event) => event.stopPropagation()}
        className="relative flex duration-200 delay-500 rounded-b-lg"
      >
        <TooltipButton
          icon={isChecked ? <Check /> : <Plus />}
          tooltip={isChecked ? "Remove from My List" : "Add to My List"}
          onClick={toggleCheckState}
        />
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative"
        >
          <TooltipButton icon={<ThumbsUp className="w-5 h-5" />} />
          {isHovered && (
            <LikeIconList
              className="absolute top-1 left-1/2 bg-[rgb(60,60,60)] shadow-2xl transform -translate-x-1/2 "
              filledState={filledState}
              setFilledState={setFilledState}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ActionBox;
