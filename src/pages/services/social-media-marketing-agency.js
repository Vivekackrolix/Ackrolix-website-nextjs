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
      name: "Dedicated Account Managers",
      desc: "At Ackrolix, we assign specific strategists depending on your industry demands, social media marketing needs and goals. This means you could get multiple social media digital marketing experts working on your brand. Your dedicated account managers are available by email or phone to respond to any questions or engage in discussions."
    },
    {
      id: "2",
      name: "Extensive Onboarding Process",
      desc: "Our social media marketing consultants provide you with an in-depth social media marketing strategy breakdown during your campaign inception. This way, you know exactly what tactics we will implement to achieve your goals. Additionally, we establish your campaign metrics from the get-go to ensure we are on the same page."
    },
    {
      id: "3",
      name: "Custom Social Media Marketing Strategy",
      desc: "Boost your social media engagement and marketing efforts with a social media marketing strategy designed to fit your needs and budget. Our social media marketing experts identify your target audience to create effective social media digital marketing plans that drive higher ROI. "
    },
    {
      id: "4",
      name: "Social Media Campaign Reports",
      desc: "Our custom, in-depth reporting measures include social media campaign reports that give a full overview of your social media performance. We also offer a monthly breakdown of the social media tasks we’ve performed and the hours we’ve spent to help you monitor your ROI.",
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
      para: "Social media marketing services have numerous advantages for startups and established brands. With the right social media marketing plan and campaign monitoring system, social media content marketing can lead to increased search traffic, better SEO,  healthier customer engagement and improved brand loyalty.",
      bgcolor: "bg-[#fff]",
      cols: "md:col-span-2",
      textcolor: "text-secondary",
      display: "hidden",
      maintitle: "Benefits",
      subtitle: "What Are the Benefits of Social Media Marketing Services",
    },
    {
      id: 2,
      icon: "01",
      title: "Better Online Exposure",
      para: "Social media marketing is continually progressing and adapting, becoming a powerful online marketing resource for companies and brands. Social media platforms like Facebook, Twitter, LinkedIn and Instagram can dynamically increase exposure and interest in your company.",
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
      title: "High Search Rankings",
      para: "Search engines like Google and Bing now integrate updates, Tweets, profiles and comments into their results pages, recognizing the importance of social interaction. The more people share your content across social media channels, the more traffic they send to your website, and therefore, the better your search rankings.",
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
      title: "Specific Audience Targeting",
      para: "No matter how valuable and engaging your content, it won’t generate conversions if it doesn’t reach the right audience. Marketing through social media allows you to identify and categorize your ideal customers by age, location and online activities, among other metrics.",
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
      title: "Improved Customer Reach",
      para: "A Global Web Index study shows that approximately 54 percent of online users utilize social media platforms for product research. Furthermore, 49 percent of consumers depend on recommendations from social media influencers when looking for brands.",
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
      title: "Complete Brand Control",
      para: "Social media marketing packages are tailored to your specific needs and financial capacity. This means you have complete control over your branding, budget and social media content marketing strategy. Learning how to use social media for marketing enables you to create and maintain an image that appeals to your target audience and ensure your B2B social media marketing game is always on point.",
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
      title: "Enhanced Customer Trust",
      para: "Understanding how to use social media for marketing allows you to build a thought leadership brand and create deep, meaningful connections with your followers. Our social media marketing agency shares valuable content and engages in online conversations about your company to keep a pulse on your target market.",
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
        <title>Social Media Marketing</title>
      </Head>
      <Header />
      <div
        className=" bg-right"
        style={{
          backgroundImage: 'url("/assets/images/mainbackground.png ")',
        }}
      >
        <Banner
          bannertitle="Build your brand awareness across the web and create meaningful connections with your customers and followers through social media marketing (SMM)."
          bannersubtext="Ackrolix provides social media marketing for small businesses, enterprises and multiple-location companies. No matter if you own a startup or a Fortune 500 company, our social media marketing experts can assist you with your campaign. Partner with us and let our social media marketing agency boost your brand visibility and integrity!"
          serviceimg="/assets/images/service/svg/med.png"
          servicehead="Social Media Marketing Basics"
          servicedesc1="Social media channels have become a major source of news and information in today’s internet-driven world. But that’s not all. Social media presence is also a vital factor in search rankings and digital marketing."
          servicedesc2="As social media usage continues to grow exponentially, knowing how to market on social media is becoming more crucial in reaching your target demographics and creating brand awareness. Many marketers, however, enter the digital and social media marketing realm without fully understanding what is social media marketing and its demands. Don’t make the same mistake.

          Our social media marketing specialists explain the different aspects of business-to-consumer (B2C) and business-to-business (B2B) social media marketing to help you get started with your campaign. Read on and learn what is social media marketing and how to market on social media straight from Ackrolix’s social media marketing experts.
          
          "
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
              processsub="Ackrolix for Your SMM"
              processdesc="As an award-winning social media management company, Ackrolix Internet Marketing Agency maintains full transparency so you can see first-hand how our efforts are increasing your online revenue. Our commitment to effective social media management and marketing strategies creates a valuable network resource for your online marketing needs."
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