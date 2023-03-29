import Link from "next/link";
import React from "react";
import { BiMessageAltDetail } from "react-icons/bi";
import ComponentHead from "../Common/ComponentHead";

const Backend = () => {
  const data = [
    {
      id: 1,
      icon: <BiMessageAltDetail className="text-white" size={24} />,
      name: "Measure your performance",
      desc: "Stay connected with your team and make quick decisions wherever you are. ",
      link: "/technologyDetailPage",
      cols: "md:row-span-1",
    },
    {
      id: 2,
      icon: <BiMessageAltDetail className="text-white" size={24} />,
      name: "Measure your performance",
      desc: "Stay connected with your team and make quick decisions wherever you are. ",
      link: "/technologyDetailPage",
      cols: "md:row-span-1",
    },
    {
      id: 3,
      icon: <BiMessageAltDetail className="text-white" size={24} />,
      name: "Measure your performance",
      desc: "Stay connected with your team and make quick decisions wherever you are. ",
      link: "/technologyDetailPage",
      cols: "md:row-span-1",
    },
    {
      id: 4,
      icon: <BiMessageAltDetail className="text-white" size={24} />,
      name: "Measure your performance",
      desc: "Stay connected with your team and make quick decisions wherever you are. ",
      link: "/technologyDetailPage",
      cols: "md:row-span-1",
    },
    {
      id: 5,
      src: "/assets/images/techimg.png",
      cols: "md:row-span-2",
    },
    {
      id: 6,
      icon: <BiMessageAltDetail className="text-white" size={24} />,
      name: "Measure your performance",
      desc: "Stay connected with your team and make quick decisions wherever you are. ",
      link: "/technologyDetailPage",
      cols: "md:row-span-1",
    },
    {
      id: 7,
      icon: <BiMessageAltDetail className="text-white" size={24} />,
      name: "Measure your performance",
      desc: "Stay connected with your team and make quick decisions wherever you are. ",
      link: "/technologyDetailPage",
      cols: "md:row-span-1",
    },
    {
      id: 8,
      icon: <BiMessageAltDetail className="text-white" size={24} />,
      name: "Measure your performance",
      desc: "Stay connected with your team and make quick decisions wherever you are. ",
      link: "/technologyDetailPage",
      cols: "md:row-span-1",
    },
  ];

  return (
    <div className="container-ack md:px-0 px-5">
      <ComponentHead
        title="Backend"
        sub=" Gain more insight"
        head="Nunc convallis semper justo quis tempor. Praesent molestie, lorem sed imperdiet tempor, libero urna semper urna, facilisis vulputate velit arcu vitae mi. Donec ac nisi ex."
      />
      

      <div>
        <div className="grid md:grid-cols-3 gap-10 py-16">
          {data.map((item,index) => (
            <>
              <div className={`${item.cols} group `} key={index}>
                {index===4?<div>
                  <img src={item.src} className=" " />
                </div>:
                <div className="relative text-center py-6 border-2 border-[#F6F8F9] duration duration-200 group-hover:-translate-y-2  hover:drop-shadow-sm hover:bg-[#F6F8F9]/40 hover:border-2 rounded-xl md:h-[17rem]">
                  <div className="flex justify-center items-center ">
                    <div className="bg-black rounded-md p-2 ">{item.icon}</div>
                  </div>

                  <h2 className="font-semibold text-lg py-3 text-black text-center">
                    {item.name}
                  </h2>

                  <p className="text-black/50 group-hover:text-black py-2 pb-4  text-center px-3 text-sm ">
                    {item.desc}
                  </p>

                  <div className="pb-5">
                    {/* if link will be used only in one in maping */}
                    <Link href={item.link ? item?.link : ""}>
                      {/* <Link href={item.link}> */}
                      <button className="text-black py-2 text-sm border-b group-hover:border-primary group-hover:border-b-2">
                        Know More
                      </button>
                    </Link>
                  </div>
                </div>}
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Backend;
