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
      para: "Ackrolix has a remarkable network of usability specialists who are skilled in deciphering the mysteries of interactive design through heuristic evaluations and smart A/B testing, all supported by thorough data analytics. Our usability testing services go above and beyond the norm by evaluating software usability circumstances with genuine users and simulated drug users.",
      bgcolor: "bg-[#fff]",
      cols: "md:col-span-2",
      textcolor: "text-secondary",
      display: "hidden",
      maintitle: "SERVICES",
      subtitle: "Our Remarkable Usability Testing Services",
    },
    {
      id: 2,
      icon: "01",
      title: "Remote usability testing",
      para: "We provide remote testing with the best online software tools and equipment. Dive into the best software usability testing experience across multiple geographies and cultures.",
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
      title: "Website Usability testing (A/B testing)",
      para: "Delight in effortless services and embrace enchanting websites that cast a mesmerising spell on users. With Ackrolix's website usability testing, they weave captivating digital wonders.",
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
      title: "Mobile App Usability Testing",
      para: "Ackrolix combines user interaction, captivating design, enjoyable usability, and user-friendliness, empowering it with unbeatable security and flawless functionality.",
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
      title: "Expert Review",
      para: "Our usability testers work magic when testing software applications, analysing every aspect. Get a wealth of helpful services, quick product reviews, and quality reviews to support your digital creations to their full potential.",
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
      title: "Automatic Expert Review",
      para: "Our expert review process delivers fast and efficient results to our customers worldwide. Our magic lies in creating consistent and accurate websites and applications using software programs rooted in user experience design and intuitive models.",
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
      title: "Hallway Testing",
      para: "Ackrolix can greatly assist the expansion and success of your company with our thorough usability testing services. We provide specialised solutions that guarantee your software and websites are user-friendly, intuitive, and effective as a top usability testing company in Gurgaon. ",
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
          bannertitle="Ackrolix: Distinctive Usability Testing Company"
          bannersubtext="Usability testing's alluring power is harnessed by Ackrolix, a renowned usability testing company in Gurgaon, to create captivating digital experiences. In order to develop custom performance tests, our talented team approaches design with empathic curiosity and a great grasp of consumers' wants and concerns."
          serviceimg="/assets/images/service/svg/usa.png"
          servicehead="Testing leads to finding gaps & fixing them"
          servicedesc1="With usability testing, we get to see what people actually do—what works for them, and what doesn’t—not what we think they would do or even what they think they would do if they were using your product."
          servicedesc2="Through usability testing, we determine 5 aspects: Satisfaction, Learnability, Number of Errors, Efficiency and Memorability."
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
              usability testing"
              processimg="/assets/images/service/svg/usa1.png"
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