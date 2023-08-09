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
import ProccessHead from "../../components/Services/DetailPage/ProcessHead";

const WebsiteDevelopment = () => {
  const processes = [
    {
      id: "1",
      name: "Understanding Client Requirement",
      desc: "Our Website Design Company, Ackrolix, understands the specific requirements of our clients. We initiate a detailed discussion with them to grasp their business goals, target audience, brand identity, and desired functionalities.",
    },
    {
      id: "2",
      name: "Research and Analysis",
      desc: "We examine the client's industry, competitors, and current market trends to identify opportunities and challenges. This research helps us develop a strategic approach to designing a website that stands out from the competition.",
    },
    {
      id: "3",
      name: "Planning and Strategy",
      desc: "The talented team of our Web Development Agency works to bring the vision to life. We create visually appealing designs that align with the client's brand identity and ensure the website is fully functional across all devices.",
    },
    {
      id: "4",
      name: "Content Creation and Optimization",
      desc: "Our skilled content creators develop relevant and SEO-friendly content that resonates with the target audience while also boosting the website's search engine rankings.",
    },
    {
      id: "5",
      name: "Testing and Quality Assurance",
      desc: "We conduct rigorous testing and quality assurance to identify and fix any potential issues. We ensure that the website functions smoothly and provides a seamless user experience.",
    },
    {
      id: "6",
      name: "Website Launch",
      desc: "Our team at Website Design Company in Gurgaon ensures a smooth transition to the live website, and we closely monitor its performance during this critical phase.",
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
const cards = [
    {
      id: 1,
      para: "Our modernization solutions revolutionize your applications' performance, scalability, agility, & maintainability. We enable seamless integration with emerging technologies, optimize infrastructure, & streamline workflows to ensure your applications are future-proof.",
      bgcolor: "bg-[#fff]",
      cols: "md:col-span-2",
      textcolor: "text-secondary",
      display: "hidden",
      maintitle: "SERVICES",
      subtitle: "Our Web Development Services",
    },
    {
      id: 2,
      icon: "01",
      title: "Custom Web Development",
      para: "Our Web Development Services specialize in creating custom websites from scratch, designed to align with your brand identity and specific requirements.",
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
      title: "Responsive Web Design",
      para: "As a web development agency, Ackrolix ensures that websites developed are responsive and adapt smoothly to different devices, providing an optimal user experience on desktops, tablets, and smartphones.",
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
      title: "E-commerce Solutions",
      para: "Our Website Development Company provides robust e-commerce integration, enabling secure payment gateways, intuitive product catalogs, and user-friendly checkout processes for online businesses.",
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
      title: "Content Management Systems (CMS)",
      para: "Our Website Design Company optimizes websites for search engines, improving their visibility and ranking on search results pages to attract more organic traffic.",
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
      title: "UI/UX Design",
      para: "As a web design company, Ackrolix focuses on creating user-friendly interfaces and smooth navigation to enhance the overall user experience and reduce bounce rates.",
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
      title: "Web Application Development",
      para: "Our Website Development Company develops web applications that cater to specific business needs, ensuring seamless functionality and enhanced user engagement.",
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
        <title>Website Design & Development Company in Gurgaon - Ackrolix</title>
        <meta
          name="description"
          content="Ackrolix is a Web Development Company in Gurgaon that builds better for optimum performance and customer engagement across all devices and platforms."
        />
        <meta
          property="og:title"
          content="Website Design & Development Company in Gurgaon - Ackrolix"
        />
        <meta
          property="og:description"
          content="Ackrolix is a Web Development Company in Gurgaon that builds better for optimum performance and customer engagement across all devices and platforms."
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
          bannertitle="Ingenious Web Design and Development Company"
          bannersubtext="Ackrolix has established itself as a well-known Web Design and Website Development Company in Gurgaon, India, with a solid reputation for its emphasis on innovation and originality. Our team of talented designers and programmers is dedicated to providing outstanding web design and development solutions that are customized to meet the specific requirements of each client."
          serviceimg="/assets/images/service/svg/web.png"
          servicehead="One scalable team for start-to-finish development"
          servicedesc1="What does it mean to be reliable? It means your outsourced team works as well as your web developers do. Access web development services trusted by 98% of CTOs that you’ll find understanding with. They made APIs, custom web applications, hybrid mobile app development, provided web design services, updated stacks, and build cloud-native systems."
          servicedesc2="One place — everyone you need: Business Analysts, Product Designers, Project Managers, QA Engineers, DevOps, and Full-stack developers. Expect our web development team to be proactive throughout the project with an abundance of improvement suggestions that will get business moving even in areas such as search engine optimization."
        />
      </div>
      <Cards card={cards} />
      <div className="container-ack md:px-0 px-5">
       <ComponentHead
        title="Technology"
        sub="Website Development"
        head="The technology stack for Website Development can vary depending on the specific requirements of the application and the chosen modernization approach."
      />
      <Technology tech={techs} />
      </div>

      <div className="container-ack md:px-0 px-5">
            <ProccessHead
              processhead="ROLE"
              processsub="Role of a Website Development Company"
              processdesc="A well-designed Website Design Company plays a vital role in attracting potential customers and establishing credibility."
              processimg="/assets/images/service/svg/app1.png"
            />
            <Process process={processes} />
          </div>

      <div>
        <div
          style={{
            backgroundImage:
              'url("/assets/images/service/servicebackground.png")',
          }}
        >
          {/* <div className="container-ack md:px-0 px-5">
            <ProcessHead
              processhead="Services"
              processsub="App Modernization On Peek"
              processdesc="Full-scope app modernization services you can start using quickly (even in weeks!) to fix, boost, and revamp your systems with teams that have worked for over 160 companies."
              processimg="/assets/images/service/videoservice.png"
            />
            <Process process={processes} />
          </div> */}
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

export default WebsiteDevelopment;