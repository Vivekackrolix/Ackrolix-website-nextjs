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
import CaseStudies from "../../components/Services/DetailPage/CaseStudies";
const SmmAgency = () => {
  const processes = [
    {
      id: "1",
      name: "Listen",
      desc: " We gain insight into your customers and their interests through social media listening tools."
    },
    {
      id: "2",
      name: "Plan",
      desc: "At Ackrolix, we work closely with brands to understand their goals, create brand narratives and create custom solutions for multiple platforms."
    },
    {
      id: "3",
      name: "Execute",
      desc: "Our expertise is creating memorable product stories that engage existing and new customers, maximising impact and engagement."
    },
    {
      id: "4",
      name: "Optimise",
      desc: "We're constantly monitoring advertising results across multiple platforms, using these valuable insights to improve our strategies in real-time for the best results.",
    },
    {
      id: "5",
      name: "Paid and Organic Team",
      desc: "We ensure our clients are matched with a subject matter expert. Our team comprises organic and paid strategists with years of expertise and experience, so you can rest easy knowing your campaign is well taken care of. Although paid and organic are very different aspects of social media marketing, we implement a cohesive strategy to maximize your social media marketing conversions."
    },
    {
      id: "6",
      name: "Diverse Marketing Experience",
      desc: "Ackrolix has experience in many different markets, including B2B and B2C at all sizes. Whether you own a startup, enterprise or a multi-location company, our social media marketing firm strives to go above and beyond your expectations. We give your brand a solid social media presence and online reputation through sustained research, tracking and adaptation to online trends and resources."
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
    {
      id: "25",
      img: "/assets/images/service/svg/tumblr.svg",
      name: "Tumblr",

    },

  ];
  const cards = [
    {
      id: 1,
      para: "Ackrolix offers full services to help businesses maximise their online presence and engagement. Their teams of experts are skilled at creating effective social media strategies that resonate with each client's unique goals and audience. Ackrolix achieves results by advertising across multiple platforms, creating shared content, managing accounts, and running ad campaigns. Using the power of social media, they can increase product awareness, customer loyalty, and productivity.",
      bgcolor: "bg-[#fff]",
      cols: "md:col-span-2",
      textcolor: "text-secondary",
      display: "hidden",
      maintitle: "Services",
      subtitle: "Social media marketing services",
    },
    {
      id: 2,
      icon: "01",
      title: "Social media strategy",
      para: "Ackrolix's social media strategy includes creating content, managing accounts, and running advertising campaigns across platforms to increase brand awareness, trust, and leads. Their data-driven approach enables continuous improvement to achieve optimum results.",
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
      title: "Social media optimization",
      para: "Ackrolix is creating engaging content and running advertising campaigns. Increases business awareness and encourages customer engagement through data-driven ideas.",
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
      title: "Social media promotion",
      para: "Increase your brand name, engagement, and success with our professional social media services.",
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
      title: "Community management",
      para: "Ackrolix enabling meaningful interactions and building strong online communities. Their expertise provides audience engagement, excellent customer support, and trust for businesses looking to build a strong online presence.",
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
      title: "Social Influencer marketing",
      para: "Ackrolix specialises in using social media influencers to promote great brands. Its teams of experts identify key stakeholders, build real partnerships, and run effective campaigns that take business awareness and engagement to new heights.",
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
      title: "Social media Advertising",
      para: "Ackrolix specialises in delivering targeted and effective campaigns to increase brand awareness, engage audiences and increase conversions. With expert marketing strategies and data-driven insights, they optimise results to enable businesses to get the most out of their marketing efforts.",
      bgcolor: "bg-[#F6F8F9]",
      cols: "md:col-span-1",
      display: "icon",
      textsize: "text-xl",
      fontbold: "font-bold",
      textcolor: "text-secondary",
      main: "hidden",
    },
  ];
  const casestudies = [
    {
      id: 1,
      image: "/assets/images/service/caseone.png",
      name: "Logical Fallacies",
      desc: "What I’m talking about is the sensationalist posts attempting to boil down a successful company into a blog post of no more than a few thousand words. "
    },
    {
      id: 2,
      image: "/assets/images/service/casetwo.png",
      name: "Long term risk",
      desc: "What I’m talking about is the sensationalist posts attempting to boil down a successful company into a blog post of no more than a few thousand words. "
    },
    {
      id: 3,
      image: "/assets/images/service/casethree.png",
      name: "growth hackers",
      desc: "What I’m talking about is the sensationalist posts attempting to boil down a successful company into a blog post of no more than a few thousand words. "
    },
    {
      id: 4,
      image: "/assets/images/service/casetwo.png",
      name: " whole lot of factors",
      desc: "What I’m talking about is the sensationalist posts attempting to boil down a successful company into a blog post of no more than a few thousand words. "
    },
    {
      id: 5,
      image: "/assets/images/service/casethree.png",
      name: "Outliers’ success",
      desc: "What I’m talking about is the sensationalist posts attempting to boil down a successful company into a blog post of no more than a few thousand words. "
    },
    {
      id: 6,
      image: "/assets/images/service/caseone.png",
      name: "North Star Metric",
      desc: "What I’m talking about is the sensationalist posts attempting to boil down a successful company into a blog post of no more than a few thousand words. "
    },
  ]
  return (
    <div>
      <Head>
        <title>Social Media Marketing Agency in Gurgaon - Ackrolix</title>
        <meta
          name="description"
          content="Ackrolix is a professional Social Media Marketing Agency based in Gurgaon, that provides expert services to improve your online visibility."
          />
          <meta property="og:title" content="Social Media Marketing Agency in Gurgaon - Ackrolix" />
          <meta
            property="og:description"
            content="Ackrolix is a professional Social Media Marketing Agency based in Gurgaon, that provides expert services to improve your online visibility."
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
          bannertitle="Best social media marketing agency in gurgaon."
          bannersubtext=""
          serviceimg="/assets/images/service/svg/med.png"
          servicehead="How Ackrolix Can Help Your Business Harness the Power of Social Media."
          servicedesc1="
          Ackrolix is ​​a social media marketing company based in Gurgaon that provides innovative and effective solutions to businesses aiming to harness the power of social media for growth and success. With a dedicated team of social media experts and a deep understanding of social media."
          
        
          servicedesc2=" Ackrolix specialises in creating effective campaigns that drive engagement, increase brand awareness and build meaningful connections with audiences. As an advertising company, Ackrolix starts by researching and understanding each client's unique needs and goals. One of Ackrolix's key strengths is content creation and management. They create shareable and engaging content that resonates with their audience on various social media sites. Whether it's an image, a shared video, or a blog post, Ackrolix ensures that every content has a purpose, provides meaningful interactions, and builds trust."

          
          
          
        />
      </div>
      <Cards card={cards} />
      <div className="container-ack md:px-0 px-5">
        <ComponentHead
          title="Platforms"
          sub="Social Media Marketing"
          head="The Platforms stack for Social Media Marketing can vary depending on the specific requirements of the application and the chosen modernization approach."
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
              processhead="Ackrolix"
              processsub="Social media marketing strategy"
              processdesc="Ackrolix's data-driven strategy begins with thoroughly understanding each client's business goals and target audience. They create relevant content and run ad campaigns across multiple platforms to increase brand awareness, increase engagement and generate leads. Continuous analysis and optimization provide the most impact and measurability, making Ackrolix the partner for businesses looking for good and good business."
              processimg="/assets/images/service/svg/med1.png"
            />
            <Process process={processes} />
          </div>
        </div>
        <div className="h-[7.5rem]"
          style={{
            backgroundImage: 'url("/assets/images/service/wave.png")',
          }}></div>
      </div>

      <ComponentHead
        title="Studies"
        sub="Case Studies"
      />
      <CaseStudies casestudies={casestudies} />

      <Work />
      {/* <Section /> */}
      <Enquiry />
      <Clients />
      <Footer />
    </div>
  );
};

export default SmmAgency;