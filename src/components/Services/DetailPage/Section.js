import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Tabs from "./Tabs";

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

const Section = () => {
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
    autoplay: true,
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
    <div className="container-ack py-16 md:px-0 px-5">
      <div className="grid md:grid-cols-2 gap-6 items-start container-ack  ">
        <div className="  pb-10 md:pb-0  relative">
          <div className="md:text-9xl text-[5rem] text-white tracking-wider texttransparent font-bold  md:pt-10 ">
            Lorem
          </div>
          <div className="">
            <div className="text-3xl  leading-relaxed font-bold  absolute md:top-[6.5rem] top-[3rem] ">
              Lorem ipsum dolor
            </div>
            <div className="md:w-[95%] w-full text-base text-textcolor text-justify font-text  pb-4">
              Lorem ipsum dolor sit amet consectetur. Sapien porttitor non
              ultrices id enim lectus sagittis viverra interdum. Nisi lobortis
              tincidunt convallis viverra. Scelerisque sed orci amet proin cras
              quam pellentesque. Sollicitudin sed velit nunc nunc morbi sed
              aliquam.
            </div>
            <div className="md:w-[95%] w-full text-base text-textcolor text-justify font-text  pb-4">
              Lorem ipsum dolor sit amet consectetur. Fermentum tortor et arcu
              pellentesque tempor cursus cursus amet odio. Orci eu sagittis leo
              duis enim mi massa etiam.
            </div>
            <div className="md:w-[95%] w-full  flex space-x-3 pt-10  ">
              <div>
                {" "}
                <hr className="w-[30px] h-[5px] bg-primary mt-2" />{" "}
              </div>
              <span className="text-base text-textcolor text-justify font-text">
                Lorem ipsum dolor sit amet consectetur. Fermentum tortor et arcu
                pellentesque tempor cursus cursus amet odio. Orci eu sagittis
                leo duis enim mi massa etiam.
              </span>
            </div>
            <div className="md:w-[95%] w-full  flex space-x-3 pt-3 ">
              <div>
                {" "}
                <hr className="w-[30px] h-[5px] bg-secondary mt-2" />{" "}
              </div>
              <span className="text-base text-textcolor text-justify font-text">
                Lorem ipsum dolor sit amet consectetur. Fermentum tortor et arcu
                pellentesque tempor cursus cursus amet odio. Orci eu sagittis
                leo duis enim mi massa etiam.
              </span>
            </div>
            <div className="md:w-[95%] w-full  flex space-x-3  pt-3">
              <div>
                {" "}
                <hr className="w-[30px] h-[5px] bg-primary mt-2" />{" "}
              </div>
              <span className="text-base text-textcolor text-justify font-text">
                Lorem ipsum dolor sit amet consectetur. Fermentum tortor et arcu
                pellentesque tempor cursus cursus amet odio. Orci eu sagittis
                leo duis enim mi massa etiam.
              </span>
            </div>
          </div>
        </div>

        <div className="pb-5 md:pt-10  ">
          <Tabs />
        </div>
      </div>
      <div className=" pt-16">
        <Slider {...settings} className="testimonialSlider mx-auto">
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

export default Section;
