import React from "react";

const Location = () => {
  return (
    <div className="container-sck">
      <div className="grid md:grid-cols-4 items-center  container-ack px-5 ">
        <div className=" md:col-span-2 md:px-0 pb-5 md:pb-0  relative">
          <div className="md:text-8xl text-center md:text-left text-[3rem] text-white tracking-[0.5rem] texttransparent font-bold  md:pt-10 ">
            Locations
          </div>
          <div className="">
            <div className="text-[46px] text-secondary font-bold absolute md:top-[4.6rem] top-[2rem] md:left-2  text-center md:text-left">
              Global <span className="text-primary">Spread</span>
            </div>
            <div className=" w-[90%] text-base text-textcolor font-text  pb-4">
              Nunc convallis semper justo quis tempor. Praesent molestie, lorem
              sed imperdiet tempor, libero urna semper urna, facilisis vulputate
              velit arcu vitae mi. Donec ac nisi ex.
            </div>
          </div>
        </div>
        <div className=" md:col-span-2 grid md:grid-cols-2 items-center md:py-8 py-2">
          <div>
            <div className="group" key="id">
              <div className="relative text-left px-6  py-3  duration duration-200 group-hover:-translate-y-2 bg-gray-50 hover:bg-white hover:drop-shadow-xl bg-transparent rounded-xl ">
                <div className="inline-flex justify-left items-center rounded-md md:mt-8 ">
                  <img
                    src="/assets/images/uae.png"
                    alt=""
                    className="  rounded-lg w-12 h-12 mx-auto "
                  />
                </div>
                <h2 className="font-semibold text-lg py-2 text-black text-left">
                  Our Vision
                </h2>

                <p className="text-black/50 group-hover:text-black py-2 pb-4  text-left  text-sm ">
                  Donec mi lorem, consequat a quam nec, pellentesque pulvinar
                  sem. Morbi lacus magna.
                </p>
              </div>
            </div>
            <div className="group" key="id">
              <div className="relative text-left px-6  py-3  duration duration-200 group-hover:-translate-y-2 bg-gray-50 hover:bg-white hover:drop-shadow-xl bg-transparent rounded-xl ">
                <div className="inline-flex justify-left items-center rounded-md md:mt-8 ">
                  <img
                    src="/assets/images/aus.png"
                    alt=""
                    className="  rounded-lg w-12 h-12 mx-auto "
                  />
                </div>
                <h2 className="font-semibold text-lg py-2 text-black text-left">
                  AUSTRALIA
                </h2>

                <p className="text-black/50 group-hover:text-black py-2 pb-4  text-left  text-sm ">
                  Donec mi lorem, consequat a quam nec, pellentesque pulvinar
                  sem. Morbi lacus magna.
                </p>
              </div>
            </div>
          </div>
          <div className="pt-12">
            <div className="group" key="id">
              <div className="relative text-left px-6  py-3 duration duration-200 group-hover:-translate-y-2 bg-gray-50 hover:bg-white hover:drop-shadow-xl bg-transparent rounded-xl ">
                <div className="inline-flex justify-left items-center rounded-md md:mt-8 ">
                  <img
                    src="/assets/images/india.png"
                    alt=""
                    className="  rounded-lg w-12 h-12 mx-auto "
                  />
                </div>
                <h2 className="font-semibold text-lg py-2 text-black text-left">
                  India
                </h2>

                <p className="text-black/50 group-hover:text-black py-2 pb-4  text-left  text-sm ">
                  Donec mi lorem, consequat a quam nec, pellentesque pulvinar
                  sem. Morbi lacus magna.
                </p>
              </div>
            </div>
            <div className="group" key="id">
              <div className="relative text-left px-6  py-3 duration duration-200 group-hover:-translate-y-2  bg-gray-50 hover:bg-white hover:drop-shadow-xl bg-transparent rounded-xl  ">
                <div className="inline-flex justify-left items-center rounded-md md:mt-8 ">
                  <img
                    src="/assets/images/canada.png"
                    alt=""
                    className="  rounded-lg w-12 h-12 mx-auto "
                  />
                </div>
                <h2 className="font-semibold text-lg py-2 text-black text-left">
                  Canada
                </h2>

                <p className="text-black/50 group-hover:text-black py-2 pb-4 text-left text-sm">
                  Donec mi lorem, consequat a quam nec, pellentesque pulvinar
                  sem. Morbi lacus magna.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
