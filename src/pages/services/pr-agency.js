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

const PrAgency = () => {
  const processes = [
    {
      id: "1",
      name: "Executive Positioning",
desc:"Strategize your personal and public brand to influence the stakeholders. Working on the collective goal of the leader and organizational repositioning, by relaying the valued message to the stakeholders."    },
    {
      id: "2",
      name: "Influencer Engagements",
      desc: "Creating a brand-influencer partnership for a long-term relationship with the audience. Data-driven, well-researched and result-oriented approach to equip your brand with credibility and trust from the audience.",
    },
    {
      id: "3",
      name: "Crisis Communications",
desc:"Effects of unforeseen events can take a hit on the brand’s reputation and hamper relationships on various dimensions. Helping your brand cruise the crisis with a multilayered and holistic approach."    },
    {
      id: "4",
      name: "Reputation Management",
      desc: "Managing public perception across the channels with a crucially crafted and controlled narrative, and enhancing the stakeholder perception with customized strategies.",
    },
    {
      id: "5",
      name: "Purpose & ESG",
      desc: "Bridging the gap between a social impact and your business message by carving out the purpose behind your project. Communicating the social goals to the public for positive perception.",
    },
  ];
  const techs = [
    {
      id: "1",
      img: "/assets/images/service/svg/google.svg",
      name: "Google",

    },
    {
      id: "2",
      img: "/assets/images/service/svg/google-ads.svg",
      name: "Google Ads",

    },
    {
      id: "3",
      img: "/assets/images/service/svg/google-analytics.svg",
      name: "google Analytics",

    },
    {
      id: "4",
      img: "/assets/images/service/svg/facebook.svg",
      name: "Facebook",

    },
    {
      id: "5",
      img: "/assets/images/service/svg/instagram.svg",
      name: "Instagram",

    },
    {
      id: "6",
      img: "/assets/images/service/svg/twitter.svg",
      name: "Twitter",

    },
    {
      id: "7",
      img: "/assets/images/service/svg/linkedin.svg",
      name: "LinkedIn",

    },
    {
      id: "8",
      img: "/assets/images/service/svg/youtube.svg",
      name: "YouTube",

    },
    {
      id: "10",
      img: "/assets/images/service/svg/pinterest.svg",
      name: "Pinterest",

    },
    {
      id: "11",
      img: "/assets/images/service/svg/snapchat.svg",
      name: "Snapchat",

    },
    {
      id: "12",
      img: "/assets/images/service/svg/tiktok.svg",
      name: "TikTok",

    },
    {
      id: "13",
      img: "/assets/images/service/svg/quora.svg",
      name: "Quora",

    },
    {
      id: "14",
      img: "/assets/images/service/svg/reddit.svg",
      name: "Reddit",

    },
    {
      id: "15",
      img: "/assets/images/service/svg/mailchimp.png",
      name: "Mailchimp",

    },
    {
      id: "16",
      img: "/assets/images/service/svg/semr.png",
      name: "SEMrush",

    },
    {
      id: "17",
      img: "/assets/images/service/svg/ahref.png",
      name: "Ahrefs",

    },
    {
      id: "18",
      img: "/assets/images/service/svg/moz.png",
      name: "Moz",

    },
    {
      id: "19",
      img: "/assets/images/service/svg/analytics.webp",
      name: "Adobe Analytics",

    },
    {
      id: "20",
      img: "/assets/images/service/svg/cj.png",
      name: "Commission Junction",

    },
    {
      id: "21",
      img: "/assets/images/service/svg/shareasale.png",
      name: "ShareASale",

    },
    {
      id: "22",
      img: "/assets/images/service/svg/hubspot.png",
      name: "HubSpot",

    },
    {
      id: "23",
      img: "/assets/images/service/svg/pardot.png",
      name: "Pardot",

    },
    {
      id: "24",
      img: "/assets/images/service/svg/marketo.png",
      name: "Marketo",

    },
   
  ];
  const cards = [
    {
      id: 1,
      // para: "Our modernization solutions revolutionize your applications' performance, scalability, agility, & maintainability. We enable seamless integration with emerging technologies, optimize infrastructure, & streamline workflows to ensure your applications are future-proof.",
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
      title: "Corporate Communications",
      para: "Strategically crafted internal and external communication to secure your business and brand from reputation disruption. Easing the process of organizational management with an engaging dialog.",
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
      title: "Brand Awareness",
      para: "The right stories about your brand develop a positive sentiment among the public. Interest-centric creative storytelling to bring out the emotional connection and catch their attention.",
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
      title: "Event & Launch PR",
      para: "Communication that helps your project enter the public domain with a strong influence. Capturing the attention of your audience with precise PR techniques and media reach to deliver remarkable results.",
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
      title: "Media Relation Management",
      para: "A flawless campaign with a strong message is the result of a crucial mix of media channels. Guided and calculated approach to establish your brand’s relationship with the media and related stakeholders.",
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
      title: "Earned, Owned & Paid Media",
      para: "Researched insights to plan the content that goes out to different platforms. A result-driven approach that gets the best out of campaigns across various channels.",
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
        <title>PR Agency</title>
      </Head>
      <Header />
      <div
        className=" bg-right"
        style={{
          backgroundImage: 'url("/assets/images/mainbackground.png ")',
        }}
      >
        <Banner
          bannertitle="Publicity is absolutely critical.
          A good PR story is infinitely
          more effective than a front
          page ad."
          // bannersubtext="Get your app back on track for growth with our practice-driven app modernization skills. We provide full-scope app modernization services you can start using quickly to fix, boost, and revamp your systems with teams that have worked for over 160 companies."
          serviceimg="/assets/images/service/svg/pr.png"
          servicehead="PUBLIC RELATIONS"
          servicedesc1="Marketing plants a brand in the audience’s mind but PR establishes it in their heart. Contemporary digital presence has become more complex than ever with evolving consumer preferences. Flawless and appealing communication is the key to gaining consumer trust, which is the currency of an eternal relationship."
          servicedesc2="We give wings to your story by offering a wide mix of digital and offline channels that will carry it across public platforms. With our research and comprehensive knowledge, we craft a committed media aggregation strategy. We make your story heard to ensure that your endeavors reach and leave a mark in people’s mind."
        />
      </div>
      <Cards card={cards} />
      <div className="container-ack md:px-0 px-5">
        <ComponentHead
          title="Platforms"
          sub="PR Agency"
          head="The Platforms stack for PR Agency can vary depending on the specific requirements of the application and the chosen modernization approach."
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
              processhead="Solutions"
              processsub="IMAGE SOLUTIONS"
              processdesc="We are here to balance and enhance public perception with a fresh narrative. Warren Buffett once said that it takes twenty years to build a reputation and five minutes to ruin it. With our swift and strategic crisis solutions, we make sure nothing harms your relationship with the audience. When life gives your public image a hit, we come up with a strategy and quick solution (and also a lemonade!)."
              processimg="/assets/images/service/svg/pr1.png"
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

export default PrAgency;