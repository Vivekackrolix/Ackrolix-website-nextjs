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

const SemAgency = () => {
  const processes = [
    {
      id: "1",
      name: "Better Brand Recognition",
      desc: "Internet search engine marketing allows you to choose and bid on the most accurate keywords that match your customers’ search intent. Additionally, Google SEM enables you to place your brand name in the ad’s headline, display URL, description and extension link.",
    },
    {
      id: "2",
      name: "Increased Conversion",
      desc: "One of the key benefits of Google SEM ads is its ability to provide near-immediate results with a fast return on investment (ROI). With the right search engine marketing solutions, you can generate new sales and conversions on the same day.",
    },
    {
      id: "3",
      name: "Specific Targeting",
      desc: "Statistics show that more than 30 billion Google searches are conducted every month and 99.9 percent of these global searches do not apply to your audience targeting approach.",
    },
    {
      id: "4",
      name: "Greater Campaign Control",
      desc: "SEM digital marketing makes it easy to manage your advertising budget, campaign scope and brand messaging. Unlike in SEO, where search engines decide how organic search results are displayed, Google search advertising gives you control over your calls-to-action (CTAs), ad schedule, audience targeting and other aspects of your Google SEM ads.",
    },
    {
      id: "5",
      name: "Measurable Growth",
      desc: "Internet search engine marketing enables you to test your ad performance and measure the results for each campaign. With access to in-depth analytics and campaign data, you can determine which ads generate the highest conversion rate for your company in terms of CTR, clicks, impressions and other metrics."
    },
    {
      id: "6",
      name: "Improved Organic Traffic",
      desc: "Research shows that more than 93 percent of online experiences begin with a search engine. This means gaining higher search visibility positions your brand where the majority of your customers are. By knowing what is SEM and how you can leverage it to your advantage, you can drive high-quality traffic to your website from search engines."
    },
  ];
  const techs = [
    // {
    //   id: "1",
    //   img: "/assets/images/service/node.svg",
    //   name: "Node.js",
    //   desc: "Lorem ipsum dolor sit amet consect Sapien porttitor. ",
    // },
    // {
    //   id: "2",
    //   img: "/assets/images/service/react.svg",
    //   name: "React.js",
    //   desc: "Lorem ipsum dolor sit amet consect Sapien porttitor. ",
    // },
    // {
    //   id: "3",
    //   img: "/assets/images/service/angularjs.svg",
    //   name: "Angular",
    //   desc: "Lorem ipsum dolor sit amet consect Sapien porttitor. ",
    // },
    // {
    //   id: "4",
    //   img: "/assets/images/service/laravel.svg",
    //   name: "Laravel",
    //   desc: "Lorem ipsum dolor sit amet consect Sapien porttitor. ",
    // },
    // {
    //   id: "5",
    //   img: "/assets/images/service/typescript.svg",
    //   name: "Typescript",
    //   desc: "Lorem ipsum dolor sit amet consect Sapien porttitor. ",
    // },
    // {
    //   id: "6",
    //   img: "/assets/images/service/nextjs.svg",
    //   name: "Next.js",
    //   desc: "Lorem ipsum dolor sit amet consect Sapien porttitor. ",
    // },
  ];
  const cards = [
    {
      id: 1,
      para: "Search engines use algorithms to rank SEM ads and determine their search relevance. Paid search engine marketing is all about creating the right search engine marketing strategy, bidding on high-value keywords and continuously improving your search advertising tactics based on analytics results to lower your ad spending and improve profitability.",
      bgcolor: "bg-[#fff]",
      cols: "md:col-span-2",
      textcolor: "text-secondary",
      display: "hidden",
      maintitle: "Work",
      subtitle: "How Does SEM Work?",
    },
    {
      id: 2,
      icon: "01",
      title: "Keyword Research and Analysis",
      para: "Our SEM company utilizes advanced keyword research tools, such as Google Search Console, to identify high-performing search terms and eliminate negative keywords from your list that are not an effective use of your search advertising budget.",
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
      title: "Ads Creation and Landing Page Development",
      para: "Once we’ve identified your target keywords, our search engine marketing experts craft text-based ads to display in search results and link them to unique, optimized landing pages. The goal is to capture your target audience’s initial search intent and move them to the bottom of your sales funnel.",
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
      title: " Account Setup and Tracking",
      para: "This phase is crucial in understanding the effectiveness of your search engine marketing strategy. Our SEM firm runs a lead-tracking report to see if the search engine in use supports conversion tracking. If it does, we double-check the codes to ensure they are properly installed on your landing pages.",
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
      title: "Campaign Launch and Monitoring",
      para: "Now that you have optimized paid search marketing ads, well-designed landing pages and a robust search engine marketing strategy, you are almost ready to launch your PPC search engine marketing campaign. Our SEM agency manages your campaign settings, such as locations, languages, networks and devices, to determine how your ads will run. Upon the campaign launch, we closely monitor your ad performance.",
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
      title: "Evaluation and Analysis",
      para: "Benchmarking campaign results against your paid search marketing goals is key to measuring your SEM success. We track and evaluate your key performance indicators (KPIs), including click-through rate (CTR), Quality Score, search impression share and cost per conversion. The analytics results allow us to optimize your next paid search engine marketing campaigns for higher conversions.",
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
        <title>Social Engine Marketing</title>
      </Head>
      <Header />
      <div
        className=" bg-right"
        style={{
          backgroundImage: 'url("/assets/images/mainbackground.png ")',
        }}
      >
        <Banner
          bannertitle="What is SEM and Why It’s a Great Investment"
          bannersubtext="In today’s increasingly competitive digital world, search engines have become an indispensable utility across industries and institutions, including digital marketing, healthcare, education and eCommerce. Search engines are customer service tools that allow online users to locate diverse information on the internet, including news, blog posts and brand offerings, and make informed decisions."
          serviceimg="/assets/images/service/svg/eng.png"
          servicehead="What Are Search Engines?"
          servicedesc1=" Search engines have three significant functions:"
          servicedesc2="1. Crawl
          Search engines use their own web crawlers or search engine spiders to scour billions of pages on the internet and find new and updated content, such as web pages, videos, PDF files and images. Search engine spiders fetch a few websites and follow the links on these pages to find new URLs.
        "servicedesc3="  2. Index
In this phase, search engines store and organize the content based on the keywords, data, recency and user engagement.The new URLs found in the crawling process are indexed in a massive database called Caffeine to be retrieved when the content on the URL matches an online user’s search query.
"servicedesc4="3. Rank
Search engines categorize web pages and rank them based on relevance to provide the most useful search results to online users. The higher your website ranks on SERPs, the greater your search visibility and significance to the query."
        />
      </div>
      <Cards card={cards} />
      <div className="container-ack md:px-0 px-5">
        <ComponentHead
          title="Platforms"
          sub="Social Engine Marketing"
          head="The Platforms stack for Social Engine Marketing can vary depending on the specific requirements of the application and the chosen modernization approach."
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
              processhead="Essential"
              processsub="Search Engine Marketing Essential"
              processdesc="SEM digital marketing makes your business more visible in search engines. And unlike traditional advertising tactics, internet search engine marketing connects your company with an extremely targeted audience segment."
              processimg="/assets/images/service/svg/eng1.png"
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

export default SemAgency;