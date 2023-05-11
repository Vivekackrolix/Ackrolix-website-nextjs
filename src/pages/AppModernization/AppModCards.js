import React from "react";

const AppModCards = () => {
  const card = [
    {
      id: 1,
      para: "Nunc convallis semper justo quis tempor. Praesent molestie, lorem sed imperdiet tempor, libero urna semper urna, facilisis vulputate velit arcu vitae mi. Donec ac nisi ex. ",
      bgcolor: "bg-[#fff]",
      cols: "md:col-span-2",
      textcolor: "text-secondary",
      display: "hidden",
      maintitle: "Solutions",
      subtitle: "We Shape the Perfect Solutions ",
    },
    {
      id: 2,
      icon: "/assets/svg/info.svg",
      title: "Complete product teams",
      para: "Access Business Analysts, Product Designers, Project Managers, QA Engineers, DevOps, or Full-stack developers",
      bgcolor: "bg-[#F6F8F9]",
      cols: "md:col-span-1",
      textsize: "text-xl",
      fontbold: "font-bold",
      textcolor: "text-secondary",
      main: "hidden",
    },
    {
      id: 3,
      icon: "/assets/svg/info.svg",
      title: "Fast iterations & frequent releases",
      para: "Pre-build components and our own templates let our team deliver more in each sprint – this is the perk of having such experienced web developers on board.",
      bgcolor: "bg-[#F6F8F9]",
      cols: "md:col-span-1",
      textsize: "text-xl",
      fontbold: "font-bold",
      textcolor: "text-secondary",
      main: "hidden",
    },
    {
      id: 4,
      icon: "/assets/svg/info.svg",
      title: "Business-tailored architecture",
      para: "Always designed and develop with your company's growth and the product's scalability in mind",
      bgcolor: "bg-[#F6F8F9]",
      cols: "md:col-span-1",
      textsize: "text-xl",
      fontbold: "font-bold",
      textcolor: "text-secondary",
      main: "hidden",
    },
    {
      id: 5,
      icon: "/assets/svg/info.svg",
      title: "Thorough quality assurance",
      para: "We do QA before each deploy through manual and automated tests that catch bugs, performance issues, and conversion blockers.",
      bgcolor: "bg-[#F6F8F9]",
      cols: "md:col-span-1",
      textsize: "text-xl",
      fontbold: "font-bold",
      textcolor: "text-secondary",
      main: "hidden",
    },
    {
      id: 6,
      icon: "/assets/svg/info.svg",
      title: "Scalable & secure infrastructure",
      para: "Web development services full of custom solutions optimized for efficiency, flexibility and deployment speed.",
      bgcolor: "bg-[#F6F8F9]",
      cols: "md:col-span-1",
      textsize: "text-xl",
      fontbold: "font-bold",
      textcolor: "text-secondary",
      main: "hidden",
    },
    {
      id: 7,
      icon: "/assets/svg/info.svg",
      title: "World-class UX/UI",
      para: "Designed to help your business with user adoption",
      bgcolor: "bg-[#F6F8F9]",
      cols: "md:col-span-1",
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
                className={`${item.bgcolor} px-3 py-5 h-full  rounded-2xl shadow-box`}
              >
                <div className={`${item.display}`}>
                  {item.icon ? <img src={item.icon} className=" " /> : null}
                </div>
                <div className="relative">
                  <div className={`${item.main}`}>
                    {item.maintitle ? (
                      <div className="md:text-[6.5rem] text-[5rem] tracking-wider text-left texttransparent font-bold  md:pt-10">
                        {item.maintitle}{" "}
                      </div>
                    ) : null}
                  </div>
                  <div className={`${item.main}`}>
                    {item.subtitle ? (
                      <div className="text-3xl   font-bold  absolute md:top-[6.7rem]  top-[4rem]">
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

      <div>
        <div className="md:hidden block ">
          {card.map((item, index) => (
            <>
              <div className={`${item.cols} `} key={index}>
                <div
                  className={`${item.bgcolor} px-3 py-5 h-full  rounded-2xl shadow-box my-10`}
                >
                  <div className={`${item.display}`}>
                    {item.icon ? <img src={item.icon} className=" " /> : null}
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

export default AppModCards;