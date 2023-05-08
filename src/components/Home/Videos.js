import React, { useState } from "react";
import { AiFillPlayCircle } from "react-icons/ai";

const Videos = () => {
  const [play, setPlay] = useState(true);
  function handleClick() {
    setPlay(false);
  }
  function handlePause() {
    setPlay(true);
  }

  return (
    <>
      <div className="container-ack pt-16 relative video-main w-full cursor-pointer rounded-xl md:px-0 px-5">
        {play ?
          <div className=" absolute top-[50%] right-[46%]">
            <div className="relative inline-flex">
              <span className="flex h-20 w-20">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white bg-opacity-50 opacity-75 duration-500"></span>
                <span className="">
                <img className="relative inline-flex h-20 w-20" alt="play" src="/assets/svg/videoPlay.svg" />
                </span>
              </span>
            </div>
          </div>
          : ""}
        <video onPlay={handleClick} onPause={handlePause} controls loop className="w-full rounded-xl">
          <source src={"/assets/images/AckrolixVideo.mp4"} style={{ width: '100%' }} />
        </video>
      </div>
    </>
  );
};

export default Videos;
