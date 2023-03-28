import Link from "next/link";
import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

const Portfolio = () => {
  return (
    <div className="bg-[#F6F8F9]">
      <div className="container-ack md:px-0 px-5">
        <div className="relative">
          <div className="md:text-[10rem] text-[5rem] text-[#F6F8F9] tracking-wider text-center texttransparent font-bold  md:pt-10 ">
            Portfolio
          </div>
          <div className="absolute md:top-[9.5rem] top-5 md:left-[11rem]">
            <div className="text-3xl  text-center font-bold ">Portfolio</div>
            <p className="text-base text-center ">
              Lorem ipsum dolor sit amet consectetur. Leo tellus in maecenas
              tincidunt urna vulputate. Elit amet nam nulla
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-12 gap-5 pb-10 md:pt-0 pt-5">
          <div className="md:col-span-5">
            <div className="md:flex md:space-x-4">
              <img
                src="/assets/images/prightone.png"
                className="md:w-40  md:h-80 w-full h-full object-cover"
                alt=""
              />
              <img
                src="/assets/images/prighttwo.png"
                className=" md:w-80 md:h-60 w-full h-full object-cover md:mt-20 md:pt-0 pt-4"
                alt=""
              />
            </div>
            <div className="md:flex md:space-x-4 pt-4">
              <img
                src="/assets/images/prightthree.png"
                className="md:w-60 md:h-80 w-full h-full object-cover"
                alt=""
              />
              <img
                src="/assets/images/prightfour.png"
                className=" md:w-52 md:h-60 w-full h-full object-cover md:pt-0 pt-4"
                alt=""
              />
            </div>
            <div></div>
          </div>
          <div className="md:col-span-2 flex flex-col justify-center">
            <img
              src="/assets/images/pimagecenter.png"
              className="md:w-72 md:h-80 w-full h-full object-cover"
              alt=""
            />
          </div>
          <div className="md:col-span-5">
            <div className="md:flex md:space-x-4">
              <img
                src="/assets/images/pleftone.png"
                className="md:w-60  md:h-48 w-full h-full object-cover md:mt-32"
                alt=""
              />
              <img
                src="/assets/images/plefttwo.png"
                className=" md:w-60 md:h-80 w-full h-full object-cover md:pt-0 pt-4 "
                alt=""
              />
            </div>
            <div className="md:flex md:space-x-4 pt-4">
              <img
                src="/assets/images/pleftthree.png"
                className="md:w-60 md:h-80 w-full h-full object-cover"
                alt=""
              />
              <img
                src="/assets/images/pleftfour.png"
                className=" md:w-52 md:h-60 w-full h-full object-cover md:pt-0 pt-4"
                alt=""
              />
            </div>
            <div></div>
          </div>
        </div>
        <Link href="/portfolio">
          <div className=" md:flex justify-center pb-8">
            <button className="bg-secondary hover:bg-primary text-white px-12 py-2 rounded-md flex items-center">
              <span className="text-base"> View All </span>
              <MdKeyboardArrowRight className=" text-base" />
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;
