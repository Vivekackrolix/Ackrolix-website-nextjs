import React from "react";
import { AiFillPlayCircle } from "react-icons/ai";

const process = [
  {
    id: "1",
    name: "Measure your performance",
    desc: "Stay connected with your team and make quick decisions wherever you are.",
  },
  {
    id: "2",
    name: "Custom analytics",
    desc: "Get a complete sales dashboard in the cloud. See activity, revenue and social metrics all in one place.",
  },
  {
    id: "3",
    name: "Team Management",
    desc: "Our calendar lets you know what is happening with customer and projects .",
  },
  {
    id: "4",
    name: "Build your website",
    desc: "A tool that lets you build a dream website even if you know nothing about web design or programming.",
  },
  {
    id: "5",
    name: "Connect multiple apps",
    desc: "The first business platform to bring together all of your products from one place.",
  },
  {
    id: "6",
    name: "Easy setup",
    desc: "End to End Business Platform, Sales Management, Marketing Automation, Help Desk",
  },
];
const Process = () => {
  return (
    <div>
    <div
      style={{
        backgroundImage: 'url("/assets/images/service/servicebackground.png")',
      }}
    >
      <div className="container-ack md:px-0 px-5">
        <div className="grid md:grid-cols-2 gap-10 items-center container-ack  ">
          <div className="md:px-0 px-5 pb-10 md:pb-0 md:pt-0 pt-10  relative">
            <div className="md:text-9xl text-[5rem] text-[#f6f7f9] tracking-wider texttransparent font-bold  md:pt-10 ">
              Process
            </div>
            <div className="">
              <div className="text-3xl  leading-relaxed font-bold  absolute md:top-[6.5rem] top-[6rem] ">
                Process We Follow
              </div>

              <div className="md:w-[95%] w-full text-base text-textcolor text-justify font-text  py-4">
                With our integrated CRM, project management, collaboration and
                invoicing capabilities, you can manage your business in one
                secure platform.
              </div>
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
          {process.map((item) => (
            <>
              <div className="group ">
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

export default Process;
