import * as React from "react";
import { Link } from "react-scroll";

export default function BottomDrawer() {
  return (
    <div
      className="grid grid-rows-4 px-12 bg-white text-lg border-b border-neutral-700 pt-20"
      style={{ fontFamily: "Graphik" }}
    >
      <Link
        activeClass="bg-green-950 text-white"
        to="industries"
        spy={true}
        offset={-100}
        smooth={true}
        className="py-2"
      >
        Industries
      </Link>
      <Link
        activeClass="bg-green-950 text-white"
        to="capabilities"
        spy={true}
        offset={-100}
        smooth={true}
        className="py-2"
      >
        Capabilities
      </Link>
      <Link
        activeClass="bg-green-950 text-white"
        to="our insights"
        spy={true}
        offset={-100}
        smooth={true}
        className="py-2"
      >
        Our Insights
      </Link>
      <Link
        activeClass="bg-green-950 text-white"
        to="about kmg"
        spy={true}
        offset={-50}
        smooth={true}
        className="py-2"
      >
        About KMG
      </Link>
    </div>
  );
}
