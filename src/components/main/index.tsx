import * as React from "react";
import Hero from "./Hero";
import Industries from "./industries";
import Capabilities from "./capabilities";
import Insights from "./Insights";
import Partners from "./partners";
import { Element } from "react-scroll";

export default function Main() {
  return (
<div   style={{ fontFamily: "Graphik" }}
      className="text-xl md:text-xxxl font-medium"
      >
<Hero />
 <Element name="industries">
<Industries />
</Element>
<Element name="capabilities" className="mt-24">
<Capabilities />
</Element>
<Element name="our insights"> 
<div className="grid justify-items-center mt-52"> Our Insights </div>
<Insights />
</Element>
<Element name="about kmg">
<div className="grid justify-items-center pt-20"> Our Brands </div>
<Partners />
</Element>
</div>
  );
}
