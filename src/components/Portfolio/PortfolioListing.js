import Link from "next/link";
import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

function PortfolioListing() {
  const tabs = [
    {
      id: 1,
      text: "All",
    },

    {
      id: 2,
      text: "Website",
    },
    {
      id: 3,
      text: "Ecoomerce",
    },

    {
      id: 4,
      text: "Software",
    },
  ];

  const [select, setSelect] = React.useState(1);
  return (
    <>
      <div className="container-ack md:px-0 px-5">
        <div className="grid md:grid-cols-4 md:gap-7 cursor-pointer w-[60%] mx-auto border-2 border-secondary/10 p-2 rounded-md md:mt-10 mt-12">
          {tabs.map((item, e) => (
            <div onClick={() => setSelect(item.id)} className="group  " key={e}>
              {" "}
              <div
                className={` text-center py-2 rounded-md ${select == item.id
                  ? "bg-secondary text-white border-2 "
                  : "   border-2 border-transparent"
                  }`}
              >
                {item.text}
              </div>
            </div>
          ))}
        </div>

        <div className=" pt-16">
          {select == 1 ? (
            <>
              <div className="container-ack gradientbackgroundone px-12 pt-12">
                <div className=" grid grid-cols-3 justify-between ">
                  <div className="col-span-2">
                    <h2 className="text-xl font-semibold ">
                      The standard Lorem Ipsum passage, used since the 1500s
                    </h2>
                    <p className="">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                  <div>
                    <div className="flex justify-end pb-10 col-span-1">
                      <Link href="#">
                        <button className=" button-2  px-7 py-2 rounded-md">
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
                </div>
                <div>
                  <img src="/assets/images/portfolio/portfoliomile.png" />
                </div>
              </div>
              <div className="mt-12">
                <div className="container-ack gradientbackgroundtwo px-12 pt-12 ">
                  <div className=" grid grid-cols-3 justify-between ">
                    <div className="col-span-2">
                      <h2 className="text-xl font-semibold ">
                        The standard Lorem Ipsum passage, used since the 1500s
                      </h2>
                      <p className="">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                    </div>
                    <div>
                      <div className="flex justify-end pb-10 col-span-1">
                        <Link href="#">
                          <button className=" button-2  px-7 py-2 rounded-md">
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
                  </div>
                  <div>
                    <img src="/assets/images/portfolio/portfoliomont.png" />
                  </div>
                </div>
              </div>
            </>
          ) : select == 2 ? (
            <>
              <div className="container-ack gradientbackgroundone px-12 pt-12">
                <div className=" grid grid-cols-3 justify-between ">
                  <div className="col-span-2">
                    <h2 className="text-xl font-semibold ">
                      The standard Lorem Ipsum passage, used since the 1500s
                    </h2>
                    <p className="">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                  <div>
                    <div className="flex justify-end pb-10 col-span-1">
                      <Link href="#">
                        <button className=" button-2  px-7 py-2 rounded-md">
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
                </div>
                <div>
                  <img src="/assets/images/portfolio/portfoliomile.png" />
                </div>
              </div>
              <div className="mt-12">
                <div className="container-ack gradientbackgroundtwo px-12 pt-12 ">
                  <div className=" grid grid-cols-3 justify-between ">
                    <div className="col-span-2">
                      <h2 className="text-xl font-semibold ">
                        The standard Lorem Ipsum passage, used since the 1500s
                      </h2>
                      <p className="">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                    </div>
                    <div>
                      <div className="flex justify-end pb-10 col-span-1">
                        <Link href="#">
                          <button className=" button-2  px-7 py-2 rounded-md">
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
                  </div>
                  <div>
                    <img src="/assets/images/portfolio/portfoliomont.png" />
                  </div>
                </div>
              </div>
            </>
          ) : select == 3 ? (
            <>
              <div className="container-ack gradientbackgroundone px-12 pt-12">
                <div className=" grid grid-cols-3 justify-between ">
                  <div className="col-span-2">
                    <h2 className="text-xl font-semibold ">
                      The standard Lorem Ipsum passage, used since the 1500s
                    </h2>
                    <p className="">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                  <div>
                    <div className="flex justify-end pb-10 col-span-1">
                      <Link href="#">
                        <button className=" button-2  px-7 py-2 rounded-md">
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
                </div>
                <div>
                  <img src="/assets/images/portfolio/portfoliomile.png" />
                </div>
              </div>
              <div className="mt-12">
                <div className="container-ack gradientbackgroundtwo px-12 pt-12 ">
                  <div className=" grid grid-cols-3 justify-between ">
                    <div className="col-span-2">
                      <h2 className="text-xl font-semibold ">
                        The standard Lorem Ipsum passage, used since the 1500s
                      </h2>
                      <p className="">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                    </div>
                    <div>
                      <div className="flex justify-end pb-10 col-span-1">
                        <Link href="#">
                          <button className=" button-2  px-7 py-2 rounded-md">
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
                  </div>
                  <div>
                    <img src="/assets/images/portfolio/portfoliomont.png" />
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="container-ack gradientbackgroundone px-12 pt-12">
                <div className=" grid grid-cols-3 justify-between ">
                  <div className="col-span-2">
                    <h2 className="text-xl font-semibold ">
                      The standard Lorem Ipsum passage, used since the 1500s
                    </h2>
                    <p className="">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                  <div>
                    <div className="flex justify-end pb-10 col-span-1">
                      <Link href="#">
                        <button className=" button-2  px-7 py-2 rounded-md">
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
                </div>
                <div>
                  <img src="/assets/images/portfolio/portfoliomile.png" />
                </div>
              </div>
              <div className="mt-12">
                <div className="container-ack gradientbackgroundtwo px-12 pt-12 ">
                  <div className=" grid grid-cols-3 justify-between ">
                    <div className="col-span-2">
                      <h2 className="text-xl font-semibold ">
                        The standard Lorem Ipsum passage, used since the 1500s
                      </h2>
                      <p className="">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                    </div>
                    <div>
                      <div className="flex justify-end pb-10 col-span-1">
                        <Link href="#">
                          <button className=" button-2  px-7 py-2 rounded-md">
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
                  </div>
                  <div>
                    <img src="/assets/images/portfolio/portfoliomont.png" />
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default PortfolioListing;
