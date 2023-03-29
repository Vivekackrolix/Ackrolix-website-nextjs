import Link from "next/link";
import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import ComponentHead from "../Common/ComponentHead";

const OurServices = () => {
  return (
    <div className="container-ack pb-16 md:px-0 px-5 md:pt-0 pt-6">
      <ComponentHead
        title="Services"
        sub="Our Services "
        head="Nunc convallis semper justo quis tempor. Praesent molestie, lorem sed imperdiet tempor, libero urna semper urna, facilisis vulputate velit arcu vitae mi. Donec ac nisi ex."
      />
      <div className="grid md:grid-cols-2 gap-12 md:pt-16 pt-5">
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

                <div className="flex justify-center">
                  <Link href="/services">
                    <button className=" button-1  px-8 py-2 rounded-md">
                      <div className="eff-1"></div>
                      <span className="text-base flex items-center ">
                        {" "}
                        Know More
                        <MdKeyboardArrowRight className=" text-base" />
                      </span>
                    </button>
                  </Link>
                </div>
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
                <div className="flex justify-center">
                  <Link href="/services">
                    <button className=" button-1  px-8 py-2 rounded-md">
                      <div className="eff-1"></div>
                      <span className="text-base flex items-center ">
                        {" "}
                        Know More
                        <MdKeyboardArrowRight className=" text-base" />
                      </span>
                    </button>
                  </Link>
                </div>
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
