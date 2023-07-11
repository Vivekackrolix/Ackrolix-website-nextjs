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

const ProductDdesignCompany = () => {
  const processes = [
    {
      id: "1",
      name: "Empathise",
      desc:"The first stage of the process is spent getting to know the user and understanding their wants, needs and objectives. This means observing and engaging with people in order to understand them on a psychological and emotional level. During this phase, the designer seeks to set aside their assumptions and gather real insights about the user. Learn all about key empathy-building methods here."
    },
    {
      id: "2",
      name: "Define",
desc:"The second stage in the Design Thinking process is dedicated to defining the problem. You’ll gather all of your findings from the empathise phase and start to make sense of them: what difficulties and barriers are your users coming up against? What patterns do you observe? What is the big user problem that your team needs to solve? By the end of the define phase, you will have a clear problem statement. The key here is to frame the problem in a user-centered way; rather than saying We need to…, frame it in terms of your user:Retirees in the Bay area need…",
    },
    {
      id: "3",
      name: "Ideate",
desc:"it’s time to start working on potential solutions. The third phase in the Design Thinking process is where the creativity happens, and it’s crucial to point out that the ideation stage is a judgement-free zone! Designers will hold ideation sessions in order to come up with as many new angles and ideas as possible. There are many different types of ideation technique that designers might use, from brainstorming and mindmapping to bodystorming (roleplay scenarios) and provocation — an extreme lateral-thinking technique that gets the designer to challenge established beliefs and explore new options and alternatives.",
    },
    {
      id: "4",
      name: "Prototype",
desc:"A prototype is basically a scaled-down version of the product which incorporates the potential solutions identified in the previous stages. This step is key in putting each solution to the test and highlighting any constraints and flaws. Throughout the prototype stage, the proposed solutions may be accepted, improved, redesigned or rejected depending on how they fare in prototype form. You can read all about the prototyping stage of Design Thinking in this in-depth guide.",
    },
    {
      id: "5",
      name: "Test",
desc:"After prototyping comes user testing, but it’s important to note that this is rarely the end of the Design Thinking process. In reality, the results of the testing phase will often lead you back to a previous step, providing the insights you need to redefine the original problem statement or to come up with new ideas you hadn’t thought of before. Learn all about user testing in this guide."
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
      name: "Flutter",

    },
    {
      id: "3",
      img: "/assets/images/service/svg/ionic.svg",
      name: "Ionic",

    },
    {
      id: "4",
      img: "/assets/images/service/svg/react.svg",
      name: "ReactNative",

    },
    {
      id: "5",
      img: "/assets/images/service/svg/saas.png",
      name: "SAAS",

    },
    {
      id: "6",
      img: "/assets/images/service/svg/andriod.png",
      name: "Android",

    },
    {
      id: "7",
      img: "/assets/images/service/svg/bootstrap.png",
      name: "Bootstrap",

    },
    {
      id: "8",
      img: "/assets/images/service/svg/css.svg",
      name: "CSS",

    },
    {
      id: "10",
      img: "/assets/images/service/svg/net.png",
      name: "Microsoft .net",

    },
    {
      id: "11",
      img: "/assets/images/service/svg/javascript.svg",
      name: "Javascript",

    },
    {
      id: "12",
      img: "/assets/images/service/svg/drupal.svg",
      name: "Drupal",

    },
    {
      id: "13",
      img: "/assets/images/service/svg/joomla.svg",
      name: "Joomla",

    },
    {
      id: "14",
      img: "/assets/images/service/svg/matlab.png",
      name: "Matlab",

    },
    {
      id: "15",
      img: "/assets/images/service/svg/html.png",
      name: "HTML",

    },
    {
      id: "16",
      img: "/assets/images/service/svg/java.svg",
      name: "JAVA",

    },
    {
      id: "17",
      img: "/assets/images/service/svg/sql.png",
      name: "SQL",

    },
    {
      id: "18",
      img: "/assets/images/service/svg/firebase.svg",
      name: "Firebase",

    },
    {
      id: "19",
      img: "/assets/images/service/svg/nodejs.svg",
      name: "Node.js",

    },
    {
      id: "20",
      img: "/assets/images/service/svg/php.png",
      name: "php",

    },
    {
      id: "21",
      img: "/assets/images/service/svg/phython.png",
      name: "phython",

    },
    {
      id: "22",
      img: "/assets/images/service/svg/rlogo.png",
      name: "R Programming",

    },
    {
      id: "23",
      img: "/assets/images/service/svg/ai.png",
      name: "AI",

    },
    {
      id: "24",
      img: "/assets/images/service/svg/tableau.svg",
      name: "Tableau",

    },
    {
      id: "25",
      img: "/assets/images/service/svg/jquery.svg",
      name: "JQuery",

    },
    {
      id: "26",
      img: "/assets/images/service/svg/wordpress.png",
      name: "Wordpress",

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
      maintitle: "Revitalize",
      subtitle: "Revolutionize Your Applications With Modernization Solutions",
    },
    {
      id: 2,
      icon: "01",
      title: "Improved Productivity",
      para: "We aim to enhance productivity by addressing the limitations, inefficiencies, & outdated aspects of existing applications.",
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
      title: "Cost Optimization",
      para: "The strategic efforts to reduce expenses associated with application development, maintenance, & operations while maximizing value & efficiency.",
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
      title: "Better Security",
      para: "Fewer vulnerabilities generated by old and disorderly legacy code (threat identified by OWASP).",
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
      title: "Improved CX",
      para: "Enhanced performance and easier 3rd party integrations lead to improved customer experience (CX).",
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
      title: "Better Business Performance",
      para: "Higher sales through improved CX (IBM reports that app modernization leads to a 14% revenue increase).",
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
      title: "New Growth Possibilities",
      para: "New business possibilities for a modernized app, including AI, machine learning, big data, and the public cloud.",
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
        <title>Product Design Company</title>        
      </Head>
      <Header />
      <div
        className=" bg-right"
        style={{
          backgroundImage: 'url("/assets/images/mainbackground.png ")',
        }}
      >
        <Banner 
          bannertitle="Make your systems efficient & scalable with our Porduct Designing expertise"
          bannersubtext="Product design plays a crucial role in creating exceptional user experiences and driving the success of a product. It encompasses the process of understanding user needs, ideating, prototyping, and iterating to develop a functional and visually appealing product."
          serviceimg="/assets/images/service/svg/pro.png"
          servicehead="Designing the Future: Crafting Innovative Solutions for a Connected World"
          servicedesc1="Digital product design is a process that professionals use to create innovative technical solutions that address consumer requirements, desires or priorities. This involves an in-depth perception of their consumers and understanding how they move through a digital experience by learning to use and operate it to receive the desired outcome. This design process is important because it can help you attract and interest new customers while adding value to the company."
          servicedesc2="Digital product design is the ultimate tool for unleashing your creativity and designing innovative products. With this cutting-edge technology, you can bring your ideas to life and create stunning designs that will captivate your audience. Whether you're a professional designer or just starting out, digital product design offers endless possibilities for crafting unique and visually appealing products."
        />
      </div>
      {/* <Cards card={cards} /> */}
      <div className="container-ack md:px-0 px-5">
       <ComponentHead
        title="Technology"
        sub="Product Design Company"
        head="The technology stack for Product Design Company can vary depending on the specific requirements of the application and the chosen modernization approach."
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
              processhead="Stages"
              processsub="There are following steps"
              processdesc="A 5 Stage Process to Better Product Design. At its core, design thinking is a problem-solving methodology that, first and foremost, focuses on the user’s needs rather than the product’s specifications. Teams that fuse design thinking into their design process can develop better, user-centered products."
              processimg="/assets/images/service/svg/pro1.png"
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

export default ProductDdesignCompany;
