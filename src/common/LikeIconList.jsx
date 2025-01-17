import { useState } from "react";
import { Heart, ThumbsDown, ThumbsUp } from "lucide-react";
import Tooltip from "./Tooltip";

// 전체적으로 코드를 refactoring 한 이후 이해가 어려워짐...ㅠㅠ
const LikeIconList = ({ className, filledState, setFilledState }) => {
  const [hoveredButton, setHoveredButton] = useState(null);
  const [iconAnimation, setIconAnimation] = useState({
    ThumbsDown: "",
    ThumbsUp: "",
    Heart: "",
  });

  const toggleClick = (buttonName) => {
    setFilledState((prev) => ({
      ThumbsUp: false,
      ThumbsDown: false,
      Heart: false,
      [buttonName]: !prev[buttonName], //이 코드가 실행되기 전 위의 3줄에서 모든 아이콘이 false로 바뀌고나서 이 코드로 새로 적용이 됨
    }));
    setIconAnimation((prev) => ({
      ...prev,
      [buttonName]: "animate__animated animate__heartBeat",
    }));

    setTimeout(() => {
      setIconAnimation((prev) => ({
        ...prev,
        [buttonName]: "",
      }));
    }, 1000);

    setHoveredButton(null);
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
      className={`flex items-center justify-center bg-[rgb(35,35,35)] w-40 h-12 rounded-full shadow-lg ${className}`}
    >
      {buttons.map((button) => {
        const isFilled = filledState[button.name];
        const buttonAnimation = iconAnimation[button.name];

        return (
          <button
            key={button.name}
            className={`flex items-center justify-center hover:bg-[rgb(45,45,45)] rounded-full w-9 h-9 mx-1 ${buttonAnimation}`}
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
