import React from "react";

function ShimmerUI() {
  return (
    <div className="animate-pulse flex flex-col md:flex-row justify-between w-full xl:max-w-[85vw] mt-8 p-8 font-mono">
      <div className="flex flex-col p-2 items-center">
        <div className="h-64 w-64 bg-gray-200" />
        <div className="h-64 w-64 bg-gray-200 mt-4 hidden md:flex" />
      </div>
      <div className="hidden md:flex flex-col p-2">
      <div className="h-64 w-64 bg-gray-200" />
        <div className="h-64 w-64 bg-gray-200 mt-4" />
      </div>

      <div className="flex flex-col gap-4 items-start w-full bg-gray-100 m-2 p-4">
        <span className="bg-gray-200 w-full h-8 rounded-full"/>
        <span className="bg-gray-200 w-32 h-8 rounded-full"/>
        <span className="bg-gray-200 w-60 h-8 rounded-full"/>
      </div>
    </div>
  );
}

export default ShimmerUI;
