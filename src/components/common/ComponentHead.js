import React from "react";

const ComponentHead = ({ title, sub, head }) => {
  return (
    <div className="relative">
      <div className="md:text-[10rem] text-[5rem] text-white tracking-wider text-center texttransparent font-bold  md:pt-10 ">
        {title}
      </div>
      <div className="absolute md:top-[9.5rem] top-5 md:left-[11rem]">
        <div className="text-3xl  text-center font-bold ">{head}</div>
        <p className="text-base text-center ">{sub}</p>
      </div>
    </div>
  );
};

export default ComponentHead;
