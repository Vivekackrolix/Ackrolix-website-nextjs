import React from "react";
import ComponentHead from "../../Common/ComponentHead";

const Technology = () => {
  const process = [
    {
      id: "1",
      src:"/assets/images/service/icon.png",
      name: "Node.js",
      desc: "Lorem ipsum dolor sit amet consect Sapien porttitor. ",
    },
    {
      id: "2",
      src:"/assets/images/service/icon.png",
      name: "React.js",
      desc: "Lorem ipsum dolor sit amet consect Sapien porttitor. ",
    },
    {
      id: "3",
      src:"/assets/images/service/icon.png",
      name: "Angular",
      desc: "Lorem ipsum dolor sit amet consect Sapien porttitor. ",
   },
    {
      id: "4",
      src:"/assets/images/service/icon.png",
      name: "Laravel",
      desc: "Lorem ipsum dolor sit amet consect Sapien porttitor. ",
   },
    {
      id: "5",
      src:"/assets/images/service/icon.png",
      name: "Typescript",
      desc: "Lorem ipsum dolor sit amet consect Sapien porttitor. ",
   },
    {
      id: "6",
      src:"/assets/images/service/icon.png",
      name: "Next.js",
      desc: "Lorem ipsum dolor sit amet consect Sapien porttitor. ",
    },
  ];

  return (
    <div className="container-ack md:px-0 px-5">
       <ComponentHead
        title="Technology"
        sub="Website Technology"
        head="Whatever web applications you’re building, we got your back at every stage of web development, including web design. We’ve built a core system for a bank, an MVP marketplace sold for millions, and other 5☆ custom projects for 140+ companies worldwide."
      />

      <div className="grid md:grid-cols-3 md:py-10  pt-16 gap-10">
        {process.map((item,e) => (
          <>
            <div key={e} className="group  flex justify-start items-start border border-textcolor rounded-md p-3 hover:bg-gray-100 hover:border-transparent">
              <img src={item.src} alt="" />
              <div>
                <h2 className="font-semibold text-lg pt-3 text-black ">
                  {item.name}
                </h2>

                {/* <p className="text-textcolor py-2 pb-4 text-sm ">{item.desc}</p> */}
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Technology;
