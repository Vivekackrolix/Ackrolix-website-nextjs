import React from "react";

const Technology = () => {
  const process = [
    {
      id: "1",
      src:"/assets/images/service/icon.png",
      name: "Lorem Ipsum",
      desc: "Lorem ipsum dolor sit amet consect Sapien porttitor. ",
    },
    {
      id: "2",
      src:"/assets/images/service/icon.png",
      name: "Lorem Ipsum",
      desc: "Lorem ipsum dolor sit amet consect Sapien porttitor. ",
    },
    {
      id: "3",
      src:"/assets/images/service/icon.png",
      name: "Lorem Ipsum",
      desc: "Lorem ipsum dolor sit amet consect Sapien porttitor. ",
   },
    {
      id: "4",
      src:"/assets/images/service/icon.png",
      name: "Lorem Ipsum",
      desc: "Lorem ipsum dolor sit amet consect Sapien porttitor. ",
   },
    {
      id: "5",
      src:"/assets/images/service/icon.png",
      name: "Lorem Ipsum",
      desc: "Lorem ipsum dolor sit amet consect Sapien porttitor. ",
   },
    {
      id: "6",
      src:"/assets/images/service/icon.png",
      name: "Lorem Ipsum",
      desc: "Lorem ipsum dolor sit amet consect Sapien porttitor. ",
    },
  ];

  return (
    <div className="container-ack md:px-0 px-5">
      <div className="relative">
        <div className="md:text-[10rem] text-[3.5rem] text-white tracking-wider text-center texttransparent font-bold  md:pt-10 ">
          Technology
        </div>
        <div className="absolute md:top-[9.5rem] top-5 md:left-[11rem]">
          <div className="text-3xl  text-center font-bold ">
            Website Technology
          </div>
          <p className="text-base text-center ">
            Lorem ipsum dolor sit amet consectetur. Leo tellus in maecenas
            tincidunt urna vulputate. Elit amet nam nulla
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 md:py-10 md:pt-0 pt-20 gap-10">
        {process.map((item) => (
          <>
            <div className="group  flex justify-start items-center border border-textcolor rounded-md p-3 hover:bg-gray-100 hover:border-transparent">
              <img src={item.src} alt="" />
              <div>
                <h2 className="font-semibold text-lg pt-3 text-black ">
                  {item.name}
                </h2>

                <p className="text-textcolor py-2 pb-4 text-sm ">{item.desc}</p>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Technology;
