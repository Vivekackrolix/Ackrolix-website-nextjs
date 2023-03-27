import Link from "next/link";
import React from "react";

const tabs = [
  {
    id: 1,
    text: "Products Based",
  },

  {
    id: 2,
    text: "Services Based",
  },
];

const productData = [
  {
    id: 1,
    image: "/assets/images/service/serviceimg.png",
    name: "Lorem Ipsum",
    desc: "Lorem ipsum dolor sit amet consectetur. Sapien porttitor non ultrices id enim lectus sagittis viverra interdum.",
    link: "/serviceDetailPage",
  },
  {
    id: 2,
    image: "/assets/images/service/serviceimg1.png",
    name: "Lorem Ipsum",
    desc: "Lorem ipsum dolor sit amet consectetur. Sapien porttitor non ultrices id enim lectus sagittis viverra interdum.",
    link: "/serviceDetailPage",
  },
  {
    id: 3,
    image: "/assets/images/service/serviceimg.png",
    name: "Lorem Ipsum",
    desc: "Lorem ipsum dolor sit amet consectetur. Sapien porttitor non ultrices id enim lectus sagittis viverra interdum.",
    link: "/serviceDetailPage",
  },
  {
    id: 4,
    image: "/assets/images/service/serviceimg1.png",
    name: "Lorem Ipsum",
    desc: "Lorem ipsum dolor sit amet consectetur. Sapien porttitor non ultrices id enim lectus sagittis viverra interdum.",
    link: "/serviceDetailPage",
  },
  {
    id: 5,
    image: "/assets/images/service/serviceimg.png",
    name: "Lorem Ipsum",
    desc: "Lorem ipsum dolor sit amet consectetur. Sapien porttitor non ultrices id enim lectus sagittis viverra interdum.",
    link: "/serviceDetailPage",
  },
  {
    id: 6,
    image: "/assets/images/service/serviceimg1.png",
    name: "Lorem Ipsum",
    desc: "Lorem ipsum dolor sit amet consectetur. Sapien porttitor non ultrices id enim lectus sagittis viverra interdum.",
    link: "/serviceDetailPage",
  },
];

const serviceData = [
  {
    id: 1,
    image: "/assets/images/service/serviceimg1.png",
    name: "Lorem Ipsum",
    desc: "Lorem ipsum dolor sit amet consectetur. Sapien porttitor non ultrices id enim lectus sagittis viverra interdum.",
    link: "/serviceDetailPage",
  },
  {
    id: 2,
    image: "/assets/images/service/serviceimg.png",
    name: "Lorem Ipsum",
    desc: "Lorem ipsum dolor sit amet consectetur. Sapien porttitor non ultrices id enim lectus sagittis viverra interdum.",
    link: "/serviceDetailPage",
  },
  {
    id: 3,
    image: "/assets/images/service/serviceimg1.png",
    name: "Lorem Ipsum",
    desc: "Lorem ipsum dolor sit amet consectetur. Sapien porttitor non ultrices id enim lectus sagittis viverra interdum.",
    link: "/serviceDetailPage",
  },
  {
    id: 4,
    image: "/assets/images/service/serviceimg.png",
    name: "Lorem Ipsum",
    desc: "Lorem ipsum dolor sit amet consectetur. Sapien porttitor non ultrices id enim lectus sagittis viverra interdum.",
    link: "/serviceDetailPage",
  },
  {
    id: 5,
    image: "/assets/images/service/serviceimg1.png",
    name: "Lorem Ipsum",
    desc: "Lorem ipsum dolor sit amet consectetur. Sapien porttitor non ultrices id enim lectus sagittis viverra interdum.",
    link: "/serviceDetailPage",
  },
  {
    id: 6,
    image: "/assets/images/service/serviceimg.png",
    name: "Lorem Ipsum",
    desc: "Lorem ipsum dolor sit amet consectetur. Sapien porttitor non ultrices id enim lectus sagittis viverra interdum.",
    link: "/serviceDetailPage",
  },
];

const Tabs = () => {
  const [select, setSelect] = React.useState(1);

  return (
    <div className="container-ack md:px-0 px-5">
      <div>
        <div className="flex justify-center md:space-x-3 space-x-2 cursor-pointer">
          {tabs.map((item, index) => (
            <div
              onClick={() => setSelect(item.id)}
              className="group py-10"
              key={index}
            >
              <div
                className={` md:px-12 px-3 py-2 rounded-md ${
                  select === item.id
                    ? "bg-secondary text-white border-2 "
                    : "   border-2 border-black/90"
                }`}
              >
                {item.text}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="">
        {select === 1 ? (
          <>
            <div className="grid md:grid-cols-3 gap-2">
              {productData.map((item, index) => (
                <div key={index}>
                  <div>
                    <div className="group p-6" key="id">
                      <div className="relative text-center  border-2 border-[#F6F8F9] duration duration-200 group-hover:-translate-y-2  hover:drop-shadow-sm hover:bg-[#F6F8F9]/40 hover:border-2 rounded-xl md:h-[26rem]">
                        <div className=" ">
                          <img
                            src={item.image}
                            alt=""
                            className="  rounded-lg  "
                          />
                        </div>

                        <h2 className="font-semibold text-lg pb-2 pt-5 text-black text-center">
                          {item.name}
                        </h2>

                        <p className="text-black/50 group-hover:text-black py-2 pb-4  text-center px-3 text-sm ">
                          {item.desc}
                        </p>

                        <div className="pb-5">
                          <Link href={item.link}>
                            <button className="text-black py-2 text-sm border-b group-hover:border-primary group-hover:border-b-2">
                              View All
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            <div className="grid md:grid-cols-3 gap-2">
              {serviceData.map((item, index) => (
                <div key={index}>
                  <div>
                    <div className="group p-6" key="id">
                      <div className="relative text-center  border-2 border-[#F6F8F9] duration duration-200 group-hover:-translate-y-2  hover:drop-shadow-sm hover:bg-[#F6F8F9]/40 hover:border-2 rounded-xl">
                        <div className=" ">
                          <img
                            src={item.image}
                            alt=""
                            className="  rounded-lg  "
                          />
                        </div>

                        <h2 className="font-semibold text-lg pb-2 pt-5 text-black text-center">
                          {item.name}
                        </h2>

                        <p className="text-black/50 group-hover:text-black py-2 pb-4  text-center px-3 text-sm ">
                          {item.desc}
                        </p>

                        <div className="pb-5">
                          <Link href={item.link}>
                            <button className="text-black py-2 text-sm border-b group-hover:border-primary group-hover:border-b-2">
                              View All
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Tabs;
