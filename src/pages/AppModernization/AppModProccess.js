import React from "react";
import { AiFillPlayCircle } from "react-icons/ai";

const process = [
  {
    id: "1",
    name: "Rehosting or Lift-and-Shift",
    desc: "This approach involves moving an existing application to a new infrastructure without making significant changes to the application's architecture or functionality.",
  },
  {
    id: "2",
    name: "Refactoring or Re-architecting",
    desc: "Refactoring involves making structural changes to the application's codebase and architecture while preserving its core functionality. It aims to improve the application's performance, scalability, and maintainability.",
  },
  {
    id: "3",
    name: "Replatforming",
    desc: "Replatforming entails moving an application to a different platform or technology stack while retaining its core features & functionality. For example, migrating an on-premises application to a cloud platform.",
  },
  {
    id: "4",
    name: "Rearchitecting or Redesigning",
    desc: "Rearchitecting involves a significant overhaul of the application's architecture and design to meet current business needs and technological advancements.",
  },
  {
    id: "5",
    name: "Containerization",
    desc: "Containerization involves encapsulating an application and its dependencies into containers, using technologies like Docker. This approach allows applications to run consistently across different environments and simplifies deployment and scalability.",
  },
  {
    id: "6",
    name: "Replacement or Rebuilding",
    desc: "In some cases, it may be more feasible to replace an existing application with a new solution rather than attempting to modernize it. This approach involves rebuilding the application from scratch, leveraging modern technologies and design principles.",
  },
];
const AppModProccess = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: 'url("/assets/images/service/servicebackground.png")',
        }}
      >
        <div className="container-ack md:px-0 px-5">
          <div className="grid md:grid-cols-2 gap-10 items-center container-ack">
            <div className="relative">
              <div className="md:text-[8rem] text-[5rem] tracking-wider text-left texttransparent font-bold  md:pt-10 ">
                Services
              </div>
              <div className="absolute md:top-[6.7rem] top-[4rem] inset-x-0 flex justify-left">
                <div className="text-[36px] text-left font-bold max-w-xl">
                  App Modernization Services
                </div>

              </div>
              <div className="md:w-[95%] w-full text-base text-textcolor text-justify font-text  py-4">
              Full-scope app modernization services you can start using quickly (even in weeks!) to fix, boost, and revamp your systems with teams that have worked for over 160 companies.
              </div>
            </div>


            <div className="pb-5 md:pt-10  ">
              <div className="  relative ">
                <img
                  src="/assets/images/service/videoservice.png"
                  alt=""
                  className=""
                />
                <div className=" absolute md:top-[8rem] top-[4.5rem] md:left-[15rem] left-[10rem]">
                  <div className="relative inline-flex">
                    <span className="flex h-16 w-16">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary bg-opacity-50 opacity-75 duration-500"></span>
                      <span className="">
                        <AiFillPlayCircle className="text-secondary cursor-pointer relative inline-flex rounded-full h-16 w-16 " />
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 py-10 gap-10">
            {process.map((item, index) => (
              <>
                <div className="group " key={index}>
                  <div className="flex">
                    <p className="bg-black rounded-full px-3 py-1 text-lg text-white ">{item.id}</p>
                  </div>
                  <h2 className="font-semibold text-lg pt-3 text-black ">
                    {item.name}
                  </h2>

                  <p className="text-textcolor py-2 pb-4 text-sm ">
                    {item.desc}
                  </p>

                </div>
              </>
            ))}
          </div>
        </div>
      </div>
      <div className="h-[7.5rem]" style={{
        backgroundImage: 'url("/assets/images/service/wave.png")',
      }}></div>
    </div>
  );
};

export default AppModProccess
