import React, { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

function Carousel({ slides }) {
  const [current, setCurrent] = useState(0);

  // console.log("slide_length", slides.length);

  const previousSlide = () => {
    if (current === 0) setCurrent(slides.length - 1);
    else setCurrent(current - 1);
  };

  const nextSlide = () => {
    if (current === slides.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };

  return (
    <div className="relative overflow-hidden">
      <div
        className="flex transition ease-in-out duration-500"
        style={{ transform: `translateX(-${current * 100}%)` }}>
        {slides.map((img, idx) => {
          return <img key={`${idx}_image`} src={img} />;
        })}
      </div>
      <div className="absolute flex items-center justify-between top-0 h-full w-full px-12">
        <button onClick={previousSlide}>
          <div className="w-fit bg-white text-black rounded-full p-2">
            <ChevronLeftIcon className="w-8" />
          </div>
        </button>
        <button onClick={nextSlide}>
          <div className="w-fit bg-white text-black rounded-full p-2">
            <ChevronRightIcon className="w-8" />
          </div>
        </button>

        <div className="absolute flex justify-center w-full bottom-0 gap-3 py-4">
          {slides.map((img, idx) => {
            return (
              <div
                onClick={() => {
                  setCurrent(idx);
                }}
                key={"circle" + idx}
                className={`w-5 h-5 rounded-full cursor-pointer ${
                  idx === current ? "bg-white" : "bg-gray-400"
                }`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Carousel;
