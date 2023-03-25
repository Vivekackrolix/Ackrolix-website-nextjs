import React from "react";

const Banner = () => {
  return (
    <div className="container-ack md:px-0 px-5">
      <div className="relative">
        <div className="md:text-[9.8rem] text-[3.3rem] text-white tracking-wider text-center texttransparent font-bold  md:pt-10 ">
          Technologies
        </div>
        <div className="absolute md:top-[10rem] top-[2.3rem] md:left-[31rem] left-[6rem]">
          <div className="text-3xl  text-center font-bold ">Technologies</div>
        </div>
      </div>
      <p className="text-base text-center md:w-[80%] mx-auto ">
        Nunc convallis semper justo quis tempor. Praesent molestie, lorem sed
        imperdiet tempor, libero urna semper urna, facilisis vulputate velit
        arcu vitae mi. Donec ac nisi ex."
      </p>


      <div className="md:grid grid-cols-2 gap-6 items-center container-ack  ">
        <div className="pb-5 pt-10 ">
          <img src="/assets/images/aboutusimg3.png" alt="" />
        </div>

        <div className=" md:px-0 px-5 pb-10 md:pb-0  relative">
          
          <div className="">
            <div className="text-3xl  font-bold ">
             Lorem Ipsum dolor sit amet
              Eget at auctor purus
            </div>
            <div className="md:w-[95%] w-full text-base text-textcolor text-justify font-text  pb-4 md:pt-8 pt-4">
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
    </div>
  );
};

export default Banner;
