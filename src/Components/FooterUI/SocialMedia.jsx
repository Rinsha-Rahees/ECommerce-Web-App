import React from "react";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";

function SocialMedia({ icons }) {
  return (
    <>
      {icons.map((iconDetails, idx) => {
        return (
          <button
            data-tooltip-id="my-tooltip-1"
            data-tooltip-content={`Follow on ${iconDetails.name}`}
            key={`${idx}_icons`}
            className="w-8 border rounded-full p-1.5 hover:border-emerald-700 lg:hover:-translate-y-1.5 ease-in-out duration-500">
            <img
              src={`/${iconDetails.src}`}
              alt="Social Media Icon"
              className="w-6"
            />
          </button>
        );
      })}

      <Tooltip
        id="my-tooltip-1"
        place="top"
        style={{ backgroundColor: "black", marginTop: 6 }}
      />
      
    </>
  );
}

export default SocialMedia;
