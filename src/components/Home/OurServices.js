import Link from "next/link";
import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import ComponentHead from "../Common/ComponentHead";

const OurServices = () => {
  return (
    <div className="container-ack  md:px-0 px-5 md:pt-0 pt-12">
      <ComponentHead
        title="Our Services"
        sub="Our Exceptional Services"
        head="Ackrolix Innovations is redefining the digital impact of online advertising services in India. Our resonating services champion ethical and eco-conscious practices, elevating solutions to new heights.        "
      />
      <div className="grid md:grid-cols-3 gap-10 pt-2">
        <div className="overflow-hidden rounded-2xl relative group concept">
          {/* <div className="w-full absolute text-center bottom-0 drop-shadow-2xl z-10 opacity-0 group-hover:opacity-100 group-hover:z-0 px-6 py-2 group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-150 ease-in-out text-white font-semibold text-2xl bg-gradient-to-t from-[#090909] bg-opacity-70">
            Product Conceptualization
          </div> */}
          <div className=" bg-[#09090973] backdrop-blur-[1px] h-full z-10 opacity-1 absolute  inset-x-0 text-white flex items-center">
            <div>
              <div className="p-4 space-y-3 text-2xl max-[480px]:text-xl">
                <h3 className="font-bold text-center">
                  Product Conceptualisation
                </h3>
                <div className="flex justify-center">
                  <p className="text-sm text-white text-center w-[70%] max-[480px]:w-[100%]">
                    We simplify your complex product into something memorable
                    and intuitive. Our products are seamless with excellent
                    UI/UX that requires fewer clicks for unparalleled user
                    engagement.
                  </p>
                </div>

                <div className="flex justify-center">
                  <Link href="/services">
                    <button className=" button-1  px-8 py-2 rounded-md">
                      <div className="eff-1"></div>
                      <span className="text-base flex items-center font-medium">
                        {" "}
                        Learn More
                        <MdKeyboardArrowRight className=" text-base" />
                      </span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <img
            alt="product-concept"
            className=" object-cover h-full w-full object-left-top"
            src="/assets/images/product-concept.jpg"
          />
        </div>

        <div className="overflow-hidden rounded-2xl relative group concept concept-close">
          <h3 className="w-full absolute grid top-[-16px] items-center cursor-pointer font-bold text-center drop-shadow-2xl z-10 group-hover:z-0 px-6 py-2 group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-150 ease-in-out text-white text-3xl bg-[#09090933] h-full max-[480px]:text-xl border-2 border-yellow-500 rounded-lg">
            Product Development
          </h3>

          <div className=" bg-[#09090973] h-80 z-10 opacity-0 group-hover:opacity-100 transition duration-150 ease-in-out absolute  inset-x-0  pt-30 text-white flex items-center">
            <div>
              <div className="p-4 space-y-3 text-2xl group-hover:opacity-100 group-hover:translate-y-0  translate-y-4 pb-10 transform transition duration-200 ease-in-out max-[480px]:text-xl">
                <h3 className="font-bold text-center">
                  Product <br />
                  Development
                </h3>
                <div className="flex justify-center">
                  <p className="text-sm text-white text-center w-[70%] max-[480px]:w-[100%]">
                    Our Vision? Transforming Concepts into Web/App Realities.
                    Employing cutting-edge market-launch techniques and
                    technologies, we innovatively turn ideas into powerful
                    digital trends.
                  </p>
                </div>
                <div className="flex justify-center">
                  <Link href="/services">
                    <button className=" button-1  px-8 py-2 rounded-md">
                      <div className="eff-1"></div>
                      <span className="text-base flex items-center font-medium">
                        {" "}
                        Learn More
                        <MdKeyboardArrowRight className=" text-base" />
                      </span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <img
            alt=""
            className="grayscale-0 group-hover:grayscale object-cover h-80 w-full object-left-top"
            src="/assets/images/product-develop.jpg"
          />
        </div>
        <div className="overflow-hidden rounded-2xl relative group concept concept-close">
          <h3 className="w-full absolute grid top-[-16px] items-center cursor-pointer font-bold text-center drop-shadow-2xl z-10 group-hover:z-0 px-6 py-2 group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-150 ease-in-out text-white text-3xl bg-[#09090933] h-full max-[480px]:text-xl border-2 border-yellow-500 rounded-lg ">
            Digital Modernisation
          </h3>

          <div className=" bg-[#09090973] h-80 z-10 opacity-0 group-hover:opacity-100 transition duration-150 ease-in-out absolute  inset-x-0  pt-30 text-white flex items-center">
            <div>
              <div className="p-4 space-y-3 text-2xl group-hover:opacity-100 group-hover:translate-y-0  translate-y-4 pb-10 transform transition duration-200 ease-in-out max-[480px]:text-xl">
                <h3 className="font-bold text-center">
                  Digital <br />
                  Modernization
                </h3>
                <div className="flex justify-center">
                  <p className="text-sm text-white text-center w-[70%] max-[480px]:w-[100%] pt-3">
                    Navigating the Digital Landscape, we arm organisations with
                    tools for thriving in a dynamic environment.
                  </p>
                </div>
                <div className="flex justify-center pt-6">
                  <Link href="/services">
                    <button className=" button-1  px-8 py-2 rounded-md">
                      <div className="eff-1"></div>
                      <span className="text-base flex items-center font-medium">
                        {" "}
                        Learn More
                        <MdKeyboardArrowRight className=" text-base" />
                      </span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <img
            alt=""
            className="grayscale-0 group-hover:grayscale object-cover h-80 w-full object-left-top"
            src="/assets/images/digitalModernization.png"
          />
        </div>
      </div>
    </div>
  );
};

export default OurServices;
