import React, { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BiChevronLeft } from "react-icons/bi";
import { BiChevronRight } from "react-icons/bi";
import Link from "next/link";
import ComponentHead from "../Common/ComponentHead";
const Memories = () => {
  const resumeData = [
    { id: 1, sliderImg: "assets/images/memoriesone.png" },
    { id: 2, sliderImg: "assets/images/memoriesone.png" },
    { id: 3, sliderImg: "assets/images/memoriesone.png" },
    { id: 4, sliderImg: "assets/images/memoriesone.png" },
    { id: 5, sliderImg: "assets/images/memoriesone.png" },
  ];

  const PrevArrow = ({ onClick }) => {
    return (
      <div
        className="arrow prev cursor-pointer text-5xl absolute sm:top-[250px] bg-white text-black border-[1px]  prevarrow rounded-[50%] sm:left-[29%] z-10"
        onClick={onClick}
      >
        <BiChevronLeft />
      </div>
    );
  };

  const NextArrow = ({ onClick }) => {
    return (
      <div
        className="arrow next text-5xl absolute sm:top-[250px] bg-white cursor-pointer text-black border-[1px] rounded-[50%] nextarrow sm:right-[29%] z-10"
        onClick={onClick}
      >
        <BiChevronRight />
      </div>
    );
  };

  const [imgslide, setImgslide] = useState(0);

  const settings = {
    dots: false,
    autoplay: true,
    className: "center",
    infinite: true,
    lazyLoad: true,
    centerMode: true,
    centerPadding: "0px",
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          arrows: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          arrows: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        },
      },
    ],
    beforeChange: (current, next) => setImgslide(next),
  };

  return (
    <div className="container-ack md:px-0 px-5 md:pt-0 pt-16">
      <ComponentHead
        title="Memories"
        sub="Our Memories"
        head="Nunc convallis semper justo quis tempor. Praesent molestie, lorem sed imperdiet tempor, libero urna semper urna, facilisis vulputate velit arcu vitae mi. Donec ac nisi ex."
      />
      <div className="mt-10">
        <div className="text-white  mx-auto">
          <div className="absolute  md:right-20 right-[5%] cursor-pointer top-10 z-20 md:top-10"></div>
          <div className="pt-15 MemoriesSlider">
            <Slider {...settings}>
              {resumeData.map((item, indx) => {
                return (
                  <div
                    key={indx}
                    className={
                      "scale-100 SldrMemories rounded-sm md:shadow-md md:shadow-[#fff] opacity-100"
                    }
                  >
                    <img
                      alt="Slider"
                      src={item.sliderImg}
                      className={"rounded-sm md:w-full  mx-auto"}
                    />
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
      <Link href="/moments">
        <div className="flex justify-center md:pt-4">
          <button className="bg-secondary hover:bg-primary text-white px-12 py-2 rounded-md flex items-center">
            <span className="text-base"> View All </span>
            <MdKeyboardArrowRight className=" text-base" />
          </button>
        </div>
      </Link>
    </div>
  );
};

export default Memories;
