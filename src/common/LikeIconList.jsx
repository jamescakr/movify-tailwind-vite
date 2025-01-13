import { useState } from "react";
import { Heart, ThumbsDown, ThumbsUp } from "lucide-react";
import Tooltip from "./Tooltip";

// 전체적으로 코드를 refactoring 한 이후 이해가 어려워짐...ㅠㅠ
const LikeIconList = ({ className }) => {
  const [hoveredButton, setHoveredButton] = useState(null);
  const [filledState, setFilledState] = useState({
    ThumbsDown: false,
    ThumbsUp: false,
    Heart: false,
  });

  const toggleClick = (buttonName) => {
    setFilledState((prev) => ({
      ...prev, //React에서 부분변경만 되면 상태변화를 인지 못하므로, 이전 요소까지 모두 복사 붙여넣기해서 새로운 배열을 만들어서 업데이트 되도록 요청한다고 보면될듯
      //...prev : ...는 스프레드 연산자, prev는 이전상태(업데이트 직전의 현재상태)를 나타냄
      [buttonName]: !prev[buttonName],
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
      className={`flex items-center justify-center bg-[rgb(35,35,35)] w-40 h-12 rounded-full shadow-lg ${className}`}
    >
      {buttons.map((button) => {
        const isFilled = filledState[button.name]; //이 부분은 아직도 이해가 잘안됨. isFilled가 분명 정의 안하고도 쓸수있다고 했던것 같은데...

        return (
          <button
            key={button.name}
            className="flex items-center justify-center hover:bg-[rgb(45,45,45)] rounded-full w-9 h-9 mx-1"
            onMouseEnter={() => setHoveredButton(button.name)}
            onMouseLeave={() => setHoveredButton(null)}
            onClick={() => toggleClick(button.name)}
          >
            {/* typeof : 타입이 무엇인지 문자열로 나타내줌 */}
            {/* 여기서 "function"의 의미는 함수인지를 물어보는것 */}
            {/* 함수라면, button.icon의 isFilled를 실행 >> isFilled 여부에따라 다르게보임 */}
            {typeof button.icon === "function" ? button.icon(isFilled) : button.icon}
            {hoveredButton === button.name && <Tooltip tooltip={button.tooltip} />}
          </button>
        );
      })}
    </div>
  );
};

export default LikeIconList;
