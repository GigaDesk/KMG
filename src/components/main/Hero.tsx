import * as React from "react";
import { Link } from "react-scroll";

export default function Hero() {
  return (
    <div className="relative flex items-center justify-center h-screen mb-12 overflow-hidden">
      <div
        className="relative z-30 p-5 text-2xl text-white bg-opacity-50 rounded-xl"
        style={{ fontFamily: "Graphik" }}
      >
        <h2 className="text-green-950 font-medium text-xxl">
          Simplifying Today, Accelerating Tommorrow
        </h2>
        <h3 className="font-medium text-xxxl">
          Ready to shape the future? Let's simplify the journey
        </h3>
        <Link to="industries" offset={-100} spy={true} smooth={true}>
          <button
            type="button"
            className="focus:outline-none text-white bg-green-950 hover:bg-green-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 mt-20"
          >
            EXPLORE
          </button>
        </Link>
      </div>
      <video
        src="https://videos.ctfassets.net/vjt7hlwnzx7i/571uF5iXI1JiIcTRPfuCyk/37659f7f995bc69f26058095c7f162de/12564026_1920_1080_60fps.mp4"
        autoPlay
        loop
        muted
        className="absolute z-10 w-auto min-w-full min-h-full max-w-none"
      />
    </div>
  );
}
