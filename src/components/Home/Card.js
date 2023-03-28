import Link from "next/link";
import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

const Card = () => {
  return (
    <div className="container-ack pt-16 md:px-0 px-5">
      <div className="bg-[#F6F8F9]  rounded-xl ">
        <div className="grid md:grid-cols-5 gap-6 items-center ">
          <div className="md:col-span-2 md:px-0 px-5 pb-10 md:pb-0">
            <div className=" md:pl-8 md:px-0 px-5 md:pt-0 pt-5">
              <div className="text-3xl  leading-relaxed font-bold  ">
                Lorem ipsum dolor sit amet consectetur.
              </div>
              <div className="md:w-[95%] w-full text-base text-textcolor text-justify font-text  pb-4">
                Lorem ipsum dolor sit amet consectetur. Sapien porttitor non
                ultrices id enim lectus sagittis viverra interdum.
              </div>
              <Link href="/contact">
                <div className="pt-4">
                  <button className="bg-secondary hover:bg-primary text-white px-8 py-2 rounded-md flex items-center">
                    <span className="text-base"> Contact Us </span>
                    <MdKeyboardArrowRight className=" text-base" />
                  </button>
                </div>
              </Link>
            </div>
          </div>

          <div className=" md:col-span-3">
            <img src="/assets/images/cardimage.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
