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

const CloudEngineeringAndDevOps = () => {
  const processes = [
    {
      id: "1",
      name: "Faster Development",
      desc: "DevOps integrates multiple automated processes, enabling rapid solution development, testing, and release, resulting in exceptional speed and greater efficiency.",
    },
    {
      id: "2",
      name: "Improved efficiency",
      desc: "You can improve overall business efficiency by completing deployment and testing using a DevOps solution.",
    },
    {
      id: "3",
      name: "Smooth operations",
      desc: "DevOps accelerates the release cycle by identifying and eliminating redundant processes, increasing efficiency, and reducing costs.",
    },
    {
      id: "4",
      name: "Cloud Engineering Excellence",
      desc: "Ackrolix's skilled developers, refined technology, customer-focused approach, and successful implementations across industries define cloud engineering excellence.",
    },
    {
      id: "5",
      name: "Effective Cloud Solutions",
      desc: "Gurgaon's Best in Cloud Engineering & DevOps, Top Cloud App Development Services from Ackrolix.",
    },
    {
      id: "6",
      name: "Empower Your Business",
      desc: "Ackrolix Provides Top-Notch Cloud Engineering & DevOps Solutions in Gurgaon to Boost Your Business.",
    },
  ];
  const cards = [
    {
      id: 1,
      para: "Ackrolix offers various services to help businesses realise the full potential of cloud computing. Focusing on innovation and efficiency, Ackrolix offers solutions to meet the unique needs of its customers.",
      bgcolor: "bg-[#fff]",
      cols: "md:col-span-2",
      textcolor: "text-secondary",
      display: "hidden",
      maintitle: "Services",
      subtitle: "Cloud Application Development Services",
    },
    {
      id: 2,
      icon: "01",
      title: "Continuous Delivery",
      para: "As a professional DevOps consulting firm, we provide continuous delivery (CD) capabilities that enable powerful automation to increase operational efficiency.",
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
      title: "Configuration management",
      para: "Our services include a highly efficient distribution management system that eliminates configuration conflicts and optimises costs.",
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
      title: "Infrastructure as a code",
      para: "Our team of efficient and experienced professionals delivers best-in-class Infrastructure as Code (IaC) solutions that use automation to create programmable infrastructure.",
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
      title: "Monitoring and Logging",
      para: "We follow industry best practices to provide quality analysis, decision-making, and user experience using the latest DevOps tools and techniques.",
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
      title: "SaaS Development",
      para: "We create cloud-based solutions with seamless data integration, strong security, scalability, and effective service level management.",
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
      title: "Cloud Infrastructure Management",
      para: "For the best scalability and compatibility, we adapt solutions to technical limitations by seamlessly integrating current infrastructure, third-party services, and apps.",
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
      img: "/assets/images/service/svg/react.svg",
      name: "React.js",

    },
    {
      id: "2",
      img: "/assets/images/service/svg/flutter.svg",
      name: "Angular",

    },
    {
      id: "3",
      img: "/assets/images/service/svg/next.png",
      name: "Next.js",

    },
    {
      id: "4",
      img: "/assets/images/service/svg/nodejs.svg",
      name: "Node.js",

    },
    {
      id: "5",
      img: "/assets/images/service/svg/express.png",
      name: "Express",

    },
    {
      id: "6",
      img: "/assets/images/service/svg/html.png",
      name: "HTML",

    },
    {
      id: "7",
      img: "/assets/images/service/svg/bootstrap.png",
      name: "Bootstrap",

    },
    {
      id: "8",
      img: "/assets/images/service/svg/php.png",
      name: "php",

    },
    {
      id: "9",
      img: "/assets/images/service/svg/laravel.png",
      name: "Laravel",

    },
    {
      id: "10",
      img: "/assets/images/service/svg/codeigniter.png",
      name: "Codeigniter",

    },
    {
      id: "11",
      img: "/assets/images/service/svg/net.png",
      name: "Asp.net",

    },
    {
      id: "12",
      img: "/assets/images/service/svg/phython.png",
      name: "phython",

    },
    {
      id: "13",
      img: "/assets/images/service/svg/java.svg",
      name: "JAVA",

    },
    {
      id: "14",
      img: "/assets/images/service/svg/andriod.png",
      name: "Android",

    },
    {
      id: "15",
      img: "/assets/images/service/svg/flutter.svg",
      name: "Flutter",

    },
    {
      id: "16",
      img: "/assets/images/service/svg/ios.svg",
      name: "iOS",

    },
    {
      id: "17",
      img: "/assets/images/service/svg/react.svg",
      name: "ReactNative",

    },
    {
      id: "18",
      img: "/assets/images/service/svg/sql.png",
      name: "MySQL",

    },
    {
      id: "19",
      img: "/assets/images/service/svg/mongodb.png",
      name: "MonogoDb",

    },
    {
      id: "20",
      img: "/assets/images/service/svg/postgresql.svg",
      name: "PostgreSQL",

    },
    {
      id: "21",
      img: "/assets/images/service/svg/amazon-web-services.svg",
      name: "AWS",

    },
    {
      id: "22",
      img: "/assets/images/service/svg/wordpress.png",
      name: "Wordpress",

    },
    {
      id: "23",
      img: "/assets/images/service/svg/shopify.svg",
      name: "Shopify",

    },
    {
      id: "24",
      img: "/assets/images/service/svg/joomla.svg",
      name: "Joomla",

    },
    {
      id: "25",
      img: "/assets/images/service/svg/magento.svg",
      name: "Magento",

    },
    {
      id: "26",
      img: "/assets/images/service/svg/webflow.svg",
      name: "Webflow",

    },
    {
      id: "27",
      img: "/assets/images/service/svg/firebase.svg",
      name: "Firebase",

    },
    {
      id: "28",
      img: "/assets/images/service/svg/jquery.svg",
      name: "JQuery",

    },
  ];
  return (
    <div>
      <Head>
        <title>Cloud Application Development Company in Gurgaon - Ackrolix</title>
        <meta
          name="description"
          content="Ackrolix is a leading cloud application development company in Gurgaon. That helps businesses of all sizes build and deploy scalable, secure, and reliable cloud applications."
          />
           <link rel="canonical" href="https://www.ackrolix.com/cloud-app-development-company-gurgaon"/>
          <meta property="og:title" content="Cloud Application Development Company in Gurgaon - Ackrolix" />
          <meta
            property="og:description"
            content="Ackrolix is a leading cloud application development company in Gurgaon. That helps businesses of all sizes build and deploy scalable, secure, and reliable cloud applications."
          />
           <meta
            property="og:url"
            content="#"
          />
          <meta
            property="og:image"
            content="https://www.ackrolix.com/assets/images/logoack.png"
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
          bannertitle="Solutions for Cloud Engineering and DevOps to Boost Business"
          bannersubtext="Ackrolix, a prominent cloud engineering and devops firm with offices in Gurgaon, is a market leader in the technology sector, providing pioneering solutions for organisations of all kinds. Our committed team of experts excels at converting ageing IT infrastructures into stable, scalable cloud-based designs."
          serviceimg="/assets/images/service/svg/clo.png"
          serviceimgAlt="Cloud Application Development Services in Gurgaon"
          servicehead="Upgrade Your Business with Ackrolix Cloud Engineering and DevOps Pioneers in Gurgaon"
          servicedesc1="Ackrolix, a prominent cloud engineering and devops firm with offices in Gurgaon, is a market leader in the technology sector, providing pioneering solutions for organisations of all kinds. Our committed team of experts excels at converting ageing IT infrastructures into stable, scalable cloud-based designs."
          servicedesc2="Another one of Ackrolix's main competencies is DevOps, which is crucial to the process of developing and distributing software. We offer effective Continuous Integration/Continuous Delivery (CI/CD) pipelines, automated testing, and delivery processes by combining development and operations teams. This more efficient method encourages teamwork, shortens the development process, and reduces the time it takes to market new features and products."
        />
      </div>
      <Cards card={cards}/>
      <div className="container-ack md:px-0 px-5">
       <ComponentHead
        title="Technology"
        sub="Empowering Cloud &amp; DevOps Engineering"
        head="By harnessing a cutting-edge technology stack, businesses can empower their cloud and DevOps initiatives to drive transformation and achieve their strategic goals."
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
              processhead="Process"
              processsub="Why choose Ackrolix?"
              processdesc="Choose Ackrolix as the top provider of cloud application development services due to its unmatched knowledge, creative solutions, and exceptional outcomes. Ackrolix provides skilled developers, refined technology, and a customer-centric approach. The company has a history of developing successful applications for a range of sectors."
              processimg="/assets/images/service/svg/clo1.png"
              proocessalt="Cloud App Development Services"
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