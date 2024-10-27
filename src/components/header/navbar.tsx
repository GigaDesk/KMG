import * as React from "react";

export default function Navbar() {
  return (
    <div
      className=" h-20 absolute bottom-0 w-full grid grid-cols-[1fr_20px] lg:grid-cols-[1fr_600px] px-12 border"
      style={{ fontFamily: "Graphik" }}
    >
      <div className="font-medium text-xxxl text-green-950 content-center"> KMG </div>
      <div className="grid grid-cols-4 max-lg:hidden">
        <div className="grid justify-items-center content-center px-3 cursor-pointer relative transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-green-950 before:origin-center before:h-[3px] before:w-0 hover:before:w-[25%] before:bottom-4 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-green-950 after:origin-center after:h-[3px] after:w-0 hover:after:w-[25%] after:bottom-4 after:right-[50%]">
          Industries
        </div>
        <div className="grid justify-items-center content-center px-3 cursor-pointer relative transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-green-950 before:origin-center before:h-[3px] before:w-0 hover:before:w-[30%] before:bottom-4 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-green-950 after:origin-center after:h-[3px] after:w-0 hover:after:w-[28%] after:bottom-4 after:right-[50%]">
          Capabilities
        </div>
        <div className="grid justify-items-center content-center px-3 cursor-pointer relative transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-green-950 before:origin-center before:h-[3px] before:w-0 hover:before:w-[31%] before:bottom-4 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-green-950 after:origin-center after:h-[3px] after:w-0 hover:after:w-[31%] after:bottom-4 after:right-[50%]">
          Our Insights
        </div>
        <div className="grid justify-items-center content-center px-3 cursor-pointer relative transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-green-950 before:origin-center before:h-[3px] before:w-0 hover:before:w-[30%] before:bottom-4 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-green-950 after:origin-center after:h-[3px] after:w-0 hover:after:w-[30%] after:bottom-4 after:right-[50%]">
          About KMG
        </div>
      </div>
      <div className="grid grid-cols-6 lg:hidden relative">
        <svg
          className="w-4 h-4 ms-1 absolute bottom-1/3 right-0"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </div>
    </div>
  );
}

