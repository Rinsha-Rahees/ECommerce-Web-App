import React from "react";

function ShimmerUI() {
  return (
    <div className="flex flex-col md:flex-row justify-between w-full xl:max-w-[85vw] mt-8 p-8 font-mono">
      <div className="flex flex-col p-2 items-center">
        <div className="h-64 w-64 bg-gray-100" />
        <div className="h-64 w-64 bg-gray-100 mt-4 hidden md:flex" />
      </div>
      <div className="hidden md:flex flex-col p-2">
      <div className="h-64 w-64 bg-gray-100" />
        <div className="h-64 w-64 bg-gray-100 mt-4" />
      </div>

      <div className="flex flex-col gap-4 items-start w-full bg-gray-50 m-2 p-4">
        <span className="bg-gray-100 w-full h-8"/>
        <span className="bg-gray-100 w-32 h-8"/>
        <span className="bg-gray-100 w-60 h-8"/>
      </div>
    </div>
  );
}

export default ShimmerUI;
