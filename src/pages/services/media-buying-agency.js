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

const MediaBuying = () => {
  const processes = [
    {
      id: "1",
      name: "We believe in the outcome",
      desc: "As one of the few integrated social media buying agencies, we create a goal-specific plan for both branding and performance campaigns."
    },
    {
      id: "2",
      name: "Pro at process",
      desc: "Among social media buying agencies, we have a laser-sharp focus on creating ROI-driven campaigns by creating the most relevant custom audience and lookalikes."
    },
    {
      id: "3",
      name: "Defining strategies",
      desc: "We execute negotiation strategies to optimize costs for brand visibility and leads, by varied means of media staging, ensuring your brand is top-notch at optimized costs."
    },
    {
      id: "4",
      name: "Creative media plans",
      desc: "Our creative edge sets our media plan apart from other media companies by analyzing gaps to engage consumers through data-driven and targeted media plans at extremely competitive rates"
    },
    {
      id: "5",
      name: "Innovation never goes out of fashion",
      desc: "At GOZOOP, we believe in trying new platforms and strategies to achieve our targets to reach new conclusions and widen the horizon for revenue. We are always ready to push the boundaries of possibility to meet our goals."
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
        <title>Media Buying and Plannig</title>
      </Head>
      <Header />
      <div
        className=" bg-right"
        style={{
          backgroundImage: 'url("/assets/images/mainbackground.png ")',
        }}
      >
        <Banner
          bannertitle="We know exactly where to place your ads and we’re equipped with all the right tools!"
          // bannersubtext="Get your app back on track for growth with our practice-driven app modernization skills. We provide full-scope app modernization services you can start using quickly to fix, boost, and revamp your systems with teams that have worked for over 160 companies."
          serviceimg="/assets/images/service/svg/buy.png"
          servicehead="MEDIA PLANNING BUYING "
          servicedesc1="Optimizing platforms, pushing the boundaries of innovation, and engaging with consumers is what we do.

          As a digital media agency, we drive outcomes for brands and map the right audiences within the digital landscape. From communication planning, performance planning to e-commerce consulting, our media team is powered by data-led insights, rooted in human behavior."
          servicedesc2="We provide a 360-degree plan within the digital fraternity, including social, third-party, affiliate marketing, and native ads.

          We are not only a programmatic buying agency but also among the best PPC advertising companies available. Our team brings together creative thinking, and a lens for innovation, remaining focused on constantly driving value for partner brands through a spectrum of services."
        />
      </div>
      {/* <Cards card={cards} /> */}
      <div className="container-ack md:px-0 px-5">
        <ComponentHead
          title="Platforms"
          sub="Media Buying and Plannig"
          head="The Platforms stack for Media Buying and Plannig can vary depending on the specific requirements of the application and the chosen modernization approach."
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
              processsub="Media Buying and Plannig"
              processdesc="Optimizing platforms, pushing the boundaries of innovation."
              processimg="/assets/images/service/svg/buy1.png"
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

export default MediaBuying;