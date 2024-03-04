import React from "react";

function HorizontalList({ list }) {

  return (
    <>
      {list.map((itemData, idx) => {
        return (
          <a
            key={`${idx}_${itemData.itemName}`}
            href={itemData?.href}
            className="underline pr-1.5 text-sm font-sans">
            {itemData?.itemName}
          </a>
        );
      })}
    </>
  );
}

export default HorizontalList;
