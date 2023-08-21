import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { IoMdThermometer } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md";
import Link from "next/link";

const aboutdata = [
  {
    id: 1,
    image: "/assets/images/about/aboutone.png",
    alttext: "ad company in gurgaon"
  },
  {
    id: 2,
    image: "/assets/images/about/aboutwo.png",
    alttext: "best advertising agency in gurgaon"

  },
  {
    id: 3,
    image: "/assets/images/about/abouthree.png",
    alttext: "advertising agency in gurgaon"

  },
  {
    id: 4,
    image: "/assets/images/about/aboutfour.png",
    alttext: "advertising company in gurgaon"

  },
];

const About = () => {
  const settings = {
    className: "center",
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: false,
    focusOnSelect: false,
    dots: true,
    infinite: true,
    arrows: false,
    loop: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 300,
    lazyLoad: true,
    accessibility: true,
    cssEase: "ease-out",
    swipeToSlide: true,
    // adaptiveHeight: true,

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
          slidesToShow: 2,
          slidesToScroll: 2,
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
    <div className="bg-[#F6F8F9] md:py-10 md:pt-0 pt-12">
      <div className="md:grid grid-cols-5 gap-4 justfiy-center items-center mobile-hide ">
        <div className="col-span-2 md:px-0 px-5  ">

          <div className="">
            <div className="md:w-[95%] pl-16 w-full md:text-base text-xs text-textcolor text-justify font-text pb-4">
              <div className="line-heading">
                <div className="text-[46px] max-[480px]:text-[30px] text-secondary relative z-10 pb-5 text-left font-bold max-w-xl">
                 Firm Volunteers 
                </div>
              </div>
              <div className="load-wrapp relative bottom-[15px]">
                <div className="load">
                  <div className="line"></div>
                  <div className="line"></div>
                  <div className="line"></div>
                </div>
              </div>
              <p className="mb-2">
                {" "}
                Ackrolix Innovations Pvt. Ltd. works with businesses 
                to develop web, mobile, and design-related digital experiences. 
                We honour entrepreneurship and development while turning product
                 ideas into real-world offerings. We turn our clients' ideas into reality.
                  Thereby, we enable the expansion of their businesses.
                  </p>
              
              <div className="flex justify-start pb-10 pt-5">
                <Link href="/about">
                  <button className=" button-2  px-8 py-2 rounded-md">
                    <div className="eff-2"></div>
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

        <div className="col-span-3 AboutSliderSection">
          <Slider {...settings} className=" mx-auto">
            {aboutdata?.map((item, index) => (
              <>
                <div className="group py-2 relative SldrDtaAbout" key={index}>
                  <div className="px-2">
                    <img
                      src={item.image}
                      alt={item.alttext}
                      className="  rounded-lg  w-full"
                    />
                  </div>
                </div>
              </>
            ))}
          </Slider>
        </div>
      </div>

      <div className=" container-ack md:hidden px-5">
        <div className="md:pb-0 relative">
          <div className="w-full md:text-base text-xs text-textcolor text-justify font-text pb-4">
            <div className="line-heading">
              <div className="text-[46px] max-[480px]:text-[30px] text-secondary relative z-10 pb-5 text-left font-bold max-w-xl">
                Who We Are
              </div>
            </div>
            <div className="load-wrapp relative bottom-[15px]">
              <div className="load">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
              </div>
            </div>
            <div className="w-full text-base text-textcolor text-justify font-text  pb-4 ">
              Ackrolix Innovations Pvt Ltd is an award winning product
              conceptualization & development company that partners with
              businesses to create digital experiences to their customer&apos;s love,
              across strategy, design, mobile applications and web technologies.
            </div>
            <div className="w-full text-base text-textcolor text-justify font-text  py-4">
              Over the last Eight years, we have employed technology as a
              force-multiplier and built disruptive, business-driven and
              measurable design and technology interventions to make this
              complex world of ours, exceedingly obvious. We have successfully
              moved business metrics and delivered high impact work for 120+
              startups, unicorns, nonprofits and industry titans across sectors
              such as Jindal Steel & Power (JSPL) , Intech Organics, Expert
              Buddy, Nesto Hub & many more..
            </div>
            <div className="flex pb-10 pt-4">
              <Link href="/about">
                <button className=" button-2  px-12 py-2 rounded-md">
                  <div className="eff-2"></div>
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

        <div className="pb-5">
          <Slider {...settings} className=" mx-auto">
            {aboutdata.map((item) => (
              <>
                <div className="group relative" key={item}>
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
