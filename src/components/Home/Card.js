import Link from "next/link";
import React, { useEffect } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

const Card = () => {
  useEffect(() => {
    document.querySelectorAll(".card-slider").forEach((item) => {
      let clone = item.querySelector(".card-slider-items").cloneNode(true);
      clone.classList.add("clone");
      clone.ariaHidden = true;
      item.append(clone);
    });
  }, [])
  
  return (
    <div className="container-ack pt-16 md:px-0 px-5">
      <div className="bg-[#F6F8F9]  rounded-xl ">
        <div className="grid md:grid-cols-2 gap-6 items-center relative">
          <div className=" md:px-0 px-5 pb-10 md:pb-0">
            <div className=" md:pl-8 md:px-0 px-5 max-[480px]:px-0 md:pt-0 pt-5">
              <div className="text-[32px] max-[480px]:text-[20px] font-bold  ">
                Great Things In Business Are Never Done By One Person.
                <br />
                <span className="text-primary">
                  They're Done By A Team Of People
                </span>
              </div>

              <div className="flex justify-left  pt-5">
                <Link href="/contact">
                  <button className=" button-2  px-8 py-2 rounded-md">
                    <div className="eff-2"></div>
                    <span className="text-base flex items-center ">
                      {" "}
                      Contact Us
                      <MdKeyboardArrowRight className=" text-base" />
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="card-cta">
            <div className="card-slide">
              <div className="card-slider sliderOne">
                <div className="card-slider-items">
                  <div className="item">
                    <img
                      src="https://source.unsplash.com/random/300x450/?earth,1"
                      alt=""
                      width="300"
                      height="450"
                    />
                  </div>
                  <div className="item">
                    <img
                      src="https://source.unsplash.com/random/300x450/?earth,2"
                      alt=""
                      width="300"
                      height="450"
                    />
                  </div>
                  <div className="item">
                    <img
                      src="https://source.unsplash.com/random/300x450/?earth,3"
                      alt=""
                      width="300"
                      height="450"
                    />
                  </div>
                  <div className="item">
                    <img
                      src="https://source.unsplash.com/random/300x450/?earth,4"
                      alt=""
                      width="300"
                      height="450"
                    />
                  </div>
                </div>
              </div>
              <div className="card-slider">
                <div className="card-slider-items">
                  <div className="item">
                    <img
                      src="https://source.unsplash.com/random/300x450/?fire,1"
                      alt=""
                      width="300"
                      height="450"
                    />
                  </div>
                  <div className="item">
                    <img
                      src="https://source.unsplash.com/random/300x450/?fire,2"
                      alt=""
                      width="300"
                      height="450"
                    />
                  </div>
                  <div className="item">
                    <img
                      src="https://source.unsplash.com/random/300x450/?fire,3"
                      alt=""
                      width="300"
                      height="450"
                    />
                  </div>
                  <div className="item">
                    <img
                      src="https://source.unsplash.com/random/300x450/?fire,4"
                      alt=""
                      width="300"
                      height="450"
                    />
                  </div>
                </div>
              </div>
              <div className="card-slider hidden-m">
                <div className="card-slider-items">
                  <div className="item">
                    <img
                      src="https://source.unsplash.com/random/300x450/?water,1"
                      alt=""
                      width="300"
                      height="450"
                    />
                  </div>
                  <div className="item">
                    <img
                      src="https://source.unsplash.com/random/300x450/?water,2"
                      alt=""
                      width="300"
                      height="450"
                    />
                  </div>
                  <div className="item">
                    <img
                      src="https://source.unsplash.com/random/300x450/?water,3"
                      alt=""
                      width="300"
                      height="450"
                    />
                  </div>
                  <div className="item">
                    <img
                      src="https://source.unsplash.com/random/300x450/?water,4"
                      alt=""
                      width="300"
                      height="450"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* <img src="/assets/images/cardimage.png" alt="" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
