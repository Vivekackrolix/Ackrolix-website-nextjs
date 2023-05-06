import React from "react";
import ComponentHead from "../Common/ComponentHead";

const Leaders = () => {
  return (
    <div className="container-ack md:px-0 px-5 md:pt-0 pt-16">
      <ComponentHead
        title="Leaders"
        sub="Our Creators"
        head="Revolutionizing industries through innovation: Empowering your business with our Leaders"
      />

      <div className="grid md:grid-cols-3 gap-2">
        <div className="cardBox  ">
          <div className="">
            <div className="front">
              <div className="flex flex-col justify-center items-center pt-8">
                <div>
                  <img
                    src="/assets/images/leaders/leaderone.png"
                    alt=""
                    className="w-40 h-40 flex justify-center"
                  />
                </div>
                <p className="text-lg font-semibold text-black pt-5">
                 Viveka Mandal
                </p>
                <p className="text-textcolor text-base">Founder & CEO</p>
              </div>
            </div>
            {/* <div className="back">
              <p className="text-lg font-semibold text-black pt-10">
               Viveka Mandal
              </p>
              <p className="text-textcolor pt-5 ">Founder & CEO</p>
              <p className="text-textcolor pt-2">
                Lorem ipsum dolor sit amet consectetur. Leo tellus in maecenas
                tincidunt urna vulputate. Elit amet nam nulla
              </p>
            </div> */}
          </div>
        </div>

        <div className="cardBox ">
          <div className="">
            <div className="front">
              <div className="flex flex-col justify-center items-center pt-8">
                <div>
                  <img
                    src="/assets/images/leaders/leadertwo.png"
                    alt=""
                    className="w-40 h-40 flex justify-center"
                  />
                </div>
                <p className="text-lg font-semibold text-black pt-5">
                  Subrata Sarkar
                </p>
                <p className="text-textcolor text-base">Co-Founder & CMO</p>
              </div>
            </div>
            {/* <div className="back">
              <p className="text-lg font-semibold text-black pt-10">
                Subrata Sarkar
              </p>
              <p className="text-textcolor pt-5 ">Co-Founder & CMO</p>
              <p className="text-textcolor pt-2">
                Lorem ipsum dolor sit amet consectetur. Leo tellus in maecenas
                tincidunt urna vulputate. Elit amet nam nulla
              </p>

             
            </div> */}
          </div>
        </div>
       

        <div className="cardBox ">
          <div className="">
            <div className="front">
              <div className="flex flex-col justify-center items-center pt-8">
                <div>
                  <img
                    src="/assets/images/leaders/leaderthree.png"
                    alt=""
                    className="w-40 h-40 flex justify-center"
                  />
                </div>
                <p className="text-lg font-semibold text-black pt-5">
                  Jay Gulati
                </p>
                <p className="text-textcolor text-base">Co-Founder & CFO</p>
              </div>
            </div>
            {/* <div className="back">
              <p className="text-lg font-semibold text-black pt-10">
                Jay Gulati
              </p>
              <p className="text-textcolor pt-5 ">Co-Founder & CFO</p>
              <p className="text-textcolor pt-2">
                Lorem ipsum dolor sit amet consectetur. Leo tellus in maecenas
                tincidunt urna vulputate. Elit amet nam nulla
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaders;
