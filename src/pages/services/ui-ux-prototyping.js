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

const Prototyping = () => {
  const processes = [
    {
      id: "1",
      name: "Wireframe Prototypes",
desc:"We create basic wireframe prototypes to test the logic and functionality of the user flows before proceeding to UI design.",
    },
    {
      id: "2",
      name: "Interactive Prototypes",
      desc:"We build interactive prototypes to gather a bit of detailed feedback from the client as well as the users.",
    },
    {
      id: "3",
      name: "Digital Prototypes",
desc:"Through digital prototypes, we create the most realistic version of the actual product that helps us gain in-depth insights.",
    },
    {
      id: "4",
      name: "Coded Prototypes",
      desc: "After the final approval of the digital prototype by the client, we generate coded prototypes and host them to test again with the users.",
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
      para: "Steps we follow for prototyping",
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
      title: "Goals Of The Project",
      para: "We start with the goal of the product in mind, by defining why it is intended to be built.",
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
      title: "Study The Competition",
      para: "We study the competitors to know where the product stands and what unique value it offers.",
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
      title: "Identify Target Audience & Their Needs",
      para: "We strive to understand demographics perfectly to create products that serve their needs well.",
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
      title: "Determine The Type Of Product & Device",
      para: "We also consider the nature of the product i.e. website or mobile app and the devices it will support.",
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
      title: "Consider The Deliverables",
      para: "We get absolutely clear about what we need to deliver so that we stay on the right track.",
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
        <title>UI-UX Prototyping</title>        
      </Head>
      <Header />
      <div
        className=" bg-right"
        style={{
          backgroundImage: 'url("/assets/images/mainbackground.png ")',
        }}
      >
        <Banner 
          bannertitle="We weave fluid prototypes"
          bannersubtext="We build rapid and fluid prototypes that emulate the real product."
          serviceimg="/assets/images/aboutusimg3.png"
          servicehead="Replicating the actual product behaviour"
          servicedesc1="A prototype is an early draft of a design used to get rapid feedback on whether the intended design works well or needs to be updated in some areas."
          servicedesc2="Prototypes can range anywhere from a low fidelity sketched prototype created on a sheet of paper, just like the example below, all the way through to a high fidelity interactive clickable design that closely represents the finished product."
        />
      </div>
      <Cards card={cards} />
      <div className="container-ack md:px-0 px-5">
       <ComponentHead
        title="Technology"
        sub="UI-UX Prototyping"
        head="The technology stack for UI-UX Prototyping can vary depending on the specific requirements of the application and the chosen modernization approach."
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
              processhead="Services"
              processsub="Prototyping services we offer"
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

export default Prototyping;