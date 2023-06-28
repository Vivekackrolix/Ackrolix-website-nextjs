import Link from "next/link";
import React from "react";

const tabs = [
  {
    id: 1,
    text: "Product Conceptualization",
  },

  {
    id: 2,
    text: "Product Development",
  },
  {
    id: 3,
    text: "Digital Modernization",
  },
];

const productData = [
  {
    id: 1,
    image: "/assets/images/service/serviceimg.png",
    name: "User Research",
    desc: "As a leading UX research company in India, dig deep into identifying users' motivations and pain points, investigate their root causes and extract valuable insights.",
    link: "/app-modernization-services",
  },
  {
    id: 2,
    image: "/assets/images/service/serviceimg1.png",
    name: "Prototyping",
    desc: "A prototype is an early draft of a design used to get rapid feedback on whether the intended design works well or needs to be updated in some areas.",
    link: "/web-development-company",
  },
  {
    id: 3,
    image: "/assets/images/service/serviceimg.png",
    name: "UX Strategy",
    desc: "UX strategy is the culmination of your business strategy, the value of innovation your business provides, validated user research, and frictionless user experience.",
    link: "/web-development-company",
  },
  {
    id: 4,
    image: "/assets/images/service/serviceimg1.png",
    name: "UI Designing",
    desc: "An Optimized UI Can Change The Dynamics Of A Business. User Experience is one of the key pillars of your business as it enhances customer satisfaction and promotes growth.",
    link: "/web-development-company",
  },
  {
    id: 5,
    image: "/assets/images/service/serviceimg.png",
    name: "Usability Testing",
    desc: "We closely observe and monitor each action that a user takes and iterate designs to make the product as user friendly as possible.",
    link: "/web-development-company",
  },
  {
    id: 6,
    image: "/assets/images/service/serviceimg1.png",
    name: "Data Visualisation",
    desc: "We present the data in visual form and help decision-makers to identify key opportunities and impending issues.",
    link: "/web-development-company",
  },
];

const serviceData = [
  {
    id: 1,
    image: "/assets/images/service/serviceimg1.png",
    name: "Digital Product Design",
    desc: "Product design plays a crucial role in creating exceptional user experiences and driving the success of a product. It encompasses the process of understanding user needs, ideating, prototyping, and iterating to develop a functional and visually appealing product.",
    link: "/product-design-company",
  },
  {
    id: 2,
    image: "/assets/images/service/serviceimg.png",
    name: "Web Development",
    desc: "Whatever web applications you’re building, we got your back at every stage of web development, including web design.We’ve built a core system for a bank, an MVP marketplace sold for millions, and other 5☆ custom projects for 140+ companies worldwide.",
    link: "/web-development-company",
  },
  {
    id: 3,
    image: "/assets/images/service/serviceimg1.png",
    name: "App Modernization",
    desc: "App modernization is the process of revitalising existing applications to leverage modern technologies, enhance performance, improve user experiences, and align with evolving business needs.",
    link: "/app-modernization-services",
  },
  {
    id: 4,
    image: "/assets/images/service/serviceimg.png",
    name: "Software Development",
    desc: "Software development is the process of designing, coding, testing, and maintaining software applications. In today's fast-paced digital world, software plays a vital role in powering businesses and driving innovation.",
    link: "/software-architect-company",
  },
  {
    id: 5,
    image: "/assets/images/service/serviceimg1.png",
    name: "Ecommerce Development",
    desc: "Ecommerce development involves designing and building online stores that provide an exceptional user experience, seamless transactions, and robust backend functionality.",
    link: "/ecommerce-development-company",
  },
  {
    id: 6,
    image: "/assets/images/service/serviceimg.png",
    name: "Cloud Engineering & DevOps",
    desc: "Together, we will establish an optimal cloud computing workflow that helps you cut down cloud spending, automate infrastructure monitoring, and increase architectural flexibility.",
    link: "/cloud-engineering-and-devops",
  },
];

const Tabs = () => {
  const [select, setSelect] = React.useState(2);

  return (
    <div className="container-ack md:px-0 px-5">
      <div>
        <div className="flex justify-center md:space-x-3 space-x-2 cursor-pointer">
          {tabs.map((item, index) => (
            <div
              onClick={() => setSelect(item.id)}
              className="group py-10"
              key={index}
            >
              <div
                className={` md:px-12 px-3 py-2 rounded-md ${select === item.id
                  ? "bg-secondary text-white border-2 "
                  : "   border-2 border-black/90"
                  }`}
              >
                {item.text}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="">
        {select === 1 ? (
          <>
            <div className="grid md:grid-cols-3 gap-1">
              {productData.map((item, index) => (
                <div className="service-card" key={index}>
                  <div>
                    <div className="group p-6" key="id">
                      <div className="service-content relative text-center  border-2 border-[#F6F8F9] duration duration-200 group-hover:-translate-y-2  hover:drop-shadow-[0px_0px_20px#f7ce4680] hover:bg-[#F6F8F9]/40 hover:border-2 rounded-xl md:h-[26rem]">
                        <div className=" ">
                          <img
                            src={item.image}
                            alt=""
                            className="  rounded-lg  "
                          />
                        </div>

                        <h2 className="font-semibold text-lg pb-2 pt-5 text-black text-center">
                          {item.name}
                        </h2>

                        <p className="text-black/50 group-hover:text-black  pb-4  text-center px-3 text-sm ">
                          {item.desc}
                        </p>

                        <div className="pb-5">
                          <Link href={item.link}>
                            <button className="text-primary font-semibold py-2 text-sm border-b-2 group-hover:border-primary group-hover:border-b-2">
                              Know More
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : select === 2 ? (
          <>
            <div className="grid md:grid-cols-3 gap-1">
              {serviceData.map((item, index) => (
                <div className="service-card" key={index}>
                  <div>
                    <div className="group p-6" key="id">
                      <div className="service-content relative text-center border-2 border-[#F6F8F9] duration duration-200 group-hover:-translate-y-2 hover:drop-shadow-sm hover:bg-[#F6F8F9]/40 hover:border-2 rounded-xl">
                        <div className=" ">
                          <img
                            src={item.image}
                            alt=""
                            className="  rounded-lg  "
                          />
                        </div>

                        <h2 className="font-semibold text-lg pb-2 pt-5 text-black text-center">
                          {item.name}
                        </h2>

                        <p className="text-black/50 group-hover:text-black pb-4  text-center px-3 text-sm ">
                          {item.desc}
                        </p>

                        <div className="pb-5">
                          <Link href={item.link}>
                            <button className="text-primary font-semibold py-2 text-sm border-b-2 group-hover:border-primary group-hover:border-b-2">
                              Know More
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        ):(
          <>
            <div className="grid md:grid-cols-3 gap-1">
              {serviceData.map((item, index) => (
                <div className="service-card" key={index}>
                  <div>
                    <div className="group p-6" key="id">
                      <div className="service-content relative text-center border-2 border-[#F6F8F9] duration duration-200 group-hover:-translate-y-2 hover:drop-shadow-sm hover:bg-[#F6F8F9]/40 hover:border-2 rounded-xl">
                        <div className=" ">
                          <img
                            src={item.image}
                            alt=""
                            className="  rounded-lg  "
                          />
                        </div>

                        <h2 className="font-semibold text-lg pb-2 pt-5 text-black text-center">
                          {item.name}
                        </h2>

                        <p className="text-black/50 group-hover:text-black pb-4  text-center px-3 text-sm ">
                          {item.desc}
                        </p>

                        <div className="pb-5">
                          <Link href={item.link}>
                            <button className="text-primary font-semibold py-2 text-sm border-b-2 group-hover:border-primary group-hover:border-b-2">
                              Know More
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Tabs;
