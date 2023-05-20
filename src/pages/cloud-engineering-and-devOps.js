import React from "react";
import Head from "next/head";
import Footer from '../components/Common/Footer'
import Header from "../components/Common/Header";
import ComponentHead from "../components/Common/ComponentHead";
import Banner from "../components/Services/DetailPage/Banner";
import Technology from "../components/Services/DetailPage/Technology";
import Process from "../components/Services/DetailPage/Process";
import ProcessHead from "../components/Services/DetailPage/ProcessHead";
import Work from "../components/Services/DetailPage/Work";
import Cards from "../components/Services/DetailPage/Cards";
import Enquiry from "../components/Services/DetailPage/Enquiry";
import Clients from "../components/Home/Clients";

const CloudEngineeringAndDevOps = () => {
  const processes = [
    {
      id: "1",
      name: "Planning and Requirements Gathering",
      desc: "This initial phase involves understanding the project requirements, identifying goals and objectives, defining the target audience, and planning the overall scope of the project.",
    },
    {
      id: "2",
      name: "UI/UX Design",
      desc: "In this phase, the website's structure and visual elements are defined. It includes creating wireframes, mockups, and prototypes to outline the layout, navigation, and overall user experience",
    },
    {
      id: "3",
      name: "Content Creation",
      desc: "Once the design is finalized, content creation begins. This includes writing and organizing the textual content, creating or selecting visual assets such as images and videos, and ensuring the content is optimized for search engines (SEO).",
    },
    {
      id: "4",
      name: "Development",
      desc: "The development phase involves translating the design and content into functional code. It includes front-end development, which focuses on building the client-side elements of the website using HTML, CSS, and JavaScript.",
    },
    {
      id: "5",
      name: "Testing and Quality Assurance",
      desc: " Once the development is complete, thorough testing is conducted to ensure the website functions as expected and is free of bugs and errors.",
    },
    {
      id: "6",
      name: "Deployment and Launch",
      desc: " After successful testing, the website is deployed to a production environment, making it publicly accessible. This involves setting up hosting, configuring servers, and transferring the website files. ",
    },
  ];
  const cards = [
    {
      id: 1,
      para: "At our core, we understand that every business has unique goals, requirements, and target audiences. With this understanding, we take pride in our ability to shape web solutions that perfectly align with our clients' needs and aspirations.",
      bgcolor: "bg-[#fff]",
      cols: "md:col-span-2",
      textcolor: "text-secondary",
      display: "hidden",
      maintitle: "Solutions",
      subtitle: "We Shape The Perfect Web Solutions",
    },
    {
      id: 2,
      icon: "01",
      title: "Complete Product Teams",
      para: "Access Business Analysts, Product Designers, Project Managers, QA Engineers, DevOps, or Full-stack developers.",
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
      title: "Fast Iterations & Frequent Releases",
      para: "Pre-build components and our own templates let our team deliver more in each sprint – this is the perk of having such experienced web developers on board.",
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
      title: "Business Tailored Architecture",
      para: "Designing & implementing a web application architecture that specifically caters to the unique needs and goals of a business requirements.",
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
      title: "Thorough Quality Assurance",
      para: "We do Q & A before each deploy through manual and automated tests that catch bugs, performance issues, and conversion blockers.",
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
      title: "Scalable & Secure Infrastructure",
      para: "We build an architecture that can handle increasing user traffic, data volume, & future growth.",
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
      title: "World Class UI/UX",
      para: "We prioritize the needs, behaviors, & preferences of the target audience. Conduct user research, create user personas, & gather feedback to inform the design decisions.",
      bgcolor: "bg-[#F6F8F9]",
      cols: "md:col-span-1",
      display: "icon",
      textsize: "text-xl",
      fontbold: "font-bold",
      textcolor: "text-secondary",
      main: "hidden",
    },
  ];
  const techs = [
    {
        id: "1",
        img: "/assets/images/service/node.svg",
        name: "Node.js",
        desc: "Lorem ipsum dolor sit amet consect Sapien porttitor. ",
    },
    {
        id: "2",
        img: "/assets/images/service/react.svg",
        name: "React.js",
        desc: "Lorem ipsum dolor sit amet consect Sapien porttitor. ",
    },
    {
        id: "3",
        img: "/assets/images/service/angularjs.svg",
        name: "Angular",
        desc: "Lorem ipsum dolor sit amet consect Sapien porttitor. ",
    },
    {
        id: "4",
        img: "/assets/images/service/laravel.svg",
        name: "Laravel",
        desc: "Lorem ipsum dolor sit amet consect Sapien porttitor. ",
    },
    {
        id: "5",
        img: "/assets/images/service/typescript.svg",
        name: "Typescript",
        desc: "Lorem ipsum dolor sit amet consect Sapien porttitor. ",
    },
    {
        id: "6",
        img: "/assets/images/service/nextjs.svg",
        name: "Next.js",
        desc: "Lorem ipsum dolor sit amet consect Sapien porttitor. ",
    },
];
  return (
    <div>
      <Head>
        <title>Cloud engineering &amp; DevOps</title>
      </Head>
      <Header />
      <div
        className=" bg-right"
        style={{
          backgroundImage: 'url("/assets/images/mainbackground.png ")',
        }}
      >
        <Banner 
          bannertitle="Work with a development team with skills CTOs praise."
          bannersubtext="Software supports your business growth, and you need more from it. We&apos;ve helped over 160+ companies build scalable products with confidence. Technology executives chose our development teams because of their skills tested in 7+ markets."
          serviceimg="/assets/images/aboutusimg3.png"
          servicehead="One scalable team for start-to-finish development"
          servicedesc1="What does it mean to be reliable? It means your outsourced team works as well as your web developers do. Access web development services trusted by 98% of CTOs that you’ll find understanding with. They made APIs, custom web applications, hybrid mobile app development, provided web design services, updated stacks, and build cloud-native systems."
          servicedesc2="One place — everyone you need: Business Analysts, Product Designers, Project Managers, QA Engineers, DevOps, and Full-stack developers. Expect our web development team to be proactive throughout the project with an abundance of improvement suggestions that will get business moving even in areas such as search engine optimization."
        />
      </div>
      <Cards card={cards}/>
      <div className="container-ack md:px-0 px-5">
       <ComponentHead
        title="Technology"
        sub="Cloud & Devops Engineering"
        head="Whatever web applications you&apos;re building, we got your back at every stage of web development, including web design. We’ve built a core system for a bank, an MVP marketplace sold for millions, and other 5☆ custom projects for 140+ companies worldwide."
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
              processhead="Process"
              processsub="Process We Follow"
              processdesc="The web development process typically involves several steps, from planning and designing to coding, testing, and deployment. While the specific process can vary depending on the project and the development methodology being followed."
              processimg="/assets/images/service/videoservice.png"
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

export default CloudEngineeringAndDevOps;