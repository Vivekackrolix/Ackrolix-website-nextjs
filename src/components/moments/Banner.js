import React from "react";

const Banner = () => {
  return (
    <>
      <div className="container-ack relative h-screen">
        <div className="absolute">
          <div className=" md:col-span-2 md:px-0 pb-5 md:pb-0  relative">
            <div className="md:text-9xl text-center md:text-left text-[3rem] text-white tracking-[0.5rem] texttransparent font-bold  md:pt-10 ">
              Memories
            </div>
            <div className="px-4">
              <div className="text-3xl font-bold absolute md:top-[5rem] top-[3rem] md:left-2 left-[4rem] text-center md:text-left">
                Our Memories
              </div>
              <div className="w-96 text-base text-textcolor font-text pb-4">
                Nunc convallis semper justo quis tempor. Praesent molestie,
                lorem sed imperdiet tempor, libero urna semper urna, facilisis
                vulputate velit arcu vitae mi. Donec ac nisi ex.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
