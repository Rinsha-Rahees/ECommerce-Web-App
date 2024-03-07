import React, { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import WishlistItems from "./WishlistItems";
import { useSelector } from "react-redux";

function WishlistUI() {
  const { wishlist } = useSelector((state) => state.wishlist);
  const [filtered, setFiltered] = useState(0);
  const [inputValue, setInputValue] = useState("");

  const handleOnChange = (e) => {
    let value = e.target.value;
    setInputValue(value);
    setFiltered(wishlist.filter((product) => {
      const idMatch = product.id == value;
      const titleMatch = product.title
        .toLowerCase()
        .replace(/ /g, "_")
        .includes(value.toLowerCase().replace(/ /g, "_"));
      const priceMatch = product.price == value;
      return idMatch || titleMatch || priceMatch 
    })
    )
  };

  return (
    <div className="flex flex-col items-center w-full h-fit font-mono mt-12 px-2 xl:max-w-[85vw]">
      <div className="flex w-full">
        <h2 className="flex justify-start font-bold text-3xl">My Wishlist</h2>
      </div>

      <div className="flex items-center border h-12 p-2 mt-6 w-full">
        <MagnifyingGlassIcon className="w-5" />
        <input
          onChange={handleOnChange}
          type="text"
          placeholder="Search item"
          value={inputValue}
          className="focus:outline-none w-full h-full ml-4 placeholder-black placeholder:font-sans text-base font-extralight"
        />
      </div>

      <hr className="border-1 mt-2 w-full" />

      <WishlistItems filtered={filtered} />
      
    </div>
  );
}

export default WishlistUI;
