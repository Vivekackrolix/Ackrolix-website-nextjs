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

const UiStrategy = () => {
  const processes = [
    {
      id: "1",
      name: "Align Business Goals And UX",
      desc: "We help you in achieving your business aspirations through the effective implementation of UX strategy."
    },
    {
      id: "2",
      name: "Utilize Research Insights",
      desc: "We take the insights gained from user research and craft the product that solves users' problems and achieves business goals."
    },
    {
      id: "3",
      name: "Add Personality Elements",
      desec: "We blend brand personality elements into UX design, such that it ensures consistency in your digital product."
    },
    {
      id: "4",
      name: "Conducting Workshops",
      desc: "We will partner with your design team, management and stakeholders to help create a refined UX strategy."
    },

  ];
  const techs = [
    // {
    //   id: "1",
    //   img: "/assets/images/service/node.svg",
    //   name: "Node.js",
    //   desc: "Lorem ipsum dolor sit amet consect Sapien porttitor. ",
    // },
    // {
    //   id: "2",
    //   img: "/assets/images/service/react.svg",
    //   name: "React.js",
    //   desc: "Lorem ipsum dolor sit amet consect Sapien porttitor. ",
    // },
    // {
    //   id: "3",
    //   img: "/assets/images/service/angularjs.svg",
    //   name: "Angular",
    //   desc: "Lorem ipsum dolor sit amet consect Sapien porttitor. ",
    // },
    // {
    //   id: "4",
    //   img: "/assets/images/service/laravel.svg",
    //   name: "Laravel",
    //   desc: "Lorem ipsum dolor sit amet consect Sapien porttitor. ",
    // },
    // {
    //   id: "5",
    //   img: "/assets/images/service/typescript.svg",
    //   name: "Typescript",
    //   desc: "Lorem ipsum dolor sit amet consect Sapien porttitor. ",
    // },
    // {
    //   id: "6",
    //   img: "/assets/images/service/nextjs.svg",
    //   name: "Next.js",
    //   desc: "Lorem ipsum dolor sit amet consect Sapien porttitor. ",
    // },
  ];
  const cards = [
    {
      id: 1,
      para: "Steps we follow to develop UX strategy",
      bgcolor: "bg-[#fff]",
      cols: "md:col-span-2",
      textcolor: "text-secondary",
      display: "hidden",
      maintitle: "Approach",
      subtitle: "OUR APPROACH",
    },
    {
      id: 2,
      icon: "01",
      title: "Define Goals & Set The Plan",
      para: "We define UX goals and set logical milestones to get an accurate idea based on the scope of work and the time required to achieve them.",
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
      title: "Formulate Problem Statement",
      para: "We make the target user's needs absolutely clear so that the final product helps in effectively fulfilling them. ",
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
      title: "Define Key UX Metrics",
      para: "We define the most important metrics based on industry benchmarks, that provide a frame of reference to measure the success of UX efforts.",
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
      title: "Design & Test",
      para: "Once all the above things are in place, we start by developing the user flows, wireframes, and information architecture of your product.",
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
      title: "Calculate ROI Of UX",
      para: "We measure several key metrics such as filling of the lead capture form, new sign-ups, conversions & sales, and Net Promoter Score (NPS).",
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
        <title>UI-UX Strategy</title>
      </Head>
      <Header />
      <div
        className=" bg-right"
        style={{
          backgroundImage: 'url("/assets/images/mainbackground.png ")',
        }}
      >
        <Banner
          bannertitle="We Strategize User Experience"
          bannersubtext="We align UX strategy to your business strategy so it provides a seamless experience across multiple customer touchpoints."
          serviceimg="/assets/images/aboutusimg3.png"
          servicehead="UX strategy helps to build and position the products in right way"
          servicedesc1="UX strategy is the culmination of your business strategy, the value of innovation your business provides, validated user research, and frictionless user experience."
          servicedesc2="The business strategy is the basis for core competencies and offerings i.e. the product. It does not only ensure customer satisfaction but offers a competitive advantage as well."
        />
      </div>
      <Cards card={cards} />
      <div className="container-ack md:px-0 px-5">
        <ComponentHead
          title="Technology"
          sub="UI-UX Strategy"
          head="The technology stack for UI-UX Strategy can vary depending on the specific requirements of the application and the chosen modernization approach."
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
              processhead="Expertise"
              processsub="OUR EXPERTISE"
              processdesc="Full-scope app modernization services you can start using quickly (even in weeks!) to fix, boost, and revamp your systems with teams that have worked for over 160 companies."
              processimg="/assets/images/service/videoservice.png"
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

export default UiStrategy;