import * as React from "react";

export default function Service2(props) {
  return (
    <div
      style={{ fontFamily: "Graphik" }}
      className=" text-xl font-medium pt-20 flex flex-wrap-reverse md:grid md:grid-cols-2 gap-20"
    >
      <div className="">
        <hr className="w-8 h-1 bg-green-950 border-0" />
        <h3 className="py-6"> {props.name} </h3>
        <p className="text-base font-normal">{props.description}</p>
      </div>
      <div>
        <img width="720" height="480" src={props.image} />
      </div>
    </div>
  );
}
