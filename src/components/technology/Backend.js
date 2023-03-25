import Link from "next/link";
import React from "react";
import { BiMessageAltDetail } from "react-icons/bi";

const Backend = () => {

    const data = [
        {
          id: 1,
          icon:<BiMessageAltDetail className="text-white" size={24}/>,
          name: "Measure your performance",
          desc: "Stay connected with your team and make quick decisions wherever you are. ",
       link:"/advisorDetailPage",
        },
        {
          id: 2,
          icon:<BiMessageAltDetail className="text-white" size={24}/>,
          name: "Measure your performance",
          desc: "Stay connected with your team and make quick decisions wherever you are. ",
       
          link:"/advisorDetailPage", },
        {
          id: 3,
          icon:<BiMessageAltDetail className="text-white" size={24}/>,
          name: "Measure your performance",
          desc: "Stay connected with your team and make quick decisions wherever you are. ",
          link:"/advisorDetailPage",
        },
        {
          id: 4,
          icon:<BiMessageAltDetail className="text-white" size={24}/>,
          name: "Measure your performance",
          desc: "Stay connected with your team and make quick decisions wherever you are. ",
          link:"/advisorDetailPage",
        },
        {
          id: 5,
          icon:<BiMessageAltDetail className="text-white" size={24}/>,
          name: "Measure your performance",
          desc: "Stay connected with your team and make quick decisions wherever you are. ",
          link:"/advisorDetailPage",
        },
        {
          id: 6,
          icon:<BiMessageAltDetail className="text-white" size={24}/>,
          name: "Measure your performance",
          desc: "Stay connected with your team and make quick decisions wherever you are. ",
          link:"/advisorDetailPage",
        },
      ];

  return (
    <div className="container-ack">
      <div className="relative">
        <div className="md:text-[10rem] text-[5rem] text-white tracking-wider text-center texttransparent font-bold  md:pt-10 ">
          Backend
        </div>
        <div className="absolute md:top-[9.5rem] top-5 md:left-[3rem]">
          <div className="text-3xl  text-center font-bold ">
            Gain more insight into how people use your
          </div>
          <p className="text-base text-center w-[95%] pt-2">
            With our integrated CRM, project management, collaboration and
            invoicing capabilities, you can manage every aspect of your business
            in one secure platform.
          </p>
        </div>
      </div>

<div>
<div className="grid md:grid-cols-3 gap-3 py-16">
        {data.map((item) => (
          <>
            <div className="group p-6" key="id">
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
                  {/* <Link href={item.link ? item?.link : ''}> */}
                  <Link href={item.link} >
                  <button className="text-black py-2 text-sm border-b group-hover:border-primary group-hover:border-b-2">
                    Know More
                  </button>
                  </Link>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
</div>

    </div>
  );
};

export default Backend;
