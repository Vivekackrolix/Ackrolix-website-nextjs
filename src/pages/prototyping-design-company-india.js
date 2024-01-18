import React from "react";
import Head from "next/head";
import Header from "../components/Common/Header";
import Banner from "../components/Services/DetailPage/Banner";
import Cards from "../components/Services/DetailPage/Cards";
import ComponentHead from "../components/Common/ComponentHead";
import Technology from "../components/Services/DetailPage/Technology";
import ProccessHead from "../components/Services/DetailPage/ProcessHead";
import Process from "../components/Services/DetailPage/Process";
import Work from "../components/Services/DetailPage/Work";
import Enquiry from "../components/Services/DetailPage/Enquiry";
import Clients from "../components/Home/Clients";
import Footer from "../components/Common/Footer";

const Prototyping = () => {
  const processes = [
    {
      id: "1",
      name: "Industry Expertise",
      desc:"As the premier prototype development company in India, Ackrolix brings a wealth of industry knowledge to the forefront, ensuring precise execution of your vision",
    },
    {
      id: "2",
      name: "Holistic Solutions",
      desc:"Ackrolix offers comprehensive prototype development services in India, providing end-to-end solutions that transform ideas into reality.",
    },
    {
      id: "3",
      name: "Diverse Industries",
      desc:"Our extensive experience empowers us to adeptly handle tasks across a spectrum of industries, from electronics to consumer goods, with precision and proficiency.",
    },
    {
      id: "4",
      name: "Cutting-edge Technology",
      desc: "Utilizing innovative tools and processes, including cutting-edge technologies like additive manufacturing, we swiftly and effectively produce high-quality prototypes.",
    },
    {
      id: "5",
      name: "Collaborative Approach",
      desc: "Engage in a collaborative methodology with Ackrolix throughout the process, ensuring your input significantly influences the final product, consistently exceeding expectations.",
    },
    {
      id: "6",
      name: "Timely Deliveries",
      desc: "We value deadlines and stick to them by using a simplified method to produce products on time and for a reasonable price.",
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
      para: "Steps we follow for prototyping",
      bgcolor: "bg-[#fff]",
      cols: "md:col-span-2",
      textcolor: "text-secondary",
      display: "hidden",
      maintitle: "Services",
      subtitle: "Our Out-of-the-Box Prototype Development Services",
    },
    {
      id: 2,
      icon: "01",
      title: "Requirements Elicitation Process",
      para: "The journey of prototyping software commences with a comprehensive exploration of project requirements obtained directly from clients or end-users.",
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
      title: "Rapid Prototype Development",
      para: "In the initial phase of product development, a swift and straightforward design of the entire product is crafted, facilitating the expeditious creation of prototypes.",
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
      title: "Prototyping Development Services",
      para: "These services encompass the development of functional models or replicas, enabling rigorous testing and validation of both the design and functionality before transitioning to full-scale production.",
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
      title: "Innovative Additive Manufacturing",
      para: "Utilizing advanced techniques like Additive Manufacturing, commonly known as 3D printing, to construct objects layer by layer from digital models. This method allows for intricate designs and accelerates the prototyping process.",
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
      title: "Prototype Crafting",
      para: "In this pivotal stage, a small-scale, fully operational model of the product is meticulously crafted. The prototype is constructed based on detailed information and specifications gathered from clients or end consumers.",
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
      title: "Aesthetic Mock-up Prototypes",
      para: "Engaging in the creation of non-functional mock-up prototypes that serve as visual representations for evaluating design aesthetics and ergonomics through rigorous testing and observation.",
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
        <title>Best prototype designing services in india</title>
        <meta
          name="description"
          content="You won't be disappointed with a company recognized as one of India's best prototype designing services. we provide Fast, flexible, and affordable prototyping solutions. "
          />
                                    <link rel="canonical" href="https://www.ackrolix.com/prototyping-design-company-gurgaon"/>

          <meta property="og:title" content="Best prototype designing services in india" />
          <meta
            property="og:description"
            content="You won't be disappointed with a company recognized as one of India's best prototype designing services. we provide Fast, flexible, and affordable prototyping solutions."
          />
           <meta
            property="og:url"
            content="https://www.ackrolix.com/prototyping-design-company-gurgaon"
          />
          <meta
            property="og:image"
            content="https://www.ackrolix.com/assets/images/service/svg/res.png"
        /> 
         <meta name="robots" 
        content="index,follow" />       
      </Head>
      <Header />
      <div
        className=" bg-right"
        style={{
          backgroundImage: 'url("/assets/images/mainbackground.png ")',
        }}
      >
        <Banner 
          bannertitle="Empower Your Vision With India’s Premier Prototype Development Company"
           bannersubtext="Ackrolix is a renowned Prototype Design and Development Company in India. We specialize in crafting functional replicas that align with market standards and users’ needs."
          serviceimg="/assets/images/service/svg/res.png"
          serviceimgAlt="prototyping design company"
          servicehead="Explore Our Prototype Development Services Suite"
          servicedesc1="Empowered by a team of seasoned design and development nomads, we navigate the efficient pathways of our Prototype Development Process. This method enables us to unearth and rectify design flaws in the early stages, ensuring seamless development. Our prototypes go beyond imitation, offering potential buyers a tangible preview of your product, fostering trust in your concept."
          servicedesc2="Whether your project is a petite endeavour or a grand venture, our Prototype Development Solutions are tailored to your precise needs. From simple paper sketches to fully functional models, we adapt to the size and complexity of your project, crafting commercially viable and profitable products that resonate with your clients."
          servicedesc3="With our swift prototyping approach, we design and iterate prototypes promptly, inviting your continuous feedback throughout the development journey. Trust us to bring your vision to life with precision and efficiency."
        />
        
      </div>
      <Cards card={cards} />
      <div className="container-ack md:px-0 px-5">
      <ComponentHead
          title="Technology"
          sub="Prototyping, UI/UX Strategy, & Design Tools"
          head="The technology stack for Data Visualization may vary based on the unique requirements of the application and the chosen approach to modernization. Here are the modern tools we employ to modernize your business."
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
            <ProccessHead
              processhead="Why Choose Us"
              processsub="Why Choose Ackrolix?"
              processdesc="The Ackrolix team proudly stands as the leading Prototype Development Agency in India, globally offering bespoke and innovative services. Our expertise in creativity and customer-centric solutions ensures excellence in meeting your unique needs every time."
              processimg="/assets/images/service/svg/res1.png"
              proocessalt="Prototype Design Agency"
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