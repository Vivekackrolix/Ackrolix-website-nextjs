import React from "react";
import Head from "next/head";
import Footer from "../../components/Common/Footer";
import Header from "../../components/Common/Header";
import Banner from "../../components/Services/DetailPage/Banner";
import Cards from "../../components/Services/DetailPage/Cards";
import Technology from "../../components/Services/DetailPage/Technology";
import ComponentHead from "../../components/Common/ComponentHead";
import Process from "../../components/Services/DetailPage/Process";
import ProcessHead from "../../components/Services/DetailPage/ProcessHead";
import Work from "../../components/Services/DetailPage/Work";
import Enquiry from "../../components/Services/DetailPage/Enquiry";
import Clients from "../../components/Home/Clients";

const Research = () => {
  const processes = [
    {
      id: "1",
      name: "Make A Plan",
      desc: "We make a comprehensive plan of all the activities pertaining to user research and have a detailed walkthrough of each step.",
    },
    {
      id: "2",
      name: "Recruit Participants & Conduct Research",
      desc: "We hire participants that represent target users and conduct research using qualitative and/or quantitative methods.",
    },
    {
      id: "3",
      name: "Synthesize",
      desc: "We fill in the knowledge gaps, prove or disprove our hypotheses, and discover opportunities for our design efforts.",
    },
    {
      id: "4",
      name: "Reporting",
      desc: "We prepare and submit a comprehensive report on the findings of the research with actionable suggestions.",
    },
  ];
  const techs = [
    {
      id: "1",
      img: "/assets/images/service/svg/figma.svg",
      name: "Figma",
      desc: " Figma is browser-based, allowing teams to work together seamlessly, regardless of their operating systems. ",
    },
    {
      id: "2",
      img: "/assets/images/service/svg/sketch.svg",
      name: "Sketch",
      desc: "A popular vector-based design tool for creating user interfaces and wireframes. ",
    },
    {
      id: "3",
      img: "/assets/images/service/svg/photoshop.svg",
      name: "Adobe Photoshop",
      desc: "A versatile design tool used for image editing, graphic design, and UI design.  ",
    },
    {
      id: "4",
      img: "/assets/images/service/svg/adobe-xd.svg",
      name: " Adobe XD",
      desc: "A comprehensive design and prototyping tool that allows designers to create interactive prototypes, wireframes, and user interfaces. ",
    },
    {
      id: "5",
      img: "/assets/images/service/svg/illustrator.svg",
      name: " Adobe Illustrator",
      desc: "A vector-based design tool used for creating scalable and resolution-independent graphics. ",
    },
    {
      id: "6",
      img: "/assets/images/service/svg/invision.svg",
      name: "InVision",
      desc: " A prototyping and collaboration tool that allows designers to create interactive and animated prototypes.",
    },
    {
      id: "7",
      img: "/assets/images/service/svg/axure.png",
      name: "Axure RP",
      desc: " Axure RP is often used for complex interactions and user flows.",
    },
    {
      id: "8",
      img: "/assets/images/service/svg/marvel.png",
      name: "Marvel",
      desc: " A user-friendly prototyping tool that enables designers to create interactive prototypes with ease. ",
    },
    {
      id: "9",
      img: "/assets/images/service/svg/zepline.png",
      name: "Zeplin",
      desc: "  Zeplin generates style guides, assets, and CSS code snippets to ensure smooth collaboration between designers and developers.",
    },
    {
      id: "10",
      img: "/assets/images/service/svg/principle.png",
      name: "Principle",
      desc: " Principle integrates well with Sketch and enables designers to add motion to their designs.",
    },
    {
      id: "11",
      img: "/assets/images/service/svg/procreate.png",
      name: "Procreate",
      desc: "A digital illustration app designed specifically for iPad.",
    },
    {
      id: "12",
      img: "/assets/images/service/svg/logobal.png",
      name: "Balsamiq",
      desc: " Balsamiq enables designers to quickly sketch out interface ideas and concepts.",
    },
  ];
  const cards = [
    {
      id: 1,
      para: "User research services we offer",
      bgcolor: "bg-[#fff]",
      cols: "md:col-span-2",
      textcolor: "text-secondary",
      display: "hidden",
      maintitle: "Expertise",
      subtitle: "OUR EXPERTISE",
    },
    {
      id: 2,
      icon: "01",
      title: "Competitor Research",
      para: "We conduct competitor analysis to gain insights into their product's functions, flows and design.",
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
      title: "Product Audit",
      para: "We thoroughly assess your existing product from both - aesthetics and functional viewpoint and provide suggestions.",
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
      title: "User Interviews And Surveys",
      para: "We investigate the participants to uncover their hidden needs and pain points to develop a more meaningful product.",
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
      title: "Data Analysis",
      para: "We sift through existing data to look for trends, patterns that hint towards opportunities or impending issues.",
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
    <div>
      <Head>
        <title>UI-UX Research</title>
        <meta
          name="description"
          content="Check out iPhone 12 XR Pro and iPhone 12 Pro Max. Visit your local store and for expert advice."
        />
      </Head>
      <Header />
      <div
        className=" bg-right"
        style={{
          backgroundImage: 'url("/assets/images/mainbackground.png ")',
        }}
      >
        <Banner
          bannertitle="We investigate users needs"
          bannersubtext="As a leading UX research company in Mumbai, dig deep into identifying users' motivations and pain points, investigate their root causes and extract valuable insights."
          serviceimg="/assets/images/service/svg/ur.png"
          servicehead="Knowing users problems"
          servicedesc1="We are inquisitive about every aspect that motivates target users. We listen to users and understand their intentions & actions while using your offerings."
          servicedesc2="From these insights, we define and prioritize problems to solve based on priority and impact."
        />
      </div>
      <Cards card={cards} />
      <div className="container-ack md:px-0 px-5">
        <ComponentHead
          title="Technology"
          sub="Tools we are using In UI/UX Designing & Strategy"
          head="The technology stack for Data Visualisation can vary depending on the specific requirements of the application and the chosen modernization approach."
        />
        <Technology tech={techs} />
      </div>

      <div>
        <div
          style={{
            backgroundImage:
              'url("/assets/images/service/servicebackground.png")',
          }}
        >
          <div className="container-ack md:px-0 px-5">
            <ProcessHead
              processhead="Steps"
              processsub="Steps we follow for
              user research"
              processdesc="UX strategy services
we offer"
              processimg="/assets/images/service/svg/ur1.png"
            />
            <Process process={processes} />
          </div>
        </div>
        <div
          className="h-[7.5rem]"
          style={{
            backgroundImage: 'url("/assets/images/service/wave.png")',
          }}
        ></div>
      </div>

      <Work />
      {/* <Section /> */}
      <Enquiry />
      <Clients />
      <Footer />
    </div>
  );
};

export default Research;
