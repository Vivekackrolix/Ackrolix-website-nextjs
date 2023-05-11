import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdKeyboardArrowRight } from "react-icons/md";
// import { HiLightBulb } from "react-icons/hi";
import Link from "next/link";
const Banner = () => {
  const settings = {
    className: "center",
    centerMode: true,
    centerPadding: "180px",
    slidesToShow: 1,
    slidesToScroll: 1,
    focusOnSelect: true,
    dots: false,
    infinite: true,
    arrows: true,
    loop: true,
    autoplay: true,
    autoplaySpeed: 4500,
    speed: 1000,
    lazyLoad: true,
    accessibility: true,
    cssEase: "ease-out",
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          centerMode: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          // initialSlide: 2,
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
      image: "/assets/images/banner/banner-one.jpg",
      title: 'Innovation at its finest 1',
      heading: 'Product Conceptualization & Development 1',
      desc: 'From concept to reality Ackrolix Innovations delivers game changing products for startups & fortune companies.'
    },
    {
      id: 2,
      image: "/assets/images/banner/banner-four.svg",
      title: 'Innovation at its finest 2',
      heading: 'Product Conceptualization & Development 2',
      desc: 'From concept to reality Ackrolix Innovations delivers game changing products for startups & fortune companies.'
    },
    {
      id: 3,
      image: "/assets/images/banner/banner-five.svg",
      title: 'Innovation at its finest 3',
      heading: 'Product Conceptualization & Development 3',
      desc: 'From concept to reality Ackrolix Innovations delivers game changing products for startups & fortune companies.'
    },
  ];

  return (
    <div className="bg-right"
      style={{
        backgroundImage: 'url("/assets/images/mainbackground.png ")',
      }}>
      <div className="md:px-0 px-5 HomePageSlider md:pb-20 pb-5 md:pt-0 pt-5">
        <Slider {...settings} className="mx-auto relative">
          {clientsData.map((item, index) => (
            <>
              <div className="group SldrImgDta" key={index}>
                <div className="relative text-center">
                  <div className="">
                    <img
                      src={item.image}
                      alt="banner-img"
                      className="rounded-lg  mx-auto md:h-[650px]  h-[450px] object-cover"
                    />
                  </div>
                  {/* Text Card Start */}
                  <div className="text-left">
                    <div className="bg-white boxshadowbanner py-12 md:w-[43%] w-[85%] absolute md:top-0 top-6 md:left-[.6rem] left-7 rounded-lg mt-2 px-5">
                      <div className="flex justify-start items-center space-x-1">
                        <span className="text-primary md:text-lg text-base font-semibold">
                          {" "}
                          {item.title}{" "}
                        </span>{" "}
                        <img src="/assets/icons/icon.png" className="bulb" />
                      </div>
                      <h2 className="text-secondary md:text-[28px] text-lg font-bold leading-[1.2] pt-3">
                        {item.heading}
                      </h2>
                      <p className="text-textcolor pt-4 text-[15px] text-justify font-medium">
                        {item.desc}
                      </p>
                      <div className="pt-10 w-full">
                        <Link href="/contact">
                          <button className="button-3 bg-secondary hover:bg-primary text-white px-12 py-3 justify-center rounded-md flex items-center w-full text-center">
                            <div className="eff-3"></div>
                            <span className="text-base flex items-center ">
                              {" "}
                              Discover Now
                              <MdKeyboardArrowRight className=" text-base" />
                            </span>
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                  {/* Text Card End */}
                </div>
              </div>
            </>
          ))}
        </Slider>
        {/* <div className="">
          <div className="bg-white boxshadowbanner md:px-10 py-12 md:w-[33%] w-[85%] absolute md:top-0 top-6 md:left-[3.6rem] left-7 rounded-lg  mt-2  px-5 ">
            <div className="flex justify-start items-center space-x-1">
              <span className="text-primary md:text-lg text-base font-semibold">
                {" "}
                Innovation at its finest{" "}
              </span>{" "}
              <img src="/assets/icons/icon.png" className="w-9 bulb" />
            </div>
            <h2 className="text-secondary md:text-[28px] text-lg font-bold leading-[1.2] pt-3">
              Product Conceptualization & Development
            </h2>
            <p className="text-textcolor pt-4 text-[15px] text-justify font-medium">
              From concept to reality Ackrolix Innovations delivers game changing products for startups & fortune companies.
            </p>
            <div className="pt-10 w-full">
              <Link href="/contact">
                <button className="button-3 bg-secondary hover:bg-primary text-white px-12 py-3 justify-center rounded-md flex items-center w-full text-center">
                  <div className="eff-3"></div>
                  <span className="text-base flex items-center ">
                    {" "}
                    Discover Now
                    <MdKeyboardArrowRight className=" text-base" />

                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Banner;
