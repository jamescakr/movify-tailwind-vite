import React from "react";

const Tooltip = ({ tooltip }) => {
  return (
    <div className="w-24 h-10 rounded-lg bg-[rgb(230,230,230)] text-black absolute bottom-11">
      <div>{tooltip}</div>
    </div>
  );
};

export default Tooltip;
