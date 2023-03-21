import React from "react";
import { AiFillPlayCircle } from "react-icons/ai";
const Videos = () => {
  return (
    <div className="container-ack pt-16 relative md:px-0 px-5">
      <img src="/assets/images/video.png" alt="" className="" />
      <div className=" absolute md:top-72 top-36 left-44 md:left-[32rem]">
      <div className="relative inline-flex">
        <span className="flex h-16 w-16">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white bg-opacity-50 opacity-75 duration-500"></span>
          <span className="">
            <AiFillPlayCircle className="text-white cursor-pointer relative inline-flex rounded-full h-16 w-16 " />
          </span>
        </span>
      </div>
      </div>
    </div>
  );
};

export default Videos;
