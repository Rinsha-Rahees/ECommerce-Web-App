import React from "react";

function StuffDataArray({ title, children }) {
  const coolStuff = [
    { href: "", itemName: "accessories" },
    { href: "", itemName: "hats & caps" },
    { href: "", itemName: "clothing" },
    { href: "", itemName: "new arrivals" },
    { href: "", itemName: "instagram shop" },
    { href: "", itemName: "streetwear hub" },
    { href: "", itemName: "about us" },
    { href: "", itemName: "blog" },
    { href: "", itemName: "accessories" },
    { href: "", itemName: "offers" },
  ];

  const boringStuff = [
    { href: "", itemName: "rewards" },
    { href: "", itemName: "track order" },
    { href: "", itemName: "returns" },
    { href: "", itemName: "support" },
    { href: "", itemName: "contact us" },
    { href: "", itemName: "privacy policy" },
    { href: "", itemName: "about us" },
    { href: "", itemName: "terms & conditions" },
  ];

  return (
    <div>
      <h2 className="font-semibold text-xl">{children}</h2>
      <span className="flex flex-col font-sans text-sm leading-8">
        {title === "cool stuff"
          ? coolStuff.map((stuff, idx) => {
              return (
                <a 
                className="hover:text-rose-600"
                key={`${idx}_${stuff.itemName}`} 
                href={stuff.href}
                >
                  {stuff.itemName}
                </a>
              );
            })
          : boringStuff.map((stuff, idx) => {
              return (
                <a 
                className="hover:text-rose-600"
                key={`${idx}_${stuff.itemName}`} 
                href={stuff.href}
                >
                  {stuff.itemName}
                </a>
              );
            })}
      </span>
    </div>
  );
}

export default StuffDataArray;
