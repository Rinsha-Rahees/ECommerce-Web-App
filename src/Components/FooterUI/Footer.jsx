import React from "react";
import HorizontalList from "../GenericComponents/HorizontalList";
import VerticalList from "../GenericComponents/VerticalList";
import {
  ArrowRightIcon,
  ClockIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";
import SocialMedia from "./SocialMedia";
import {
  popularSearchList,
  socialMediaIcons,
  coolStuffList,
  boringStuffList,
} from "../../assets/DataCollection/DataArray";

function Footer() {
  return (
    <div className="flex justify-center h-fit w-full bg-black text-white mt-16 px-8 ">
      <div className="flex flex-col xl:max-w-[85vw] font-mono">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 justify-between">
          <div className="mt-6">
            <VerticalList list={coolStuffList}>cool stuff</VerticalList>
          </div>
          <div className="mt-6">
            <VerticalList list={boringStuffList}>boring Stuff</VerticalList>
          </div>
          <div className="text-sm mt-6">
            <h2 className="font-semibold text-xl">reach Out To Us</h2>
            <div className="flex flex-col max-w-64 leading-10">
              <div className="flex">
                <EnvelopeIcon className="w-6" />
                <a
                  href=""
                  className="underline ml-2 hover:text-emerald-700 font-sans">
                  hello@ecommerce.com
                </a>
              </div>
              <div className="flex flex-col text-xs leading-7">
                <div className="flex">
                  <ClockIcon className="w-6" />
                  <span className="ml-2">11am to 6pm Mon - Sun*</span>
                </div>
                <span>*except on public holidays</span>
              </div>
              <span className="font-semibold">
                Follow E COMMERCE India on social media
              </span>
            </div>
            <div className="flex gap-2">
              <SocialMedia icons={socialMediaIcons} />
            </div>
          </div>
          <div className="mt-6">
            <h2 className="font-semibold text-xl">community exclusive</h2>
            <div className="max-w-60 xl:max-w-64 text-xs leading-6">
              <span>
                Subscribe to our newsletter and be the first to get all inside
                information on the latest drops and special offers.
              </span>
              <div className="relative flex border p-0.5 w-fit mt-2 rounded-lg">
                <input
                  type="text"
                  placeholder="Your email address"
                  className="bg-black pl-1 focus:outline-none w-32 xl:w-full"
                />
                <button className="bg-white text-black text-base font-mono font-bold py-2 pl-1 pr-6 rounded-lg">
                  Subscribe
                </button>
                <div className="absolute top-4 right-2">
                  <ArrowRightIcon className="w-4 text-black" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="my-6">
          <h2 className="font-semibold text-xl">Popular searches</h2>
          <HorizontalList list={popularSearchList} />
        </div>
      </div>
    </div>
  );
}

export default Footer;
