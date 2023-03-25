import React from "react";

const ComponentHead = ({ title, sub, head }) => {
  return (
    <div className="container-ack">
      <div className="relative">
        <div className="md:text-[10rem] text-[5rem] text-white tracking-wider text-center texttransparent font-bold  md:pt-10 ">
          {title}
        </div>
        <div className="absolute md:top-[9.5rem] top-5 md:left-[11rem]">
          <div className="text-3xl  text-center font-semibold">{head}</div>
          <p className="text-base text-center">{sub}</p>
        </div>
      </div>
    </div>
  );
};

export default ComponentHead;
