import React from "react";
import { AiFillPlayCircle } from "react-icons/ai";

const process = [
  {
    id: "1",
    name: "Planning and Requirements Gathering",
    desc: "This initial phase involves understanding the project requirements, identifying goals and objectives, defining the target audience, and planning the overall scope of the project.",
  },
  {
    id: "2",
    name: "UI/UX Design",
    desc: "In this phase, the website's structure and visual elements are defined. It includes creating wireframes, mockups, and prototypes to outline the layout, navigation, and overall user experience",
  },
  {
    id: "3",
    name: "Content Creation",
    desc: "Once the design is finalized, content creation begins. This includes writing and organizing the textual content, creating or selecting visual assets such as images and videos, and ensuring the content is optimized for search engines (SEO).",
  },
  {
    id: "4",
    name: "Development",
    desc: "The development phase involves translating the design and content into functional code. It includes front-end development, which focuses on building the client-side elements of the website using HTML, CSS, and JavaScript.",
  },
  {
    id: "5",
    name: "Testing and Quality Assurance",
    desc: " Once the development is complete, thorough testing is conducted to ensure the website functions as expected and is free of bugs and errors.",
  },
  {
    id: "6",
    name: "Deployment and Launch",
    desc: " After successful testing, the website is deployed to a production environment, making it publicly accessible. This involves setting up hosting, configuring servers, and transferring the website files. ",
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
                Process
              </div>
              <div className="absolute md:top-[6.7rem] top-[4rem] inset-x-0 flex justify-left">
                <div className="text-[46px]  text-left font-bold max-w-xl">
                  Process We Follow
                </div>

              </div>
              <div className="md:w-[95%] w-full text-base text-textcolor text-justify font-text  py-4">
                The web development process typically involves several steps, from planning and designing to coding, testing, and deployment. While the specific process can vary depending on the project and the development methodology being followed.
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
