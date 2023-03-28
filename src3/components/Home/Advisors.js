import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

const Advisors = () => {
  const advisor = [
    {
      id: 1,

      image: "/assets/images/advisorone.png",
      name: "Layan  Alrahmain, M.D.",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting Industry. Lorem Ipsum has been the Industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      id: 2,

      image: "/assets/images/advisortwo.png",
      name: "Layan  Alrahmain, M.D.",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting Industry. Lorem Ipsum has been the Industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      id: 3,

      image: "/assets/images/advisorthree.png",
      name: "Layan  Alrahmain, M.D.",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting Industry. Lorem Ipsum has been the Industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      id: 4,

      image: "/assets/images/advisortwo.png",
      name: "Layan  Alrahmain, M.D.",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting Industry. Lorem Ipsum has been the Industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      id: 5,

      image: "/assets/images/advisorthree.png",
      name: "Layan  Alrahmain, M.D.",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting Industry. Lorem Ipsum has been the Industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      id: 6,

      image: "/assets/images/advisorone.png",
      name: "Layan  Alrahmain, M.D.",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting Industry. Lorem Ipsum has been the Industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
  ];

  return (
    <div className="container-ack md:px-0 px-5 md:pt-0 pt-16">
      <div className="relative">
        <div className="md:text-[10rem] text-[5rem] text-white tracking-wider text-center texttransparent font-bold  md:pt-10 ">
          Advisors
        </div>
        <div className="absolute md:top-[9.5rem] top-5 md:left-[11rem]">
          <div className="text-3xl  text-center font-bold ">Our Advisors</div>
          <p className="text-base text-center ">
            Lorem ipsum dolor sit amet consectetur. Leo tellus in maecenas
            tincidunt urna vulputate. Elit amet nam nulla
          </p>
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-3">
        {advisor.map((item,e) => (
          <>
            <div className="group p-6" key={e}>
              <div className="relative text-center py-6 border-2 border-[#F6F8F9] duration duration-200 group-hover:-translate-y-2  hover:drop-shadow-sm hover:bg-[#F6F8F9] hover:border-2 rounded-xl">
                <div className="inline-flex justify-center items-center rounded-md md:mt-8 ">
                  <img
                    src={item.image}
                    alt=""
                    className="  rounded-lg w-20 h-20 mx-auto "
                  />
                </div>

                <h2 className="font-semibold text-lg py-3 text-black text-center">
                  {item.name}
                </h2>

                <p className="text-black/50 group-hover:text-black py-2 pb-4  text-center px-3 text-sm ">
                  {item.desc}
                </p>

                <div className="pb-5">
                  <button className="text-black py-2 text-sm border-b group-hover:border-primary group-hover:border-b-2">
                    See More
                  </button>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>

      <div className="flex justify-center md:pt-4">
        <button className="bg-secondary hover:bg-primary text-white px-12 py-2 rounded-md flex items-center">
          <span className="text-base"> View All </span>
          <MdKeyboardArrowRight className=" text-base" />
        </button>
      </div>
    </div>
  );
};

export default Advisors;
