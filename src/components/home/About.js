import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoMdThermometer } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md";

const aboutdata = [
  {
    id: 1,
    image: "/assets/images/aboutone.png",
  },
  {
    id: 2,
    image: "/assets/images/abouttwo.png",
  },
  {
    id: 3,
    image: "/assets/images/aboutone.png",
  },
  {
    id: 4,
    image: "/assets/images/abouttwo.png",
  },
];

const About = () => {
  const settings = {
    className: "center",
    slidesToShow: 2,
    focusOnSelect: true,
    dots: false,
    infinite: true,
    arrows: false,
    loop: true,
    autoplay: true,
    speed: 2000,

    lazyLoad: true,
    accessibility: true,
    cssEase: "ease-out",
    swipeToSlide: true,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,

    responsive: [
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,

          speed: 4000,
        },
      },
    ],
  };

  return (
    <div className="bg-[#F6F8F9]">
      <div className="md:grid grid-cols-5 gap-6 items-center container-ack hidden ">
        <div className="col-span-2 md:px-0 px-5 pb-10 md:pb-0  relative">
          <div className="md:text-9xl text-[#F6F8F9] tracking-wider texttransparent font-bold  md:pt-10 ">
            About
          </div>
          <div className="">
            <div className="text-3xl  leading-relaxed font-bold  absolute top-[6.5rem] ">
              About
            </div>
            <div className="md:w-[95%] w-full text-base text-textcolor text-justify font-text  pb-4">
              Lorem ipsum dolor sit amet consectetur. Sapien porttitor non
              ultrices id enim lectus sagittis viverra interdum. Nisi lobortis
              tincidunt convallis viverra. Scelerisque sed orci amet proin cras
              quam pellentesque. Sollicitudin sed velit nunc nunc morbi sed
              aliquam.
            </div>
            <div className="md:w-[95%] w-full text-base text-textcolor text-justify font-text  py-4">
              Lorem ipsum dolor sit amet consectetur. Integer eget orci nec
              massa gravida.
            </div>
            <div className="pt-4">
              <button className="bg-secondary hover:bg-primary text-white px-8 py-2 rounded-md flex items-center">
                <span className="text-base"> Know More </span>
                <MdKeyboardArrowRight className=" text-base text-white hover:text-" />
              </button>
            </div>
          </div>
        </div>

        <div className="pb-5 pt-10 col-span-3 ">
          <Slider {...settings} className=" mx-auto">
            {aboutdata.map((item) => (
              <>
                <div className="group py-10 relative" key={item}>
                  <div className="px-2">
                    <img
                      src={item.image}
                      alt=" "
                      className="  rounded-lg  md:w-[90%]"
                    />
                  </div>
                </div>
              </>
            ))}
          </Slider>
        </div>
      </div>

      <div className=" container-ack md:hidden px-5 pt-16">
        <div className=" md:px-0 px-5 pb-10 md:pb-0  relative">
          <div className="md:text-9xl text-[5rem] text-[#F6F8F9] tracking-wider texttransparent font-bold  md:pt-10 ">
            About
          </div>
          <div className="">
            <div className="text-3xl  leading-relaxed font-bold  absolute md:top-[6.5rem] top-[3rem] ">
              About
            </div>
            <div className="md:w-[95%] w-full text-base text-textcolor text-justify font-text  pb-4 ">
              Lorem ipsum dolor sit amet consectetur. Sapien porttitor non
              ultrices id enim lectus sagittis viverra interdum. Nisi lobortis
              tincidunt convallis viverra. Scelerisque sed orci amet proin cras
              quam pellentesque. Sollicitudin sed velit nunc nunc morbi sed
              aliquam.
            </div>
            <div className="md:w-[95%] w-full text-base text-textcolor text-justify font-text  py-4">
              Lorem ipsum dolor sit amet consectetur. Integer eget orci nec
              massa gravida.
            </div>
            <div className="pt-4">
              <button className="bg-secondary hover:bg-primary text-white px-8 py-2 rounded-md flex items-center">
                <span className="text-base"> Know More </span>
                <MdKeyboardArrowRight className=" text-base text-white hover:text-" />
              </button>
            </div>
          </div>
        </div>

        <div className="pb-5 pt-10  ">
          <Slider {...settings} className=" mx-auto">
            {aboutdata.map((item) => (
              <>
                <div className="group py-10 relative" key={item}>
                  <div className="px-2">
                    <img
                      src={item.image}
                      alt=" "
                      className="  rounded-lg  md:w-[90%]"
                    />
                  </div>
                </div>
              </>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default About;
