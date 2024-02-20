import React from "react";
import {
  Bars3Icon,
  ChevronDownIcon,
  HeartIcon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import ButtonStyle from "../../assets/ButtonStyle";

function NavBarUI() {
  return (
    <div className="flex flex-row items-center justify-between w-full h-fit p-2">

      <div className="flex flex-row lg:hidden">
        <button>
          <Bars3Icon className="h-6 mx-3" />
        </button>
        <button>
          <MagnifyingGlassIcon className="h-6" />
        </button>
      </div>

      <div className="mx-4">
        <h1 className="text-2xl lg:text-3xl font-bold">E COMMERCE</h1>
      </div>

      <div className="hidden lg:flex flex-row items-center justify-center bg-gray-50 border p-0.5 rounded-md text-sm">
        <span className="mx-4">All Categories</span>
        <button className="ml-12 mr-4 mt-1">
          <ChevronDownIcon className="h-4 text-gray-400" />
        </button>
        <span className="text-gray-200 text-xl mb-1">|</span>
        <input
          type="text"
          placeholder="Search for products"
          className="bg-inherit mx-4 text-xs placeholder-black focus:outline-none"
        />
        <button onClick={() => console.log("Clicked")} className="ml-12">
          <ButtonStyle>SEARCH</ButtonStyle>
        </button>
      </div>

      <div className="flex flex-row items-center justify-center rounded-md text-sm">
        <button className="mx-2">
            <UserIcon className="h-6"/>
        </button>
        <button className="mx-2 pb-3">
        <div className="relative top-3 left-4 h-4 w-4 bg-black rounded-full">
                <span className="absolute -bottom-0.5 right-1 justify-center text-white">0</span>
            </div>
            <HeartIcon className="h-6"/>
        </button>
        <button className="mx-2 pb-3">
            <div className="relative top-3 left-4 h-4 w-4 bg-[#ff0000] rounded-full">
                <span className="absolute -bottom-0.5 right-1 justify-center text-white">0</span>
            </div>
            <ShoppingCartIcon className="h-6"/>
        </button>
      </div>

    </div>
  );
}

export default NavBarUI;
