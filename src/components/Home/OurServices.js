import Link from "next/link";
import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

const OurServices = () => {
  return (
    <div className="container-ack pb-16 md:px-0 px-5 md:pt-0 pt-16">
      <div className="relative">
        <div className="md:text-[10rem] text-[5rem] text-white tracking-wider text-center texttransparent font-bold  md:pt-10 ">
          Services
        </div>
        <div className="absolute md:top-[9.5rem] top-5 md:left-[11rem]">
          <div className="text-3xl  text-center font-bold ">Our Services</div>
          <p className="text-base text-center ">
            Lorem ipsum dolor sit amet consectetur. Leo tellus in maecenas
            tincidunt urna vulputate. Elit amet nam nulla
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-12 md:pt-0 pt-5">
        <div className="overflow-hidden  cursor-pointer rounded-2xl relative group">
          <div className="w-full absolute text-center bottom-0 drop-shadow-2xl z-10 group-hover:z-0 px-6 py-2  group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-150 ease-in-out text-white font-semibold text-2xl bg-gradient-to-t from-[#090909] bg-opacity-50">
            Lorem Ipsum
          </div>
          <div className=" bg-[#09090996] h-80 z-10 opacity-0 group-hover:opacity-100 transition duration-150 ease-in-out cursor-pointer absolute  inset-x-0  pt-30 text-white flex items-end">
            <div>
              <div className="p-4 space-y-3 text-2xl group-hover:opacity-100 group-hover:translate-y-0  translate-y-4 pb-10 transform transition duration-200 ease-in-out">
                <div className="font-bold text-center">Lorem Ipsum</div>
                <div className="flex justify-center">
                  <div className="text-base text-white text-center w-[70%]">
                    Lorem ipsum dolor sit amet consectetur. Sapien porttitor non
                    ultrices id enim lectus sagittis viverra interdum.
                  </div>
                </div>
                <Link href="/services">
                <div className="pt-4 flex justify-center">
                  <button className="bg-transparent hover:bg-secondary text-white border border-white px-8 py-2 rounded-md flex items-center">
                    <span className="text-base"> Know More </span>
                    <MdKeyboardArrowRight className=" text-base" />
                  </button>
                </div>
                </Link>
              </div>
            </div>
          </div>
          <img
            alt=""
            className="grayscale-0 group-hover:grayscale object-cover h-80 w-full object-left-top"
            src="/assets/images/serviceone.png"
          />
        </div>

        <div className="overflow-hidden  cursor-pointer rounded-2xl relative group">
          <div className="w-full absolute text-center bottom-0 drop-shadow-2xl z-10 group-hover:z-0 px-6 py-2  group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-150 ease-in-out text-white font-semibold text-2xl bg-gradient-to-t from-[#090909] bg-opacity-50">
            Lorem Ipsum
          </div>
          <div className=" bg-[#09090996] h-80 z-10 opacity-0 group-hover:opacity-100 transition duration-150 ease-in-out cursor-pointer absolute  inset-x-0  pt-30 text-white flex items-end">
            <div>
              <div className="p-4 space-y-3 text-2xl group-hover:opacity-100 group-hover:translate-y-0  translate-y-4 pb-10 transform transition duration-200 ease-in-out">
                <div className="font-bold text-center">Lorem Ipsum</div>
                <div className="flex justify-center">
                  <div className="text-base text-white text-center w-[70%]">
                    Lorem ipsum dolor sit amet consectetur. Sapien porttitor non
                    ultrices id enim lectus sagittis viverra interdum.
                  </div>
                </div>
                <Link href="/services">
                <div className="pt-4 flex justify-center">
                  <button className="bg-transparent hover:bg-secondary text-white border border-white px-8 py-2 rounded-md flex items-center">
                    <span className="text-base"> Know More </span>
                    <MdKeyboardArrowRight className=" text-base" />
                  </button>
                </div>
                </Link>
              </div>
            </div>
          </div>
          <img
            alt=""
            className="grayscale-0 group-hover:grayscale object-cover h-80 w-full object-left-top"
            src="/assets/images/serviceone.png"
          />
        </div>
      </div>
    </div>
  );
};

export default OurServices;
