import React from "react";
import ComponentHead from "../../Common/ComponentHead";

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
       <ComponentHead
        title="Technology"
        sub="Website Technology"
        head="Nunc convallis semper justo quis tempor. Praesent molestie, lorem sed imperdiet tempor, libero urna semper urna, facilisis vulputate velit arcu vitae mi. Donec ac nisi ex."
      />

      <div className="grid md:grid-cols-3 md:py-10  pt-16 gap-10">
        {process.map((item,e) => (
          <>
            <div key={e} className="group  flex justify-start items-center border border-textcolor rounded-md p-3 hover:bg-gray-100 hover:border-transparent">
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
