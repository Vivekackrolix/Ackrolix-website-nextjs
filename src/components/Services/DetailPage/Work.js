import React from "react";

const Work = () => {
  const work = [
    {
      id: "1",
      src: "/assets/images/service/workshowcase.png",
    },
    {
      id: "2",
      src: "/assets/images/service/workshowcase.png",
    },
    {
      id: "3",
      src: "/assets/images/service/workshowcase.png",
    },
    {
      id: "4",
      src: "/assets/images/service/workshowcase.png",
    },
    {
      id: "5",
      src: "/assets/images/service/workshowcase.png",
    },
    {
      id: "6",
      src: "/assets/images/service/workshowcase.png",
    },
  ];
  return (
    <div className="container-ack md:px-0 px-5">
      <div className="relative">
        <div className="md:text-[10rem] text-[4.5rem] text-white tracking-wider text-center texttransparent font-bold  md:pt-10 ">
          Showcase
        </div>
        <div className="absolute md:top-[9.5rem] top-5 md:left-[11rem]">
          <div className="text-3xl  text-center font-bold ">Work Showcase</div>
          <p className="text-base text-center ">
            Lorem ipsum dolor sit amet consectetur. Leo tellus in maecenas
            tincidunt urna vulputate. Elit amet nam nulla
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-5 md:pt-0 pt-12">
        {work.map((item) => (
          <>
            <div className="border border-textcolor p-2 rounded-md">
              <img src={item.src} alt="" />
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Work;
