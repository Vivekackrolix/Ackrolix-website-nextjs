import React from "react";

const ValuesMissions = () => {
  return (
    <div className="bg-[]">
      <div className="grid md:grid-cols-5 gap-6 items-center  container-ack">
        <div className=" md:col-span-2 md:px-0 px-5 pb-5 md:pb-0  relative">
          <div className="md:text-[7rem] text-[5rem] tracking-wider text-left texttransparent font-bold  ">
            Goals
          </div>
          <div className="">
            <div className="absolute md:top-[3.8rem] top-[4rem]  inset-x-0 flex justify-left">
              <div className="text-[38px]  text-left font-bold ">
                We Deliver Promises
              </div>
            </div>
            <div className="md:w-[95%] w-full text-base text-textcolor text-justify font-text  pb-4">
              Ackrolix is known for its innovative approach, collaborative
              spirit, and commitment to excellence. Our clients trust us to
              deliver high-quality solutions that meet their needs and help them
              to achieve their goals.
            </div>
            <div className="md:w-[95%] w-full text-base text-textcolor text-justify font-text  py-4">
              Our aim is to make a meaningful impact on the world through the
              power of technology, creating a brighter and more prosperous
              future for all. We are always looking for new ways to enhance the
              user experience and create products that are both intuitive and
              effective.
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

                <p className="text-black/50 group-hover:text-black py-2 pb-4  text-justify tracking-tighter  text-sm ">
                  Our mission is to provide innovative technology solutions that
                  help businesses and organizations achieve their goals and
                  streamline their operations.
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

                <p className="text-black/50 group-hover:text-black py-2 pb-4  text-justify tracking-tighter  text-sm ">
                  The values of Ackrolix Innovations are the guiding principles
                  that shape its culture, decision-making, and interactions with
                  clients, partners, and employees.{" "}
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

                <p className="text-black/50 group-hover:text-black py-2 pb-4  text-justify tracking-tighter text-sm ">
                  Our vision is to be the leading provider of innovative and
                  sustainable technology solutions that transform businesses and
                  organizations across the globe. We envision a future where
                  technology is not only a tool for efficiency, but a driving
                  force for positive change, innovation, and progress.
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
