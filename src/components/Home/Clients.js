import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const clientsData = [
  {
    id: 1,

    image: "/assets/images/clientone.png",
  },
  {
    id: 2,

    image: "/assets/images/clienttwo.png",
  },
  {
    id: 3,

    image: "/assets/images/clientthree.png",
  },
  {
    id: 4,

    image: "/assets//images/clientone.png",
  },
  {
    id: 5,

    image: "/assets//images/clienttwo.png",
  },
  {
    id: 6,

    image: "/assets//images/clientthree.png",
  },
];

const Clients = () => {

  const settings = {
    className: "center",
    slidesToShow: 5,
    autoplay: true,
    autoplaySpeed: 700,
    focusOnSelect: true,
    dots: false,
    infinite: true,
    arrows: true,
    loop: true,
    speed: 1000,

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
    <div className="container-ack md:px-0 px-5 md:pt-0 pt-16">
      <div className="md:grid grid-cols-2 items-center hidden pt-12 ">
      <div className=" ">
      <div className="relative">
            <div className="md:text-[7rem] text-[5rem] tracking-wider text-left texttransparent font-bold  ">
            Clients
            </div>
            <div className="absolute md:top-[3.6rem] top-[4rem]  inset-x-0 flex justify-left">
              <div className="text-[42px]  text-left font-bold ">
              Our Satisfied Clients
              </div>
            </div>
          </div>
         
        </div>
        <div className="text-base text-left text-textcolor  ">
        Lorem ipsum dolor sit amet consectetur. Sapien porttitor non ultrices id enim lectus sagittis viverra interdum.Lorem ipsum dolor sit amet consectetur.
        </div>
      </div>

      <div className="relative md:hidden block">
        <div className="md:text-[10rem] text-[5rem] text-white tracking-wider text-center texttransparent font-bold  md:pt-10 ">
        Clients
        </div>
        <div className="absolute md:top-[9.5rem] top-5 md:left-[11rem]">
          <div className="text-3xl  text-center font-bold ">Our Satisfied Clients</div>
          <p className="text-base text-center ">
            Lorem ipsum dolor sit amet consectetur. Leo tellus in maecenas
            tincidunt urna vulputate. Elit amet nam nulla
          </p>
        </div>
      </div>

      <div className="py-16">
        <Slider {...settings} className=" mx-auto">
          {clientsData.map((item) => (
            <>
              <div className="group " key={item}>
                <div className="relative text-center">
                  <div className="">
                    <img
                      src={item.image}
                      alt=" "
                      className="  rounded-lg w-[50%] mx-auto "
                    />
                  </div>
                </div>
              </div>
            </>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Clients;
