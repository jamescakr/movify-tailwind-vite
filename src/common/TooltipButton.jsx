import React, { useState } from "react";
import Tooltip from "./Tooltip";

const TooltipButton = ({ icon, onClick, tooltip }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div>
      <button
        className="relative flex items-center justify-center border-2 border-[rgb(147,147,147)] hover:border-white rounded-full w-9 h-9 mt-3 mx-2"
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {icon}
        {isHovered && <Tooltip tooltip={tooltip} />}
      </button>
    </div>
  );
};

export default TooltipButton;
