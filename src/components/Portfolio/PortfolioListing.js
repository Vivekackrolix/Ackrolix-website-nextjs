import Link from "next/link";
import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

function PortfolioListing() {
  return (
    <>
      <div className="container-ack">
        <div className="TopTabing">
          <ul>
            <li>All</li>
            <li>Website</li>
            <li>Ecoomerce</li>
            <li>Software</li>
          </ul>
        </div>

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
      </div>
    </>
  );
}

export default PortfolioListing;
