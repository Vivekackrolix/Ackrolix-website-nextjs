import React from "react";
import ComponentHead from "../Common/ComponentHead";

const Leaders = () => {
  const cardData = [
    {
      name: 'Viveka Mandal',
      img: '/assets/images/leaders/leaderone.png',
      role: 'Founder & CEO',
    },
    {
      name: 'Subrata Sarkar',
      img: '/assets/images/leaders/leadertwo.png',
      role: 'Co-Founder & CMO',
    },
    {
      name: 'Jay Gulati',
      img: '/assets/images/leaders/leaderthree.png',
      role: 'Co-Founder & CFO',
    }
  ]
  return (
    <div className="container-ack md:px-0 px-5 md:pt-0 pt-16">
      <ComponentHead
        title="Leaders"
        sub="Our Creators"
        head="Revolutionizing industries through innovation: Empowering your business with our Leaders"
      />

      <div className="grid md:grid-cols-3 gap-2">
        {cardData.map(item => {
          return (
            <div className="cardBox">
              <div className="">
                <div className="front">
                  <div className="flex flex-col justify-center items-center pt-8">
                    <div>
                      <img
                        src={item.img}
                        alt=""
                        className="w-40 h-40 flex justify-center"
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
          )
        })}
      </div>
    </div>
  );
};

export default Leaders;
