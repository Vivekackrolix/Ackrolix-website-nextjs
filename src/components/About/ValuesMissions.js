import React from "react";

const ValuesMissions = () => {
  return (
    <div className="container-sck">
      <div className="grid md:grid-cols-5 gap-6 items-center  container-ack">
        <div className=" md:col-span-2 md:px-0 px-5 pb-5 md:pb-0  relative">
          <div className="md:text-9xl  text-center md:text-left text-[5rem] text-white tracking-[1rem] texttransparent font-bold  md:pt-10 ">
            Lorem
          </div>
          <div className="">
            <div className="text-3xl   font-bold absolute md:top-[5rem] top-[3rem] md:left-2 left-[4rem] text-center md:text-left">
              Lorem Ipsum Dolor <br /> Sit Amet
            </div>
            <div className="md:w-[95%] w-full text-base text-textcolor text-justify font-text  pb-4">
              Lorem ipsum dolor sit amet consectetur. Sapien porttitor non
              ultrices id enim lectus sagittis viverra interdum. Nisi lobortis
              tincidunt convallis viverra. Scelerisque sed orci amet proin cras
              quam pellentesque. Sollicitudin sed velit nunc nunc morbi sed
              aliquam.
            </div>
            <div className="md:w-[95%] w-full text-base text-textcolor text-justify font-text  py-4">
              Lorem ipsum dolor sit amet consectetur. Fermentum tortor et arcu
              pellentesque tempor cursus cursus amet odio. Orci eu sagittis leo
              duis enim mi massa etiam.
            </div>
          </div>
        </div>
        <div className=" md:col-span-3 grid md:grid-cols-2 gap-3 items-center md:py-8 py-2">
          <div>
            <div className="group p-3" key="id">
            <div className="relative text-left px-6  py-3 duration duration-200 group-hover:-translate-y-2 bg-gray-50 hover:bg-white hover:drop-shadow-xl bg-transparent rounded-xl ">
                <div className="inline-flex justify-left items-center rounded-md md:mt-8 ">
                  <img
                    src="/assets/images/mission.png"
                    alt=""
                    className="  rounded-lg w-20 h-20 mx-auto "
                  />
                </div>
                <h2 className="font-semibold text-lg py-2 text-black text-left">
                  Our Mission
                </h2>

                <p className="text-black/50 group-hover:text-black py-2 pb-4  text-left  text-sm ">
                  Donec mi lorem, consequat a quam nec, pellentesque pulvinar
                  sem. Morbi lacus magna.Donec mi lorem, consequat a quam nec,
                  pellentesque pulvinar sem. Morbi lacus magna.
                </p>
              </div>
            </div>
            <div className="group p-3" key="id">
              <div className="relative text-left px-6  py-3 duration duration-200 group-hover:-translate-y-2  bg-gray-50 hover:bg-white hover:drop-shadow-xl bg-transparent rounded-xl  ">
                <div className="inline-flex justify-left items-center rounded-md md:mt-8 ">
                  <img
                    src="/assets/images/value.png"
                    alt=""
                    className="  rounded-lg w-20 h-20 mx-auto "
                  />
                </div>
                <h2 className="font-semibold text-lg py-2 text-black text-left">
                  Our Values
                </h2>

                <p className="text-black/50 group-hover:text-black py-2 pb-4  text-left  text-sm ">
                  Donec mi lorem, consequat a quam nec, pellentesque pulvinar
                  sem. Morbi lacus magna...
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="group p-3" key="id">
            <div className="relative text-left px-6  py-3  duration duration-200 group-hover:-translate-y-2 bg-gray-50 hover:bg-white hover:drop-shadow-xl bg-transparent rounded-xl ">
                <div className="inline-flex justify-left items-center rounded-md md:mt-8 ">
                  <img
                    src="/assets/images/vision.png"
                    alt=""
                    className="  rounded-lg w-20 h-20 mx-auto "
                  />
                </div>
                <h2 className="font-semibold text-lg py-2 text-black text-left">
                  Our Vision
                </h2>

                <p className="text-black/50 group-hover:text-black py-2 pb-4  text-left  text-sm ">
                  Donec mi lorem, consequat a quam nec, pellentesque pulvinar
                  sem. Morbi lacus magna.Donec mi lorem, consequat a quam nec,
                  pellentesque pulvinar sem. Morbi lacus magna.Donec mi lorem,
                  consequat a quam nec, pellentesque pulvinar sem. Morbi lacus
                  magna.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValuesMissions;
