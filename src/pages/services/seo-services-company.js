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

const SeoAgency = () => {
  const processes = [
    {
      id: "1",
      name: "Discover",
desc:"As your search engine optimization company, we take the time to understand your business needs, demands and expectations. During the discovery phase, we set up a meeting with your key company stakeholders and conduct an initial site review. Afterwards, we identify your key performance indicators (KPIs), determine your conversion path and perform extensive keyword research. Doing so allows us to gain in-depth knowledge of your company’s processes, site purpose and goals."    },
    {
      id: "2",
      name: "Analyze",
desc:"The next step is analysis, which covers competitive benchmarking, in-depth site audit, site analytics review and link risk assessment. In this stage, we collect and analyze all your business data to determine the factors that affect your digital presence. We look at your historical traffic patterns, on-site technical issues, competitor’s backlink strategies and link building tactics. We utilize the analytics results in formulating the best approach for your SEO."    },
    {
      id: "3",
      name: "Strategize",
desc:"Once we’ve identified your marketing gaps and opportunities, our SEO experts will create a 60-day strategic online marketing plan (SOMP). This includes your campaign goals, expected outcomes for each marketing channel and estimated completion time. During the first month of your campaign, our SEO company prioritizes the most critical aspects of your SEO. This is to ensure all our SEO efforts deliver immediate, targeted results."    },
    {
      id: "4",
      name: "Execute",
      desc: "In this phase, we start executing the SOMP. We optimize your web pages and blog posts with high-performing keywords, improve your site structure and manage your business listings. Our SEO company also leverages a multiple channel strategy to improve your overall SEO results. We implement social media management campaigns and reach out to third-party websites to increase your online reach.",
    },
    {
      id: "5",
      name: "Report",
      desc: "Our SEO team schedules regular consultations and monthly reports with your project managers to keep you up-to-date with your campaign progress. During our consultation, we present a comprehensive report that provides an overview of your site performance. This includes your KPI trends, overall traffic and ranking. Every month, we create a new 90-day roadmap, so you know exactly how your campaign is doing and what to expect.",
    },
    {
      id: "6",
      name: "Measure",
      desc: "From the moment you sign up with our SEO company, we set up a tracking system that allows us to monitor your online progress and understand the impact of your SEO campaign. We monitor and analyze your analytics, keyword rankings and KPI. Our SEO experts also look at your organic traffic, bounce rate, conversion rate, local visibility and click-through rates (CTRs). By monitoring your SEO efforts, we gain actionable insights and improve your optimization strategies.",
    },
    {
      id: "6",
      name: "Adjust",
      desc: "As part of our ongoing SEO efforts, we continuously adjust our optimization strategies based on the latest algorithm updates and market trends. Search engines are dynamically changing and industry demands are continuously evolving. As such, we take a proactive approach to ensure your website ranks high on search results. Trust our SEO team to make the necessary adjustments and keep you informed of your campaign progress at all times.",
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
      para: "Our SEO Solutions Work: We’ve Proven it Over and Over Again",
      bgcolor: "bg-[#fff]",
      cols: "md:col-span-2",
      textcolor: "text-secondary",
      display: "hidden",
      maintitle: "Better",
      subtitle: " Ackrolix SEO Services Are Better",
    },
    {
      id: 2,
      icon: "01",
      title: "Experience Matters",
      para: "For more than 15 years, Ackrolix has helped businesses in all industries grow their online presence to drive more revenue. We have the experience and client success stories to support any size business wanting to increase online traffic and grow its leads.",
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
      title: "Dedicated SEO Professionals",
      para: "We believe our job is to make a technical, complicated and sometimes overwhelming search engine optimization process as simple as possible for our clients. One of the many ways we accomplish this is by providing each client with a single point of contact to manage your project.",
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
      title: "Relationships & Results",
      para: "We live by our two primary core values: Relationships and Results. We’re here for every client, that’s our pillar. We have SEO experts who specialize in helping businesses of all sizes -- from small businesses to large, national franchises -- achieve exponential growth.",
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
      title: "We’re Always Getting Better",
      para: "SEO is never stagnant and neither are we. SEO is always changing because of multiple Google algorithm updates each year that impact ranking factors and we are always on top of the latest news and trends. Our search engine optimization company is constantly learning new techniques and staying up-to-date to remain ahead of the curve.",
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
      title: "We Play Fair",
      para: "We value honesty and integrity in everything we do. We always play fair, using white hat SEO to drive results without spamming or gaming the system that can lead to possible Google penalties. Simply put: We don’t have to cheat to win in SEO. As a Google Partner, we play by the rules and never jeopardize your business in any way. We never compromise our integrity.",
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
      title: "Transparent Reporting",
      para: "While our competitors use smoke and mirrors, we maintain full transparency so you can see first-hand how our efforts are increasing your online revenue. Our custom, in-depth reporting includes Google Analytics reports to give you a full overview of your site’s SEO performance, regularly updated keyword rankings and a monthly breakdown of the SEO tasks we’ve performed. ",
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
        <title>Search Engine Optimization</title>        
      </Head>
      <Header />
      <div
        className=" bg-right"
        style={{
          backgroundImage: 'url("/assets/images/mainbackground.png ")',
        }}
      >
        <Banner 
          bannertitle=" Search Engine Optimization is a Great Investment"
          bannersubtext="Search engine optimization is more commonly known as its acronym SEO. Optimization is the basis of all SEO practices. Once your brand's presence (website, content and social media platforms) is optimized across the internet, you increase its online visibility. Your website will find its way to the first page of the search engine results pages (SERPs). Your online customers will find your business much quicker too."
          serviceimg="/assets/images/service/svg/sea.png"
          servicehead="An SEO Marketing Company That Gets It"
          servicedesc1="Let’s face it. You know what you need but you just don’t know how to get it. Our SEO specialists hear that over and over from SEO clients who contact Ackrolix Internet Marketing Agency.

          You’re likely here because of one or more of the following reasons:
          
          •  Your website isn’t being found online.
          
          •  Your website traffic has diminished recently and you don’t know why.
          
          •  Suddenly, your volume of incoming calls and leads has declined.
          
          •  You’re starting a new website and want to ramp up new business quickly."
          servicedesc2="Ackrolix is a customer-focused SEO company. Our SEO experts work closely with our clients to develop personalized SEO strategies that drive long-term profitability. By using a proven, efficient and effective methodology, we are able to create high-quality, measurable results."
        />
      </div>
      <Cards card={cards} />
      <div className="container-ack md:px-0 px-5">
       <ComponentHead
        title="Platforms"
        sub="Search Engine Optimization"
        head="The Platforms stack for Search Engine Optimization can vary depending on the specific requirements of the application and the chosen modernization approach."
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
              processhead="Methaodology"
              processsub="Ackrolix Agile SEO Methodology"
              processdesc="Our SEO company utilizes a methodology called “Agile SEO,” which allows us to build a robust campaign framework that provides value for your business. Ackrolix's Agile SEO approach is built around the following processes:"
              processimg="/assets/images/service/svg/sea1.png"
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

export default SeoAgency;