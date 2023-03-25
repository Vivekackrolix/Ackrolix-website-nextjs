import React from "react";

const Heading = ({ titletext, title, subtext }) => {
  return (
    <div className="container-ack md:pt-0 md:pb-0 pt-10 pb-5">
      <div className="relative">
        <div className="md:text-[12rem] text-[5rem] text-white tracking-wider text-center texttransparent font-bold  md:pt-10 ">
          {titletext}
        </div>
        <div className="absolute md:top-[11.5rem] top-[4rem] inset-x-0 flex justify-center">
          <div className="text-3xl  text-center font-bold max-w-xl">
            {title}
          </div>
        </div>
      </div>
      <p className="text-base text-gray-400 text-center w-[80%] mx-auto ">
        {subtext}
      </p>
    </div>
  );
};

export default Heading;
