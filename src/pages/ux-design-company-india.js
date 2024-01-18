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


const UiStrategy = () => {
  const processes = [
    {
      id: "1",
      name: "Exceptional UX Design Services",
      desc: "As India's leading UX design agency, Ackrolix offers tailored UX strategy services for business success. Our specialized design approach ensures your digital experience aligns seamlessly with company objectives. Elevate your online presence with top-tier internet marketing and digital services",
    },
    {
      id: "2",
      name: "Impressive UX Design Experts",
      desc: "As the premier provider of UX design services in India, our team of seasoned UX design professionals employs precise methods and industry best practices to deliver an exceptional user experience. Our UX strategy focuses on understanding your target market's needs and pain points, resulting in engaging interactions that are both logical and visually appealing."
    },
    {
      id: "3",
      name: "Elevating Experiences, Driving Conversions",
      desc: "Ackrolix is a leading UX design agency in India. Our UI/UX design teams are dedicated to crafting user-centric design solutions that enhance your brand and elevate customer satisfaction. Ackrolix's data-driven methodology, coupled with comprehensive UX research, empowers us to develop compelling UX design strategies, fostering sustained increases in conversion rates."
    },
    {
      id: "4",
      name: "Humanizing Digital Experiences",
      desc: "We prioritize collaboration and unbiased communication, ensuring your mission and vision steer every design decision. Wireframing, prototyping, and usability testing form integral components of our comprehensive UX strategy services, dedicated to enhancing digital experiences at the human level"
    },
    {
      id: "5",
      name: "Enhancing Customer Experiences",
      desc: "Selecting our top-tier UX strategy services in India elevates your company's performance and sets you apart from the competition. Our UX Design Company in India ensures heightened consumer loyalty, increased conversions, and enduring success in the digital space."
    },
    {
      id: "6",
      name: "UX Empowered Business Growth",
      desc: "Opting for our top-notch UX design services in India not only enhances your company's performance but also differentiates it in the market. As your dedicated UX Design Partner in India, Ackrolix ensures increased customer trust, conversions, and sustainable digital success. Count on us to collaboratively craft an effective UX design strategy that fortifies your company and propels your business forward at full throttle."
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
      name: "Procreate",
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
      para: "Increase your conversion rates by 20% and reduce your churn by 30%",
      bgcolor: "bg-[#fff]",
      cols: "md:col-span-2",
      textcolor: "text-secondary",
      display: "hidden",
      maintitle: "Services",
      subtitle: "Personalized UX Design Services",
    },
    {
      id: 2,
      icon: "01",
      title: "UX Strategy Framework",
      para: "Driven by deep empathy, we uncover users' true pain points and desires. Our UX strategy transforms them into seamless experiences that empower, inspire, and build a brand. Ackrolix is surpassing expectations, every time.",
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
      title: "Inspiring UX Innovation",
      para: "Within Ackrolix, we fuel UX innovation by embracing avant-garde concepts, breaking conventions, and rejuvenating the market. With a deep understanding of unmet needs, we've crafted solutions that empower users to go beyond expectations.",
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
      title: "Dynamic Business Consulting",
      para: "We drive businesses to peak potential, uncovering insights and overcoming challenges. Working closely with clients, our UI/UX design team crafts solutions, utilizing digital resources to captivate users and streamline their journey.",
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
      title: "Innovative Design Thinking",
      para: "Our UX design solutions empower users through a blend of practical capabilities, strategic design thinking, and collaborative efforts with your account management team. We create target groups, diligently investigating user behavior and uncovering challenges.",
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
      title: "Purposeful UX Research",
      para: "Crafted with a passion for art and science, our products ensure growth potential, a focus on research, and alignment with modern business trends and technology. We prioritize delivering value, fostering growth, and maintaining budget-friendly solutions for every niche and business-size.",
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
      icon: "06",
      title: "Goal-oriented Branding",
      para: "Crafting your brand involves elements like communication tone, website content; both video and audio, and marketing strategy voice. Partnering with key stakeholders ensures every interaction aligns with your mission and vision.",
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
        <title>Ackrolix| ux design agency in india</title>
        <meta
          name="description"
          content="Ackrolix is a global UX design agency helping businesses succeed.we decade of experience at building impressive interface design and layout. "
        />
        <link rel="canonical" href="https://www.ackrolix.com/ux-design-company-gurgaon" />

        <meta property="og:title" content="Ackrolix| ux design agency in india" />
        <meta
          property="og:description"
          content="Ackrolix is a global UX design agency helping businesses succeed.we decade of experience at building impressive interface design and layout. "
        />
        <meta
          property="og:url"
          content="https://www.ackrolix.com/ux-design-company-gurgaon"
        />
        <meta
          property="og:image"
          content="https://www.ackrolix.com/assets/images/logoack.png"
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
          bannertitle="Ackrolix: Your Trusted UX Design Company In India"
          bannersubtext="At Ackrolix, we seamlessly integrate data-driven UX research methods with your business strategy to craft intuitive user experiences across websites, mobile apps, and customer interactions, exceeding expectations at every touchpoint."
          serviceimg="/assets/images/service/svg/stra.png"
          serviceimgAlt="UX strategy services"
          servicehead="UX Design Services That Drive Value"
          servicedesc1="What is UX design? At Ackrolix, UX design isn't just a process, it's an art form. It takes years of practice to master this art. Our UI/UX designers translate every digital encounter into a captivating journey, meticulously crafted to connect with users on an emotional level. Ackrolix is powered by a passionate team of UX writers, design experts, and UI developers who blend creativity with data-driven insights to build interfaces that are simple, intuitive, and visually stunning."
          servicedesc2="What is UX research? We begin by understanding your audience through in-depth UX research, delicately charting user journeys and constructing wireframes that become the blueprint for your digital masterpiece. Every element, from UI/UX design to microinteractions, is creatively sculpted with your customers' needs and preferences in mind." />
      </div>
      <Cards card={cards} />
      <div className="container-ack md:px-0 px-5">
        <ComponentHead
          title="Technology"
          sub="Our UI/UX Design Toolkit"
          head="The UI/UX design technology stack for visualization may vary based on specific requirements and the chosen modernization approach. Here’s what we employ."
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
              processsub="Why choose Ackrolix?"
              processdesc="Rapidly deploy our comprehensive app modernization services within weeks and days! Enhance, optimize, and rejuvenate your digital systems with a team experienced in aiding 160+ growing businesses."
              processimg="/assets/images/service/svg/stra1.png"
              proocessalt="UX Design Strategy"
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