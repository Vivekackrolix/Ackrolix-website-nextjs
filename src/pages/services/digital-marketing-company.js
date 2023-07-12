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

const Marketing = () => {
  const processes = [
    {
      id: "1",
      name: "Brand and Business",
desc:"Evaluates the level of your digital presence, including competitive position, online reputation and customer relationship management (CRM)"
    },
    {
      id: "2",
      name: "Content and Engagement",
desc:"Assesses your brand engagement, social media marketing strategy, email marketing strategy and content strategy SEO performance, etc."    },
    {
      id: "3",
      name: "Internal Team or Partners",
desc: "Determines your capacity to generate online marketing ideas and perform necessary web optimization processes."   },
    {
      id: "4",
      name: "  Technology and Software Integration",
desc:"Identifies your organization’s major challenges in tracking campaign performance metrics."    },
    {
      id: "5",
      name: "Lead Sources",
desc:"Determines your key traffic sources and the availability of essential marketing channels"    },
    {
      id: "6",
      name: "Success Measurement",
desc:"Evaluates your campaign performance based on factors such as customer lifetime value (CLV), lead volume and website traffic"    },
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
      para: "Given the plethora of marketing strategy agencies that offer website audit services, online marketing and social media strategy solutions, it can be challenging to find the right agency that fits your business. In some cases, you might fall into the trap of an internet marketing and content strategy agency that over-promises but under-delivers.",
      bgcolor: "bg-[#fff]",
      cols: "md:col-span-2",
      textcolor: "text-secondary",
      display: "hidden",
      maintitle: "Strategy",
      subtitle: "Our Marketing Strategy Agency Considers Your Unique Industry",
    },
    {
      id: 2,
      icon: "01",
      title: "Web Audit Practices",
      para: "A reputable marketing strategy company runs a complete digital marketing audit, provides transparent site audit results and clarifies website issues and technical processes. Additionally, a reliable digital strategy firm uses advanced SEO audit tools to ensure all campaign details and recommendations are accurate.",
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
      title: "eCommerce Marketing Strategy",
      para: "Many marketers have entered the eCommerce marketplace, but only a few truly understand its demands, limitations and potential. If you’re building your eCommerce strategy or still solidifying your social media marketing plan for your online store, it’s imperative that you choose a digital marketing strategy agency with years of experience in eCommerce optimization.",
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
      title: "Online Marketplace Advertising Plan",
      para: "Are you a third-party retailer on Amazon, Target Plus or Walmart Marketplace? To improve your profitability and ensure your Amazon marketing strategy adheres to the marketplace standards, be sure to consult with a digital strategy firm that is well-versed in the demands and restrictions of various online marketplace platforms.",
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
      title: "Marketing Flexibility",
      para: "A trustworthy digital strategy consultant formulates a social media marketing business plan and digital marketing techniques that adapt to client demands and changing market conditions. Whether you need help developing a B2B social media strategy, B2C social media strategy or other digital marketing strategies, our internet marketing strategy consultants can assist you.",
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
      title: "Advertising Strategy",
      para: "Promoting your products and services online requires cutting-edge organic and paid search strategies to rise above the din and attract customer attention. However, only a few marketing strategy agencies can effectively produce and implement both Google AdWords strategy and organic digital marketing techniques.",
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
      title: "SEO Website Strategy",
      para: "A dependable internet strategy consultant examines all aspects of your web design and SEO performance to determine all factors that affect your website accessibility and hinder your online growth. Beware of a digital strategy agency that delves right into search optimization without discussing your responsive web design issues.",
      bgcolor: "bg-[#F6F8F9]",
      cols: "md:col-span-1",
      display: "icon",
      textsize: "text-xl",
      fontbold: "font-bold",
      textcolor: "text-secondary",
      main: "hidden",
    },
  ];  

  const casestudies=[
    {
      id:1,
      image:"/assets/images/service/caseone.png",
      name:"Logical Fallacies",
      desc:"What I’m talking about is the sensationalist posts attempting to boil down a successful company into a blog post of no more than a few thousand words. "
    },
    {
      id:2,
      image:"/assets/images/service/casetwo.png",
      name:"Long term risk",
      desc:"What I’m talking about is the sensationalist posts attempting to boil down a successful company into a blog post of no more than a few thousand words. "
    },
    {
      id:3,
      image:"/assets/images/service/casethree.png",
      name:"growth hackers",
      desc:"What I’m talking about is the sensationalist posts attempting to boil down a successful company into a blog post of no more than a few thousand words. "
    },
    {
      id:4,
      image:"/assets/images/service/casetwo.png",
      name:" whole lot of factors",
      desc:"What I’m talking about is the sensationalist posts attempting to boil down a successful company into a blog post of no more than a few thousand words. "
    },
    {
      id:5,
      image:"/assets/images/service/casethree.png",
      name:"Outliers’ success",
      desc:"What I’m talking about is the sensationalist posts attempting to boil down a successful company into a blog post of no more than a few thousand words. "
    },
    {
      id:6,
      image:"/assets/images/service/caseone.png",
      name:"North Star Metric",
      desc:"What I’m talking about is the sensationalist posts attempting to boil down a successful company into a blog post of no more than a few thousand words. "
    },
  ];
  return (
    <div>
      <Head>
        <title>Digital Marketing</title>        
      </Head>
      <Header />
      <div
        className=" bg-right"
        style={{
          backgroundImage: 'url("/assets/images/mainbackground.png ")',
        }}
      >
        <Banner 
          bannertitle="You Know What You Want,
          But You’re Not Sure How to Get There"
          bannersubtext="We Ensure You Don’t Take the Wrong Turn En Route to Success."
          serviceimg="/assets/images/service/svg/dig.png"
          servicehead="Why You Need to Start With Strategy"
          servicedesc1="Marketing your brand without an internet marketing strategy or using an inappropriate online marketing plan is a surefire way to lose money, waste time and get nowhere."
          servicedesc2=" In today’s digital world, growing a business comes with many challenges and opportunities that demand different web marketing strategies and solutions. A digital marketing strategy that has worked for a specific audience segment may not be the best approach for another. Likewise, internet marketing strategies that yielded positive results a year ago may not generate the same results today." 
        />
      </div>
      <Cards card={cards} />
      <div className="container-ack md:px-0 px-5">
       <ComponentHead
        title="Platforms"
        sub="Digital Marketing"
        head="The Platforms stack for Digital Marketing can vary depending on the specific requirements of the application and the chosen modernization approach."
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
              processhead="Areas"
              processsub="6 Key Areas of Focus "
              processdesc="To ensure we outline a digital marketing plan tailored to your brand, we ask you to accomplish a self-assessment questionnaire based on six core areas:"
              processimg="/assets/images/service/svg/dig1.png"
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
<CaseStudies casestudies={casestudies}/>
      <Work />
      {/* <Section /> */}
      <Enquiry />
      <Clients />
      <Footer />
    </div>
  );
};

export default Marketing;