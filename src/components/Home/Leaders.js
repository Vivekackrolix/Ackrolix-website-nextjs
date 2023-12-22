import React from "react";
import Image from "next/image";
import ComponentHead from "../Common/ComponentHead";

const Leaders = () => {
  const cardData = [
    {
      name: "Jay Gulati",
      img: "/assets/images/leaders/leaderthree.png",
      role: "Director",
    },
    {
      name: "Akshay Gupta",
      img: "/assets/images/leaders/Akshay.jpeg",
      role: "Business Head & Partner",
    },
    {
      name: "Anurag Gupta",
      img: "/assets/images/leaders/Anurag.jpeg",
      role: "Business Head & Partner",
    },
  ];
  return (
    <div className="container-ack md:px-0 px-5 md:pt-0 pt-12 ">
      <ComponentHead
        title="Leaders"
        sub="Our Visionaries"
        head="We Empower Your Business with Our Trailblazers and Drive Innovation Across Industries."
      />

      <div className="grid md:grid-cols-3">
        {cardData.map((item, key) => {
          return (
            <div className="cardBox" key={key}>
              <div className="">
                <div className="front">
                  <div className="flex flex-col justify-center items-center pt-8">
                    <div>
                      <img
                        src={item.img}
                        alt=""
                        className="w-40 h-40 flex justify-center object-cover"
                      />
                    </div>
                    <p className="text-lg font-semibold text-black pt-5">
                      {item.name}
                    </p>
                    <p className="text-textcolor text-base">{item.role}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Leaders;
