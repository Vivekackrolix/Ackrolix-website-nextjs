import Link from "next/link";
import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import ComponentHead from "../Common/ComponentHead";

const Advisors = () => {
  const advisor = [
    {
      id: 1,

      image: "/assets/images/advisor/ashwani.png",
      name: "Ashwani Kumar",
      desc: "Technology and business visionary with over 22+ years of successful & fruitful career in IT Management, who provided strategic direction on technology initiatives such as implementing Multiple ERP Modules in line with the core organizational goals and business & profit objectives of the company.",
      link: "/advisorDetailPage",
    },
    {
      id: 2,

      image: "/assets/images/advisor/nishant.png",
      name: "Nishant Joon",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      link: "/advisorDetailPage",
    },
    {
      id: 3,

      image: "/assets/images/advisor/saleem.png",
      name: "Saleem Nawaz",
      desc: "Saleem Nawaz Mandi Shaikh, a digipreneur and Web3 specialist has initiated D369 & is raising $1 bn for 250+ start-ups under the patronage of the Royal Family of UAE & multiple renowned Venture Capitalists and will be entirely based on Web3 and Metaverse..",
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
        sub="Our Industry Experts"
        head="Transforming ideas into reality: Our Industry Experts understand the importance of being responsible stewards of the environment"
      />

      <div className="grid md:grid-cols-3 gap-6 pt-2">
        {advisor.map((item, e) => (
          <>
            <div className="group advisors" key={e}>
              <div className="advisor-card relative text-center py-4 border-2 border-[#F6F8F9] duration duration-200 group-hover:-translate-y-2 hover:drop-shadow-sm hover:bg-[#F6F8F9] hover:border-2 rounded-xl md:h-[22rem]">
                <div className="inline-flex justify-center items-center rounded-md md:mt-4 ">
                  <img
                    src={item.image}
                    alt="advisor"
                    className="rounded-lg w-20 h-20 mx-auto"
                  />
                </div>

                <h2 className="font-semibold text-lg py-3 text-black text-center">
                  {item.name}
                </h2>

                <p className="text-black/50 group-hover:text-black text-justify tracking-tighter px-5 text-sm ">
                  {item.desc}
                </p>
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
