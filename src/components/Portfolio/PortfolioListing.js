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
          {tabs.map((item,e) => (
            <div
              onClick={() => setSelect(item.id)}
              className="group  "
              key={e}
            >
              {" "}
              <div
                className={` text-center py-2 rounded-md ${
                  select == item.id
                    ? "bg-secondary text-white border-2 "
                    : "   border-2 border-transparent"
                }`}
              >
                {item.text}
              </div>
            </div>
          ))}
        </div>
     
        <div className="">
        {select == 1 ? (
          <>
            <div className="PortifloClum">
          <div className="Protfolicol-12">
            <div className="col4RptProfolio">
              <div className="BacimgDtls">
                <img
                  alt="Lngo"
                  src="/assets/images/protfolio/fornt-protfilo.webp"
                />
              </div>
              <div className="BxShow">
                <div className="BxMnvrSwn">
                  <h5> Lorem Ipsum </h5>
                  <Link className="text-primary" href={"/"}>
                    {" "}
                    Website Design{" "}
                    <MdKeyboardArrowRight className=" text-base text-white inline-block" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="col4RptProfolio">
              <div className="BacimgDtls">
                <img
                  alt="Lngo"
                  src="/assets/images/protfolio/fornt-protfilo.webp"
                />
              </div>
              <div className="BxShow">
                <div className="BxMnvrSwn">
                  <h5> Lorem Ipsum </h5>
                  <Link className="text-primary" href={"/"}>
                    {" "}
                    Website Design{" "}
                    <MdKeyboardArrowRight className=" text-base text-white inline-block" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="col4RptProfolio">
              <div className="BacimgDtls">
                <img
                  alt="Lngo"
                  src="/assets/images/protfolio/fornt-protfilo.webp"
                />
              </div>
              <div className="BxShow">
                <div className="BxMnvrSwn">
                  <h5> Lorem Ipsum </h5>
                  <Link className="text-primary" href={"/"}>
                    {" "}
                    Website Design{" "}
                    <MdKeyboardArrowRight className=" text-base text-white inline-block" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
          </>
        ) : select == 2 ? (
          <>
           <div className="PortifloClum">
          <div className="Protfolicol-12">
            <div className="col4RptProfolio">
              <div className="BacimgDtls">
                <img
                  alt="Lngo"
                  src="/assets/images/protfolio/fornt-protfilo.webp"
                />
              </div>
              <div className="BxShow">
                <div className="BxMnvrSwn">
                  <h5> Lorem Ipsum </h5>
                  <Link className="text-primary" href={"/"}>
                    {" "}
                    Website Design{" "}
                    <MdKeyboardArrowRight className=" text-base text-white inline-block" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="col4RptProfolio">
              <div className="BacimgDtls">
                <img
                  alt="Lngo"
                  src="/assets/images/protfolio/fornt-protfilo.webp"
                />
              </div>
              <div className="BxShow">
                <div className="BxMnvrSwn">
                  <h5> Lorem Ipsum </h5>
                  <Link className="text-primary" href={"/"}>
                    {" "}
                    Website Design{" "}
                    <MdKeyboardArrowRight className=" text-base text-white inline-block" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="col4RptProfolio">
              <div className="BacimgDtls">
                <img
                  alt="Lngo"
                  src="/assets/images/protfolio/fornt-protfilo.webp"
                />
              </div>
              <div className="BxShow">
                <div className="BxMnvrSwn">
                  <h5> Lorem Ipsum </h5>
                  <Link className="text-primary" href={"/"}>
                    {" "}
                    Website Design{" "}
                    <MdKeyboardArrowRight className=" text-base text-white inline-block" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
          </>
        ) : select == 3 ? (
          <>
           <div className="PortifloClum">
          <div className="Protfolicol-12">
            <div className="col4RptProfolio">
              <div className="BacimgDtls">
                <img
                  alt="Lngo"
                  src="/assets/images/protfolio/fornt-protfilo.webp"
                />
              </div>
              <div className="BxShow">
                <div className="BxMnvrSwn">
                  <h5> Lorem Ipsum </h5>
                  <Link className="text-primary" href={"/"}>
                    {" "}
                    Website Design{" "}
                    <MdKeyboardArrowRight className=" text-base text-white inline-block" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="col4RptProfolio">
              <div className="BacimgDtls">
                <img
                  alt="Lngo"
                  src="/assets/images/protfolio/fornt-protfilo.webp"
                />
              </div>
              <div className="BxShow">
                <div className="BxMnvrSwn">
                  <h5> Lorem Ipsum </h5>
                  <Link className="text-primary" href={"/"}>
                    {" "}
                    Website Design{" "}
                    <MdKeyboardArrowRight className=" text-base text-white inline-block" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="col4RptProfolio">
              <div className="BacimgDtls">
                <img
                  alt="Lngo"
                  src="/assets/images/protfolio/fornt-protfilo.webp"
                />
              </div>
              <div className="BxShow">
                <div className="BxMnvrSwn">
                  <h5> Lorem Ipsum </h5>
                  <Link className="text-primary" href={"/"}>
                    {" "}
                    Website Design{" "}
                    <MdKeyboardArrowRight className=" text-base text-white inline-block" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
          </>
        ) : (
          <>
           <div className="PortifloClum">
          <div className="Protfolicol-12">
            <div className="col4RptProfolio">
              <div className="BacimgDtls">
                <img
                  alt="Lngo"
                  src="/assets/images/protfolio/fornt-protfilo.webp"
                />
              </div>
              <div className="BxShow">
                <div className="BxMnvrSwn">
                  <h5> Lorem Ipsum </h5>
                  <Link className="text-primary" href={"/"}>
                    {" "}
                    Website Design{" "}
                    <MdKeyboardArrowRight className=" text-base text-white inline-block" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="col4RptProfolio">
              <div className="BacimgDtls">
                <img
                  alt="Lngo"
                  src="/assets/images/protfolio/fornt-protfilo.webp"
                />
              </div>
              <div className="BxShow">
                <div className="BxMnvrSwn">
                  <h5> Lorem Ipsum </h5>
                  <Link className="text-primary" href={"/"}>
                    {" "}
                    Website Design{" "}
                    <MdKeyboardArrowRight className=" text-base text-white inline-block" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="col4RptProfolio">
              <div className="BacimgDtls">
                <img
                  alt="Lngo"
                  src="/assets/images/protfolio/fornt-protfilo.webp"
                />
              </div>
              <div className="BxShow">
                <div className="BxMnvrSwn">
                  <h5> Lorem Ipsum </h5>
                  <Link className="text-primary" href={"/"}>
                    {" "}
                    Website Design{" "}
                    <MdKeyboardArrowRight className=" text-base text-white inline-block" />
                  </Link>
                </div>
              </div>
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
