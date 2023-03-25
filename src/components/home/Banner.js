import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdKeyboardArrowRight } from "react-icons/md";
const Banner = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "180px",
    slidesToShow: 1,
    autoplay: false,
    autoplaySpeed: 1000,
    focusOnSelect: true,
    dots: false,
    infinite: true,
    arrows: true,
    loop: true,
    autoplay: true,
    speed: 1500,
    lazyLoad: true,
    accessibility: true,
    cssEase: "ease-out",
    swipeToSlide: true,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "0px",
        },
      },
    ],
  };

  const clientsData = [
    {
      id: 1,

      image: "/assets/images/mainbannertwo.png",
    },
    {
      id: 2,

      image: "/assets/images/mainbannertwo.png",
    },
    {
      id: 3,

      image: "/assets/images/mainbannertwo.png",
    },
    {
      id: 4,

      image: "/assets//images/mainbannertwo.png",
    },
  ];

  return (
    <div className=" md:px-0 px-5 HomePageSlider">
      <Slider {...settings} className="mx-auto relative">
        {clientsData.map((item) => (
          <>
            <div className="group SldrImgDta" key={item}>
              <div className="relative text-center">
                <div className="">
                  <img
                    src={item.image}
                    alt=" "
                    className="  rounded-lg  mx-auto h-[90vh] md:h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </>
        ))}
      </Slider>

      <div className="bg-white drop-shadow-md md:px-10 py-12 md:w-[30%] w-[60%] absolute md:top-0 top-0 md:left-14 rounded-lg  md:mt-0 mt-5  px-5 ">
        <h2 className="text-secondary md:text-3xl text-1xl">
          <span className="text-primary"> Lorem ipsum </span>dolor sit amet Eget
          at auctor purus{" "}
        </h2>
        <p className="text-textcolor pt-4 text-[15px]">
          Lorem ipsum dolor sit amet consectetur. Mus id quam mauris semper
          viverra hac faucibus morbi quam.
        </p>
        <div className="pt-10 w-full">
          <button className="bg-secondary hover:bg-primary text-white px-12 py-3 justify-center rounded-md flex items-center w-full text-center">
            <span className="text-base"> View All </span>
            <MdKeyboardArrowRight className=" text-base" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
