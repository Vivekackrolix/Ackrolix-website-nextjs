import React, { useEffect } from "react";;
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdKeyboardArrowRight } from "react-icons/md";

const clientsData = [
  {
    id: 1,

    image: "/assets/images/testimonialone.png",
    text: "Name",
    designation: "(Designation)",
    para: "Lorem Ipsum is simply dummy text of the printing andtypesettingindustryLorem Ipsum is simply dummy text of the printing and typesetting industry typese",
  },
  {
    id: 2,

    image: "/assets/images/testimonialtwo.png",
    text: "Name",
    designation: "(Designation)",
    para: "Lorem Ipsum is simply dummy text of the printing andtypesettingindustryLorem Ipsum is simply dummy text of the printing and typesetting industry typese",
  },
  {
    id: 3,

    image: "/assets/images/testimonialthree.png",
    text: "Name",
    designation: "(Designation)",
    para: "Lorem Ipsum is simply dummy text of the printing andtypesettingindustryLorem Ipsum is simply dummy text of the printing and typesetting industry typese",
  },
  {
    id: 4,

    image: "/assets/images/testimonialone.png",
    text: "Name",
    designation: "(Designation)",
    para: "Lorem Ipsum is simply dummy text of the printing andtypesettingindustryLorem Ipsum is simply dummy text of the printing and typesetting industry typese",
  },
  {
    id: 5,
    image: "/assets/images/testimonialtwo.png",
    text: "Name",
    designation: "(Designation)",
    para: "Lorem Ipsum is simply dummy text of the printing andtypesettingindustryLorem Ipsum is simply dummy text of the printing and typesetting industry typese",
  },
  {
    id: 6,
    image: "/assets/images/testimonialthree.png",
    text: "Name",
    designation: "(Designation)",
    para: "Lorem Ipsum is simply dummy text of the printing andtypesettingindustryLorem Ipsum is simply dummy text of the printing and typesetting industry typese",
  },
];

const Testimonial = () => {


  const settings = {
    className: "center",
    slidesToShow: 3,
    focusOnSelect: true,
    dots: false,
    infinite: true,
    arrows: true,
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
          slidesToShow: 1,
          slidesToScroll: 1,

          speed: 4000,
        },
      },
    ],
  };

  return (
    <>
      <div className="container-ack mmd:px-0 px-5 md:pt-0 pt-10">
      
<div className=" md:w-[1150px] h-full"  style={{
                backgroundImage: 'url("/assets/images/backgroundtestimonial.png ")',
              }}>
      <div className="relative">
        <div className="md:text-[10rem] text-[4rem] text-white tracking-wider text-center texttransparent font-bold  md:pt-10 ">
        Testimonial
        </div>
        <div className="absolute md:top-[9.5rem] top-5 md:left-[11rem]">
          <div className="text-3xl  text-center font-bold ">Testimonial</div>
          <p className="text-base text-center ">
            Lorem ipsum dolor sit amet consectetur. Leo tellus in maecenas
            tincidunt urna vulputate. Elit amet nam nulla
          </p>
        </div>
      </div>

        <div className="md:pt-0 pt-10">
          <Slider {...settings} className="testimonialSlider mx-auto">
            {clientsData.map((item) => (
              <>
                <div className="group py-10 relative" key={item}>
                  <div className="hover:bg-[#F6F8F9] border-2 border-[#F6F8F9] text-left mx-3 py-8 rounded-md  hovertestimonial">
                    <div className="flex flex-col items-center justify-left">
                      <img
                        src={item.image}
                        alt=" "
                        className="  rounded-lg w-[25%] absolute top-0  left-[9rem]"
                      />
                      <div className="px-4 pt-6">
                        
                        <div className="text-black text-lg font-text pt-4 text-center">
                          {item.para}
                        </div>
                        <div className="text-xl font-semibold pt-3 text-black text-center">
                          {item.text}
                        </div>
                        <div className="text-black text-sm text-center">
                          {item.designation}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </Slider>
        </div>

        <div className="pt-4 flex items-center justify-center">
              <button className="bg-secondary hover:bg-primary text-white px-12 py-2 rounded-md flex items-center">
                <span className="text-base"> View All </span>
                <MdKeyboardArrowRight className=" text-base" />
              </button>
            </div>
            </div>
      </div>
    </>
  );
};

export default Testimonial;
