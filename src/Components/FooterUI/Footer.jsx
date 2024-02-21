import React from "react";
import PopularSearches from "./PopularSearches";
import StuffDataArray from "./StuffDataArray";
import { ArrowRightIcon, ClockIcon, EnvelopeIcon } from "@heroicons/react/24/outline";
import SocialMedia from "./SocialMedia";

function Footer() {

  return (
    <div className="flex flex-col bg-black text-white w-full font-mono p-8 lg:px-24">
      <div className="flex flex-col lg:flex-row justify-between">
        <StuffDataArray title="cool stuff">Cool Stuff</StuffDataArray>
        <StuffDataArray title="boring stuff">Boring Stuff</StuffDataArray>
        <div className="text-sm">
          <h2 className="font-semibold text-xl">Reach Out To Us</h2>
          <div className="flex flex-col max-w-64 leading-10">
            <div className="flex">
              <EnvelopeIcon className="w-6" />
              <a
                href=""
                className="underline ml-2 hover:text-rose-600 font-sans">
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
          <div className="flex gap-3">
            <SocialMedia/>
          </div>
        </div>
        <div>
          <h2 className="font-semibold text-xl">Community Exclusive</h2>
          <div className="max-w-64 text-xs">
            <span>
              Subscribe to our newsletter and be the first to get all inside
              information on the latest drops and special offers.
            </span>
            <div className="flex border p-1 w-fit mt-2 rounded-lg">
              <input
                type="text"
                placeholder="Your email address"
                className="bg-black px-2 focus:outline-none"
              />
              <button
                className="bg-white text-black text-base font-mono font-bold p-2 pr-8 rounded-lg">
                  Subscribe
              </button>
              <div className="relative">
                  <div className="absolute top-3 right-2">
                    <ArrowRightIcon className="w-4 text-black"/>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <PopularSearches />
      </div>
    </div>
  );
}

export default Footer;
