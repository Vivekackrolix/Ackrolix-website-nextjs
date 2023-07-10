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

const Usability = () => {
  const processes = [
    {
      id: "1",
      name: "Planning The Test",
      desc: "We think thoroughly about objectives, product, platform, target users, and location.",
    },
    {
      id: "2",
      name: "Test User Participants",
      desc: "We hire the ideal participants that closely fit the user persona and carry out the test.",
    },
    {
      id: "3",
      name: "Analyze Test Data",
      desc: "We closely look at the collected data to identify the problems and fix them for better UX.",
    },
    {
      id: "4",
      name: "Reporting",
      desc: "We present the findings to our clients, enabling them to make key decisions.",
    },
  
  ];
const techs = [
    // {
    //     id: "1",
    //     img: "/assets/images/service/node.svg",
    //     name: "Node.js",
    //     desc: "Lorem ipsum dolor sit amet consect Sapien porttitor. ",
    // },
    // {
    //     id: "2",
    //     img: "/assets/images/service/react.svg",
    //     name: "React.js",
    //     desc: "Lorem ipsum dolor sit amet consect Sapien porttitor. ",
    // },
    // {
    //     id: "3",
    //     img: "/assets/images/service/angularjs.svg",
    //     name: "Angular",
    //     desc: "Lorem ipsum dolor sit amet consect Sapien porttitor. ",
    // },
    // {
    //     id: "4",
    //     img: "/assets/images/service/laravel.svg",
    //     name: "Laravel",
    //     desc: "Lorem ipsum dolor sit amet consect Sapien porttitor. ",
    // },
    // {
    //     id: "5",
    //     img: "/assets/images/service/typescript.svg",
    //     name: "Typescript",
    //     desc: "Lorem ipsum dolor sit amet consect Sapien porttitor. ",
    // },
    // {
    //     id: "6",
    //     img: "/assets/images/service/nextjs.svg",
    //     name: "Next.js",
    //     desc: "Lorem ipsum dolor sit amet consect Sapien porttitor. ",
    // },
];
const cards = [
    {
      id: 1,
      para: "Usability testing services we offer",
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
      title: "Explorative Usability Testing",
      para: "We assess what is and what is not working in a design, concept or offering, before it is fully formed, thus mitigating financial and resource implications.",
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
      title: "Comparative Usability Testing",
      para: "We gauge the preference, efficiency, effectiveness, and satisfaction of a digital product.",
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
      title: "Assessment Usability Testing",
      para: "We unveil issues in the designs that could result in users being unable to complete tasks or fail to reach their goals.",
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
      title: "Validation Usability Testing",
      para: "We benchmark designs over time, checking if future iterations are outperforming their predecessors.",
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
        <title>Product Usability</title>        
      </Head>
      <Header />
      <div
        className=" bg-right"
        style={{
          backgroundImage: 'url("/assets/images/mainbackground.png ")',
        }}
      >
        <Banner 
          bannertitle="We evaluate users' behavior"
          bannersubtext="We closely observe and monitor each action that a user takes and iterate designs to make the product as user friendly as possible."
          serviceimg="/assets/images/aboutusimg3.png"
          servicehead="Testing leads to finding gaps & fixing them"
          servicedesc1="With usability testing, we get to see what people actually do—what works for them, and what doesn’t—not what we think they would do or even what they think they would do if they were using your product."
          servicedesc2="Through usability testing, we determine 5 aspects: Satisfaction, Learnability, Number of Errors, Efficiency and Memorability."
        />
      </div>
      <Cards card={cards} />
      <div className="container-ack md:px-0 px-5">
       <ComponentHead
        title="Technology"
        sub="Product Usability"
        head="The technology stack for Product Usability can vary depending on the specific requirements of the application and the chosen modernization approach."
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
              usability testing"
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

export default Usability;