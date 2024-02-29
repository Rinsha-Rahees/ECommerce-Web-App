import React from "react";
import {
  Bars3Icon,
  ChevronDownIcon,
  HeartIcon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import ButtonStyle from "../GenericComponents/ButtonStyle";
import { openCartDrawer } from "../../reduxhandle/CartDrawer/CartDrawerAction";
import { useDispatch, useSelector } from "react-redux";
import CartDrawer from "../CartUI/CartDrawer";
import { Link } from "react-router-dom";

function NavBarUI() {

  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);
  const { wishlist } = useSelector((state) => state.wishlist);

  return (
    <div className="flex flex-row items-center justify-between w-full shadow-md lg:shadow-none xl:max-w-[85vw] h-fit px-2">
      <div className="flex flex-row lg:hidden">
        <button>
          <Bars3Icon className="h-6 mx-3" />
        </button>
        <button>
          <MagnifyingGlassIcon className="h-6" />
        </button>
      </div>

      <Link to="/">
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold">
          E COMMERCE
        </h1>
      </Link>

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
          <ButtonStyle bgcolor="black" textcolor="white">
            SEARCH
          </ButtonStyle>
        </button>
      </div>

      <div className="flex flex-row items-center justify-center rounded-md text-sm">
        <button className="px-1">
          <UserIcon className="h-6" />
        </button>

        <Link to={`/wishlist`}>
          <button className="pb-3">
            <div className="relative top-3 left-4 h-4 w-4 bg-black rounded-full">
              <span className="absolute flex justify-center items-center w-full h-full text-white">
                {wishlist.length}
              </span>
            </div>
            <HeartIcon className="h-6" />
          </button>
        </Link>
        <button
          className="px-3 xl:pl-3 pb-3"
          onClick={() => dispatch(openCartDrawer())}>
          <div className="relative top-3 left-4 h-4 w-4 bg-orange-600 rounded-full">
            <span className="absolute flex justify-center items-center w-full h-full text-white">
              {cart.length}
            </span>
          </div>
          <ShoppingCartIcon className="h-6" />
        </button>
      </div>

      <CartDrawer />
    </div>
  );
}

export default NavBarUI;
