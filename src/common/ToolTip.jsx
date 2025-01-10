import React from "react";

const Tooltip = ({ tooltip }) => {
  return (
    <div className="px-3 py-2 max-w-lg text-center rounded-lg bg-[rgb(230,230,230)] text-black absolute bottom-11 whitespace-nowrap">
      {tooltip}
    </div>
  );
};

export default Tooltip;
