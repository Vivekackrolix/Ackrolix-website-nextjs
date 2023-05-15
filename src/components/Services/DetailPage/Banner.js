import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

const Banner = () => {
  return (
    <div>
      <div className="container-ack md:px-0 px-5 ">
        <div className="pt-24">
          <div className="text-4xl  text-center font-bold ">
            Work with a development team with skills CTOs praise.
          </div>
          <p className="text-base text-center md:w-[80%] mx-auto pt-3">
            Software supports your business growth, and you need more from it. We’ve helped over 160+ companies build scalable products with confidence. Technology executives chose our development teams because of their skills tested in 7+ markets.{" "}
          </p>
        </div>
        <div>
          <div className="md:grid grid-cols-2 gap-6 items-center container-ack  ">
            <div className="pb-5 pt-10 ">
              <img src="/assets/images/aboutusimg3.png" alt="" />
            </div>

            <div className=" md:px-0 px-5 pb-10 md:pb-0  relative">

              <div className="">
                <div className="text-3xl   font-bold ">
                  One scalable team for start-to-finish development
                </div>
                <div className="md:w-[95%] w-full text-base text-textcolor text-justify font-text  pb-4 md:pt-8 pt-4">
                  What does it mean to be reliable? <strong> It means your outsourced team works as well as your web developers </strong> do. Access web development services trusted by 98% of CTOs that you’ll find understanding with. They made APIs, custom web applications, hybrid mobile app development, provided web design services, updated stacks, and build cloud-native systems.
                </div>
                <div className="md:w-[95%] w-full text-base text-textcolor text-justify font-text  py-4">
                  One place — everyone you need: Business Analysts, Product Designers, Project Managers, QA Engineers, DevOps, and Full-stack developers. Expect our web development team to be proactive throughout the project with an abundance of improvement suggestions that will get business moving even in areas such as search engine optimization.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
