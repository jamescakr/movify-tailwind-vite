import { useState } from "react";
import { Heart, ThumbsDown, ThumbsUp } from "lucide-react";
import Tooltip from "./Tooltip";

const LikeIconList = ({ className }) => {
  const [hoveredButton, setHoveredButton] = useState(null);

  const buttons = [
    {
      name: "ThumbsDown",
      icon: <ThumbsDown className="w-6 h-6" />,
      tooltip: "Not for me",
    },
    {
      name: "ThumbsUp",
      icon: <ThumbsUp className="w-6 h-6" />,
      tooltip: "I like it",
    },
    {
      name: "Heart",
      icon: <Heart className="w-6 h-6" />,
      tooltip: "Love this!!",
    },
  ];

  return (
    <div
      className={`flex items-center justify-center bg-[rgb(35,35,35)] w-40 h-12 rounded-full shadow-lg ${className}`}
    >
      {buttons.map((button) => (
        <button
          key={button.name}
          className="flex items-center justify-center hover:bg-[rgb(45,45,45)] rounded-full w-9 h-9 mx-1"
          onMouseEnter={() => setHoveredButton(button.name)}
          onMouseLeave={() => setHoveredButton(null)}
        >
          {button.icon}
          {hoveredButton === button.name && <Tooltip tooltip={button.tooltip} />}
        </button>
      ))}
    </div>
  );
};

export default LikeIconList;
