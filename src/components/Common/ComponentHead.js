import React from "react";

const ComponentHead = ({ title, sub, head }) => {
  return (
    <div className="container-ack md:pt-0 md:pb-0 pt-10 pb-5">
      <div className="relative">
        <div className="md:text-[8rem] text-[5rem] tracking-wider text-center texttransparent font-bold  md:pt-10 ">
          {title}
        </div>
        <div className="absolute md:top-[6.7rem] top-[4rem] inset-x-0 flex justify-center">
          <div className="text-[46px]  text-center font-bold max-w-xl">
            {sub}
          </div>
        </div>
      </div>
      <p className="text-base text-gray-400 text-center w-[60%] mx-auto ">
        {head}
      </p>
    </div>
  );
};

export default ComponentHead;
