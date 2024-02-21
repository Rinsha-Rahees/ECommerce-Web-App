import React from "react";

function PopularSearches() {
  const searchItems = [
    { href: "", itemName: "caps & hats," },
    { href: "", itemName: "baggy jeans," },
    { href: "", itemName: "baseball caps," },
    { href: "", itemName: "snapback caps," },
    { href: "", itemName: "dad caps," },
    { href: "", itemName: "athleisure caps," },
    { href: "", itemName: "oversized t-shirts," },
    { href: "", itemName: "regular fit t-shirts," },
    { href: "", itemName: "denims," },
    { href: "", itemName: "half sleeve t-shirts," },
    { href: "", itemName: "oversized t-shirts," },
    { href: "", itemName: "boots," },
    { href: "", itemName: "jeans," },
    { href: "", itemName: "mom jeans" }
  ];

  return (
    <div className="mt-6">
      <h2 className="font-semibold text-xl">Popular Searches</h2>
      {searchItems.map((itemData, idx) => {
        return (
          <a
            key={`${idx}_${itemData.itemName}`}
            href={itemData.href}
            className="underline mr-2 text-sm font-sans">
            {itemData.itemName}
          </a>
        );
      })}
    </div>
  );
}

export default PopularSearches;
