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
import CaseStudies from "../components/Services/DetailPage/CaseStudies";
const SeoAgency = () => {
  const processes = [
    {
      id: "1",
      name: "Experienced",
      desc: "We are pleased to have completed over 100 extraordinarily fruitful projects in a variety of industries, illustrating our unwavering dedication to excellence and innovation. These accomplishments are a reflection of our team's exceptional skill, unwavering commitment, and unrelenting quest for excellence. We enthusiastically anticipate starting new endeavours and reaching even larger milestones as we move forward."
    },
    {
      id: "2",
      name: "Customization",
      desc: "Our items are painstakingly made and methodically planned to precisely meet and surpass your particular needs. Our committed team is ready to deliver unmatched solutions that connect with your audience and propel remarkable success for your business, whether you're looking for exceptional web design and advanced e-commerce solutions or seamless mobile app development and effective digital marketing strategies."
    },
    {
      id: "3",
      name: "24/7 Support",
      desc: "Our extremely knowledgeable and devoted expert team is available to provide round-the-clock support, ensuring that your website runs without a hitch at all times. We take great pleasure in offering excellent support and swiftly and effectively resolving any problems. Day or night, you can rely on us for consistent service and a hassle-free website experience."
    },
    {
      id: "4",
      name: "Affordable Prices",
      desc: "We ensure that our customers get the most value for their hard-earned money by always offering home appliance pricing that are competitive with the market. We are the go-to source for all of your home appliance needs because of our dedication to affordability and the unwavering quality and dependability of our goods. Discover the ease of buying home appliances without worrying about costs — we've got you covered!",
    },
    {
      id: "5",
      name: "Customer Trust",
      desc: "We receive incredibly helpful references for 90% of our booming business, which is a testimonial to the exceptional quality of service we continuously provide. Customers are becoming our most ardent brand promoters, telling others about the exceptional interactions they've had with us. We are incredibly appreciative of our loyal customers' support, and we anxiously anticipate developing new relationships through their sincere referrals.",
    },
    {
      id: "6",
      name: "Milestone Setting",
      desc: "We take great delight in showing our unwavering commitment to excellence and innovation, having completed over 100 incredibly successful projects in a variety of industries. As we reflect on our experience, we are inspired and eager to take on new challenges and reach even bigger milestones in the future. With every milestone we reach,we solidify our position as a dominant force in the market, prepared to take on the upcoming challenges with tenacity.",
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
      maintitle: "Excellence",
      subtitle: "Trusted, Impactful SEO Services in India",
    },
    {
      id: 2,
      icon: "01",
      title: "On-page SEO",
      para: "Transform your content into enchanting spells with a blend of keywords, meta tags, and user-friendly design. Our magical touch in search engine optimization brings every page to life, attracting visitors and elevating rankings.",
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
      title: "Off-page SEO",
      para: "Ascend to new heights in your digital journey with quality backlinks, social media prowess, and referrals. Our off-page SEO strategies captivate search engines, granting your website the reputation it truly deserves.",
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
      title: "Content SEO",
      para: "Harness the power of effective SEO techniques to ensure your content dominates the rankings. From compelling blog posts to a robust website, our wizardry with words attracts both users and algorithms. Watch your online presence soar to new heights of visibility and success with Ackrolix.",
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
      title: "Keyword Research",
      para: "Embark on a journey into scientific trends and user behavior with our clever wizardry. We craft magic potions for highlights, allowing your brand to shine in the digital realm, captivate your target audience, and stand out from the competition. Embrace the magic of Ackrolix keyword research, where every word is a stepping stone to digital success.",
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
      title: "Technical SEO",
      para: "Unleash the power of SEO magic through thorough site analysis, expert link building, and negative optimization. This magical blend enchants search engines, enhancing your website's performance for both users and algorithms. Trust Ackrolix's expertise to deliver superior quality, enhanced visibility, and a remarkable customer experience that outshines your competitors.",
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
      title: "Guest Blogging",
      para: "Extend the reach of your enchantment with insightful site analysis, strategic link building, and expert optimization. Ackrolix's SEO magic intertwines with search engines, enhancing your website's performance for both users and algorithms. Rely on our expertise to deliver superior quality, heightened visibility, and an unparalleled customer experience that outshines your competitors.",
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
        <title>Ackrolix: seo company in India</title>
        <meta name="description"
         content="We are the number one SEO Company in India that offers assured first-page rankings. Our data-driven proven SEO methods are unique. Get a free Audit Today." />
      <link rel="canonical" href="https://www.ackrolix.com/seo-company-in-India"/>
        <meta property="og:title" 
        content="Ackrolix: seo company in India" />
        <meta
          property="og:description"
          content="We are the number one SEO Company in India that offers assured first-page rankings. Our data-driven proven SEO methods are unique. Get a free Audit Today."
        />
        <meta
          property="og:url"
          content="https://www.ackrolix.com/seo-company-in-India"
        />
        <meta
          property="og:image"
          content="https://www.ackrolix.com/assets/images/service/svg/sea.png"
        />   
         <meta name="robots" 
        content="index,follow" />  

<script type="application/ld+json">
{`{
  "@context": "http://schema.org",
  "@type": "WebPage",
  "@id": "https://www.ackrolix.com/seo-company-gurgaon#webpage",
  "url": "https://www.ackrolix.com/seo-company-gurgaon",
  "inLanguage": "en - US",
  "name": "SEO Services ",
  "description": "We are the number one SEO Company in India that offers assured first-page rankings. Our data-driven proven SEO methods are unique. Get a free Audit Today.",
  "isPartOf": {
    "@id": "#website"
  },
  "about": [
    {
      "@type": "Thing",
      "name": "Ackrolix",
      "sameAs": "https://www.ackrolix.com/"
    }
  ],
  "mentions": [
    {
      "@type": "Thing",
      "name": "Ackrolix",
      "sameAs": "https://www.ackrolix.com/"
    }
  ]}`
}
</script>



      </Head>
      <Header />
      <div
        className=" bg-right"
        style={{
          backgroundImage: 'url("/assets/images/mainbackground.png ")',
        }}
      >
        <Banner
          bannertitle="Get High SEO Rankings with Ackrolix: Your Trusted SEO Agency in India"
          bannersubtext="At Ackrolix, our team of SEO experts stands out in the saturated market of SEO agencies. Going beyond mere search engine optimization, we prioritize elevating conversion rates, increasing revenues, and maximizing client benefits—all without increasing costs. Recognizing the pivotal role SEO and social media play in business growth, we understand that over 80% of internet searches influence success. In today's fiercely competitive business landscape, innovation isn't just a choice; it's a necessity for survival."
          serviceimg="/assets/images/service/svg/sea.png"
          serviceimgAlt="seo services company"
          servicehead="Amplify Your Brand's Visibility with Ackrolix's Top-Tier SEO Solutions"
          servicedesc1="We guarantee commercial success and maximise your ranking with our comprehensive knowledge by building a strong online presence that connects with the digital world. With brilliant performance across devices and platforms, our creative abilities translate into successful websites and enticing user experiences that captivate visitors with intuitive navigation and beautiful design. Search engines may detect the significance and authority of your online presence thanks to the strategically constructed high-quality, authoritative links that Ackrolix creates."
          servicedesc2="Select Ackrolix as your go-to SEO company in India, where creativity and experience merge to propel your company to new heights. Our all-encompassing SEO services are designed to increase conversions, profits, and customer benefits while building a strong online presence that appeals to your target market. As a top provider of SEO services in India."
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
            <ProccessHead
              processhead="Why Choose Us"
              processsub="Why Choose Us?"
              processdesc="Choose Ackrolix as your SEO Company in India to unlock the true potential of your online presence. With rich experience and expertise in multiple industries, we create SEO strategies for your specific goals."
              processimg="/assets/images/service/svg/sea1.png"
              proocessalt="seo services"
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

export default SeoAgency;