import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

const Banner = () => {
  return (
    <div
      className="h-screen bg-right"
      style={{
        backgroundImage: 'url("/assets/images/mainbackground.png ")',
      }}
    >
      <div className="md:grid grid-cols-2 gap-6 items-center container-ack  ">
        <div className="pb-5 pt-10 ">
          <img src="/assets/images/aboutusimg.png" alt="" />
        </div>

        <div className=" md:px-0 px-5 pb-10 md:pb-0  relative">
          <div className="md:text-[8rem] text-[5rem] tracking-wider text-left texttransparent font-bold  md:pt-10">
            <span className="text-[#fbfcfc]">Abo</span>ut
          </div>
          <div className="">
            <div className="text-3xl  font-bold  absolute md:top-[5.7rem]  top-[4rem]">
              <span className="text-primary">Driving success </span> through the
              power of technology
            </div>
            <div className="md:w-[95%] w-full text-base text-textcolor text-justify font-text  pb-4">
              As a product development company, our focus is on creating
              innovative solutions that meet the needs and desires of our
              clients. Ackrolix a team of experts has the skills and experience
              to turn an idea into a successful product that exceeds
              expectations. One of our strengths as a company is our ability to
              stay up-to-date with the latest technologies and trends in product
              development.
            </div>
            <div className="md:w-[95%] w-full text-base text-textcolor text-justify font-text  py-4">
              Ackrolix is known for its innovative approach, collaborative
              spirit, and commitment to excellence. Our clients trust us to
              deliver high-quality solutions that meet their needs and help them
              to achieve their goals.
            </div>
          </div>
        </div>
      </div>

      <div className=" grid md:grid-cols-12 md:gap-0 gap-4 justify-center container-ack pt-8">
        <div className="md:col-span-3 flex flex-col  items-center">
          <p className=" text-2xl font-bold text-secondary"> 1056+</p>
          <p>Projects Completed</p>
        </div>
        <div className=" md:col-span-3 flex flex-col items-center">
          <p className=" text-2xl font-bold text-secondary"> 50+</p>
          <p>Active Clients</p>
        </div>
        <div className="md:col-span-3 flex flex-col items-center">
          <p className=" text-2xl font-bold text-secondary">740+ </p>
          <p>Cups of Coffee</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
