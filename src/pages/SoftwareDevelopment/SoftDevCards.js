import React from "react";

const SoftDevCards = () => {
  const card = [
    {
      id: 1,
      para: "Software architecture provides a visual representation and documentation of the system's structure, components, and interactions. It serves as a communication tool for stakeholders, developers, and other project members, fostering better understanding and collaboration.",
      bgcolor: "bg-[#fff]",
      cols: "md:col-span-2",
      textcolor: "text-secondary",
      display: "hidden",
      maintitle: "Solutions",
      subtitle: "Designing Scalable & Robust Software Architecture",
    },
    {
      id: 2,
      icon: "01",
      title: "Maintainability",
      para: "A well-designed architecture promotes ease of maintenance by organizing components and dependencies in a structured manner.",
      bgcolor: "bg-[#F6F8F9]",
      cols: "md:col-span-1",
      display: "icon",
      textsize: "text-xl",
      fontbold: "font-bold",
      textcolor: "text-secondary",
      main: "hidden",
    },
    {
      id: 3,
      icon: "02",
      title: "Cost Optimization",
      para: "Expand without overspending with pay-for-use technology that minimizes infrastructure operation costs.",
      bgcolor: "bg-[#F6F8F9]",
      cols: "md:col-span-1",
      display: "icon",
      textsize: "text-xl",
      fontbold: "font-bold",
      textcolor: "text-secondary",
      main: "hidden",
    },
    {
      id: 4,
      icon: "03",
      title: "Modularity",
      para: "Software architecture promotes the decomposition of a system into modular components, allowing for independent development, testing, and maintenance of individual parts.",
      bgcolor: "bg-[#F6F8F9]",
      cols: "md:col-span-1",
      display: "icon",
      textsize: "text-xl",
      fontbold: "font-bold",
      textcolor: "text-secondary",
      main: "hidden",
    },
    {
      id: 5,
      icon: "04",
      title: "Security",
      para: "Architecture plays a crucial role in ensuring the security of a software system. It includes mechanisms for data protection, access control, encryption, and other security measures.",
      bgcolor: "bg-[#F6F8F9]",
      cols: "md:col-span-1",
      display: "icon",
      textsize: "text-xl",
      fontbold: "font-bold",
      textcolor: "text-secondary",
      main: "hidden",
    },
    {
      id: 6,
      icon: "05",
      title: "Reliability",
      para: "Software architecture incorporates fault tolerance mechanisms to ensure system reliability and resilience. It includes strategies such as redundancy, error handling, and recovery mechanisms.",
      bgcolor: "bg-[#F6F8F9]",
      cols: "md:col-span-1",
      display: "icon",
      textsize: "text-xl",
      fontbold: "font-bold",
      textcolor: "text-secondary",
      main: "hidden",
    },
    {
      id: 7,
      icon: "06",
      title: "Performance",
      para: "Effective software architecture considers performance requirements and incorporates design decisions that optimize resource utilization, minimize bottlenecks, and enhance overall system efficiency.",
      bgcolor: "bg-[#F6F8F9]",
      cols: "md:col-span-1",
      display: "icon",
      textsize: "text-xl",
      fontbold: "font-bold",
      textcolor: "text-secondary",
      main: "hidden",
    },
  ];

  return (
    <div className="container-ack md:px-0 px-5">
      <div className="md:grid lg:grid-cols-4 md:grid-cols-2 px-5 md:py-20 py-10 gap-8 hidden">
        {card.map((item, index) => (
          <>
            <div className={`${item.cols} `} key={index}>
              <div
                className={`${item.bgcolor} px-3 pb-5 h-full  rounded-2xl shadow-box`}
              >
                <div className={`${item.display}`}>
                  {item.icon}
                </div>
                <div className="relative">
                  <div className={`${item.main}`}>
                    {item.maintitle ? (
                      <div className="tracking-wider text-left textorange font-bold">
                        {item.maintitle}{" "}
                      </div>
                    ) : null}
                  </div>
                  <div className={`${item.main}`}>
                    {item.subtitle ? (
                      <div className="text-3xl   font-bold  absolute md:top-[3.8rem]  top-[3rem]">
                        {item.subtitle}{" "}
                      </div>
                    ) : null}
                    <div className="load-wrapp relative bottom-[-5px]">
                          <div className="load">
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                          </div>
                        </div>
                  </div>
                  <h5
                    className={`${item.textcolor} ${item.textsize} ${item.border} ${item.fontbold}  py-2 font-semibold  `}
                  >
                    {" "}
                    {item.title}
                  </h5>
                </div>
                <p
                  className={`${item.textcolor}  text-justify pt-1 leading-relaxed text-sm text-textcolor`}
                >
                  {item.para}
                </p>
              </div>
            </div>
          </>
        ))}
      </div>

      <div>
        <div className="md:hidden block ">
          {card.map((item, index) => (
            <>
              <div className={`${item.cols} `} key={index}>
                <div
                  className={`${item.bgcolor} px-3 pb-5 h-full  rounded-2xl shadow-box my-10`}
                >
                  <div className={`${item.display}`}>
                    {item.icon}
                  </div>
                  <div className="relative">
                    <div className={`${item.main}`}>
                      {item.maintitle ? (
                        <div className="md:text-[6.5rem] text-[4.6rem] text-white tracking-wider text-center texttransparent font-bold  md:pt-10 ">
                          {item.maintitle}{" "}
                        </div>
                      ) : null}
                    </div>
                    <div className={`${item.main}`}>
                      {item.subtitle ? (
                        <div className="absolute md:top-[6.5rem] top-5 md:left-[3rem] text-3xl font-semibold ">
                          {item.subtitle}{" "}
                        </div>
                      ) : null}
                    </div>
                    <h5
                      className={`${item.textcolor} ${item.textsize} ${item.border} ${item.fontbold}  py-2 font-semibold  `}
                    >
                      {" "}
                      {item.title}
                    </h5>
                  </div>
                  <p
                    className={`${item.textcolor}  text-justify pt-1 leading-relaxed text-sm text-textcolor`}
                  >
                    {item.para}
                  </p>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SoftDevCards;
