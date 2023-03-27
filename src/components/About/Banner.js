import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

const Banner = () => {
  return (
    <div
      className="h-screen"
      style={{
        backgroundImage: 'url("/assets/images/mainbackground.png ")',
      }}
    >
      <div className="md:grid grid-cols-2 gap-6 items-center container-ack  ">
        <div className="pb-5 pt-10 ">
          <img src="/assets/images/aboutusimg.png" alt="" />
        </div>

        <div className=" md:px-0 px-5 pb-10 md:pb-0  relative">
          <div className="md:text-9xl text-[6rem] text-white tracking-[1rem] texttransparent font-bold  md:pt-10 ">
            <span className="text-[#fbfcfc]">Abo</span>ut
          </div>
          <div className="">
            <div className="text-3xl   font-bold  absolute md:top-[5rem]  top-[4rem]">
              <span className="text-primary">Lorem ipsum</span> dolor sit amet
              Eget at auctor purus
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
      </div>

      <div className=" grid md:grid-cols-12 md:gap-0 gap-4 justify-center container-ack pt-8">
        <div className="md:col-span-3 flex flex-col  items-center">
            <p className=" text-2xl font-bold text-secondary"> 300+</p>
            <p>Lorem ipsum dolor sit</p>
        </div>
        <div className=" md:col-span-3 flex flex-col items-center">
            <p className=" text-2xl font-bold text-secondary"> 300+</p>
            <p>Lorem ipsum dolor sit</p>
        </div>
        <div className="md:col-span-3 flex flex-col items-center">
            <p className=" text-2xl font-bold text-secondary"> 300+</p>
            <p>Lorem ipsum dolor sit</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
