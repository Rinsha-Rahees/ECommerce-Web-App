import React, { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

function Carousel({ images }) {
  const [current, setCurrent] = useState(0);

  const previousSlide = () => {
    if (current === 0) setCurrent(images.length - 1);
    else setCurrent(current - 1);
  };

  const nextSlide = () => {
    if (current === images.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };

  return (
    <>
      {images.length === 0 ? (
        <div className="hidden" />
      ) : (
        <div className="relative overflow-hidden">
          <div
            className="flex transition ease-in-out duration-500"
            style={{ transform: `translateX(-${current * 100}%)` }}>
            {images.map((img, idx) => {
              return (
                <img
                  key={`${idx}_image`}
                  src={img}
                  alt={`Ad Slide_${idx + 1}`}
                />
              );
            })}
          </div>

          <div className="absolute flex items-center justify-between top-0 h-full w-full px-5">
            <button onClick={previousSlide} aria-label="Previous Slide">
              <div className="w-fit bg-gray-200 opacity-50 text-black rounded-full p-2">
                <ChevronLeftIcon className="w-6 xl:w-8" />
              </div>
            </button>
            <button onClick={nextSlide} aria-label="Next Slide">
              <div className="w-fit bg-gray-200 opacity-50 text-black rounded-full p-2">
                <ChevronRightIcon className="w-6 xl:w-8" />
              </div>
            </button>

            <div className="absolute flex justify-center w-full bottom-0 gap-3 py-4">
              {images.map((_, idx) => {
                return (
                  <div
                    onClick={() => {
                      setCurrent(idx);
                    }}
                    key={"circle" + idx}
                    className={`w-5 h-5 rounded-full cursor-pointer ${
                      idx === current ? "bg-gray-200" : "bg-gray-500"
                    }`}
                  />
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Carousel;
