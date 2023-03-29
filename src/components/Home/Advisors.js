import Link from "next/link";
import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import ComponentHead from "../Common/ComponentHead";

const Advisors = () => {
  const advisor = [
    {
      id: 1,

      image: "/assets/images/advisorone.png",
      name: "Layan  Alrahmain, M.D.",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      link: "/advisorDetailPage",
    },
    {
      id: 2,

      image: "/assets/images/advisortwo.png",
      name: "Layan  Alrahmain, M.D.",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      link: "/advisorDetailPage",
    },
    {
      id: 3,

      image: "/assets/images/advisorthree.png",
      name: "Layan  Alrahmain, M.D.",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      link: "/advisorDetailPage",
    },
    {
      id: 4,

      image: "/assets/images/advisortwo.png",
      name: "Layan  Alrahmain, M.D.",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      link: "/advisorDetailPage",
    },
    {
      id: 5,

      image: "/assets/images/advisorthree.png",
      name: "Layan  Alrahmain, M.D.",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      link: "/advisorDetailPage",
    },
    {
      id: 6,

      image: "/assets/images/advisorone.png",
      name: "Layan  Alrahmain, M.D.",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      link: "/advisorDetailPage",
    },
  ];

  return (
    <div className="container-ack md:px-0 px-5 md:pt-0 pt-16">
      <ComponentHead
        title="Advisors"
        sub="Our Advisors"
        head="Nunc convallis semper justo quis tempor. Praesent molestie, lorem sed imperdiet tempor, libero urna semper urna, facilisis vulputate velit arcu vitae mi. Donec ac nisi ex."
      />

      <div className="grid md:grid-cols-3 gap-6 pt-12">
        {advisor.map((item, e) => (
          <>
            <div className="group " key={e}>
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

                <p className="text-black/50 group-hover:text-black py-2 pb-4  text-justify tracking-tighter px-3 text-sm ">
                  {item.desc}
                </p>
                <Link href={item.link}>
                  <div className="pb-5">
                    <button className="text-black py-2 text-sm border-b group-hover:border-primary group-hover:border-b-2">
                      See More
                    </button>
                  </div>
                </Link>
              </div>
            </div>
          </>
        ))}
      </div>

      <div className="flex justify-center pb-10 pt-5">
        <Link href="/advisors">
          <button className=" button-2  px-12 py-2 rounded-md">
            <div className="eff-2"></div>
            <span className="text-base flex items-center ">
              {" "}
              View All
              <MdKeyboardArrowRight className=" text-base" />
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Advisors;
