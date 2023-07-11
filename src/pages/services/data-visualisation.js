import React from "react";
import Head from "next/head";
import Footer from '../../components/Common/Footer';
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

const Visualisation = () => {
  const processes = [
    {
      id: "1",
      name: "Define User Goals",
      desc: "We start by defining the expectation of the users from the data, and how it can best fulfil their needs.",
    },
    {
      id: "2",
      name: "Understand Data And Studies",
      desc: "We gather in-depth information about all the data points covered in the product and their inter-relationships.",
    },
    {
      id: "3",
      name: "Building Data Architecture",
      desc: "We organize the data logically, decide on the level of drill-downs and filters, pagination and data sources.",
    },
    {
      id: "4",
      name: "Visualizing Data",
      desc: "We finalize the first view of the dashboard and create designs of charts and graphs based on various data types.",
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
      desc: " Axure RP is often used for complex interactions and user flows."
    },
    {
      id: "8",
      img: "/assets/images/service/svg/marvel.png",
      name: "Marvel",
      desc: " A user-friendly prototyping tool that enables designers to create interactive prototypes with ease. "
    },
    {
      id: "9",
      img: "/assets/images/service/svg/zepline.png",
      name: "Zeplin",
      desc: "  Zeplin generates style guides, assets, and CSS code snippets to ensure smooth collaboration between designers and developers."
    },
    {
      id: "10",
      img: "/assets/images/service/svg/principle.png",
      name: "Principle",
      desc: " Principle integrates well with Sketch and enables designers to add motion to their designs."
    },
    {
      id: "11",
      img: "/assets/images/service/svg/procreate.png",
      name:"Procreate",
      desc: "A digital illustration app designed specifically for iPad."
    },
    {
      id: "12",
      img: "/assets/images/service/svg/logobal.png",
      name: "Balsamiq",
      desc: " Balsamiq enables designers to quickly sketch out interface ideas and concepts."
    },
  ];
  const cards = [
    {
      id: 1,
      para: "Data Visualisation Services We Offer",
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
      title: "Custom Dashboards",
      para: "We add the functionality of creating custom dashboards through easy to use features, thereby making UX more pleasurable.",
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
      title: "Custom Visual Components",
      para: "We build custom components that support the dashboard's properties and functionality.",
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
      title: "Dynamic Stories & Infographics      ",
      para: "We enhance the value of the data by organizing and presenting it into easily comprehensible stories and infographics.",
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
      title: "Push Reports",
      para: "We also provide the option of generating reports that help stakeholders to make appropriate decisions.",
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
        <title>Data Visualisation</title>
      </Head>
      <Header />
      <div
        className=" bg-right"
        style={{
          backgroundImage: 'url("/assets/images/mainbackground.png ")',
        }}
      >
        <Banner
          bannertitle="We make data sensible and actionable"
          bannersubtext="We present the data in visual form and help decision-makers to identify key opportunities and impending issues."
          serviceimg="/assets/images/service/svg/vis.png"
          servicehead="Insightful data leads to better products & growth"
          servicedesc1="Pictures are more clearer to understand than numbers. With data visualisation, it is possible to present data in a more digestible & attractive manner through charts & graphs."
          servicedesc2="We simplify data presentation through appropriate diagrams so that it becomes easier to identify trends, patterns, and outliers within large data sets."
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
              processhead="Approach"
              processsub="OUR APPROACH"
              processdesc="Steps we follow for
              data visualisation"
              processimg="/assets/images/service/svg/vis1.png"
            />
            <Process process={processes} />
          </div>
        </div>
        <div className="h-[7.5rem]"
          style={{
            backgroundImage: 'url("/assets/images/service/wave.png")',
          }}></div>
      </div>

      <Work />
      {/* <Section /> */}
      <Enquiry />
      <Clients />
      <Footer />
    </div>
  );
};

export default Visualisation;