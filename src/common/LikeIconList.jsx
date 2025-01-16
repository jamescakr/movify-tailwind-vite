import { useState } from "react";
import { Heart, ThumbsDown, ThumbsUp } from "lucide-react";
import Tooltip from "./Tooltip";

// 전체적으로 코드를 refactoring 한 이후 이해가 어려워짐...ㅠㅠ
const LikeIconList = ({ className, isVisible }) => {
  const [hoveredButton, setHoveredButton] = useState(null);
  const [filledState, setFilledState] = useState({
    ThumbsDown: false,
    ThumbsUp: false,
    Heart: false,
  });

  const toggleClick = (buttonName) => {
    setFilledState(() => ({
      ThumbsUp: false,
      ThumbsDown: false,
      Heart: false,
      [buttonName]: true,
    }));
  };

  const buttons = [
    {
      name: "ThumbsDown",
      icon: (isFilled) => (
        <ThumbsDown
          className={`w-6 h-6 ${isFilled ? "fill-current text-white" : ""}`}
        />
      ),
      tooltip: "Not for me",
    },
    {
      name: "ThumbsUp",
      icon: (isFilled) => (
        <ThumbsUp
          className={`w-6 h-6 ${isFilled ? "fill-current text-white" : ""}`}
        />
      ),
      tooltip: "I like it",
    },
    {
      name: "Heart",
      icon: (
        isFilled //const isFilled 부분이 return안에서 정의되었고 정의부분이 실행되기전에 isFilled ? 이 부분이 먼저 실행되므로 >> 함수로 바꾸고 아래 70번 줄에 나온 button.icon(isFilled) 코드가 실행될때 동적인 값을 받아 실행되게끔 한다
      ) => (
        <Heart className={`w-6 h-6 ${isFilled ? "fill-current text-white" : ""}`} />
      ),
      tooltip: "Love this!!",
    },
  ];

  return (
    <div
      className={`flex items-center justify-center bg-[rgb(35,35,35)] w-40 h-12 rounded-full shadow-lg 
        ${
          isVisible
            ? "opacity-100 pointer-events-auto scale-100"
            : "opacity-0 pointer-events-none scale-90"
        }
        ${className}`}
    >
      {buttons.map((button) => {
        const isFilled = filledState[button.name]; //이 부분은 아직도 이해가 잘안됨. isFilled가 분명 정의 안하고도 쓸수있다고 했던것 같은데...

        return (
          <button
            key={button.name}
            className="flex items-center justify-center hover:bg-[rgb(45,45,45)] rounded-full w-9 h-9 mx-1 pointer-events-auto"
            onMouseEnter={() => setHoveredButton(button.name)}
            onMouseLeave={() => setHoveredButton(null)}
            onClick={() => toggleClick(button.name)}
          >
            {typeof button.icon === "function" ? button.icon(isFilled) : button.icon}
            {hoveredButton === button.name && <Tooltip tooltip={button.tooltip} />}
          </button>
        );
      })}
    </div>
  );
};

export default LikeIconList;
