import Link from "next/link";
import React from "react";

const tabs = [
  {
    id: 1,
    text: "Product Conceptualization",
  },

  {
    id: 2,
    text: "Product Development",
  },
  {
    id: 3,
    text: "Digital Modernization",
  },
];

const productData = [
  {
    id: 1,
    image: "/assets/images/service/user-research.png",
    name: "User Research",
    desc: "Unlock User Secrets: Uncover hidden motivations, understand pain points, and extract actionable insights with our in-depth UX research methods. Schedule a User Research Consultation.",
    link: "/user-research-company-india",
  },
  {
    id: 2,
    image: "/assets/images/service/prototyping.png",
    name: "Prototyping",
    desc: "Test & Tweak to Win: Craft rapid prototypes to gather feedback, iterate quickly, and land on a design users love. Get Your Prototype Started Today",
    link: "/prototyping-design-company-india",
  },
  {
    id: 3,
    image: "/assets/images/service/ui-strategy.png",
    name: "UX Design",
    desc: "Frictionless Flow, Effortless Delight: Build intuitive user journeys, optimize every interaction, and create a seamless user experience (UX) that keeps users coming back. Experience the UX Design Difference.",
    link: "/ux-design-company-india",
  },
  {
    id: 4,
    image: "/assets/images/service/ui-designing.png",
    name: "UI Designing",
    desc: "Pixel-Perfect Beauty, Conversion Powerhouse: Design stunning and usable interfaces (UIs) that guide users effortlessly towards your goals. Boost Conversions with a UI Makeover.",
    link: "ui-designing-company-india",
  },
  {
    id: 5,
    image: "/assets/images/service/usability-testing.png",
    name: "Usability Testing",
    desc: "Watch & Learn, Refine & Repeat: We closely observe real users interacting with your product, identify usability issues, and iterate designs for ultimate customer satisfaction. Contact Us For a Free Usability Testing (UAT) Audit.",
    link: "/usability-testing-company-india",
  },
  {
    id: 6,
    image: "/assets/images/service/data-visualisation.png",
    name: "Data Visualisation",
    desc: "Turn Data into Decisions: Transform data silos into clear, actionable insights, empowering more informed decision-making. Unlock Your Data-Driven Growth Now.",
    link: "/data-visualisation-company-india",
  },
];

const serviceData = [
  {
    id: 1,
    image: "/assets/images/service/digital-product-design.png",
    name: "Digital Product Design",
    desc: "Design for Delight, Craft for Conversion: Our experts go beyond pixels to create beautiful, intuitive interfaces that users love and businesses grow on. Experience the difference today!",
    link: "/digital-product-design-company-india",
  },
  {
    id: 2,
    image: "/assets/images/service/web-development.png",
    name: "Web Development",
    desc: "Your Vision, Our Expertise: Build powerful web applications/web apps, from custom web design to robust backend development. We've helped 30+ startups soar and 150+ global brands evolve. Let's discuss your web ambitions.",
    link: "/website-development-company-india",
  },
  {
    id: 3,
    image: "/assets/images/service/app-modernisation.png",
    name: "App Modernization",
    desc: "Refresh & Recharge Your Apps: Breathe new life into your existing mobile and web apps. Enhance performance, upgrade user experience, and unlock future growth with our expert app modernization solutions. Get a Free App Modernization Audit today!",
    link: "/app-modernization-company-india",
  },
  {
    id: 4,
    image: "/assets/images/service/software-development.png",
    name: "Software Development",
    desc: "Code Your Vision, Build Your Future: From custom software solutions to enterprise integrations, we build the tools that empower your business to innovate and scale. Tell us your software dreams.",
    link: "/software-development-company-india",
  },
  {
    id: 5,
    image: "/assets/images/service/ecommerce-development.png",
    name: "Ecommerce Development",
    desc: "Convert Clicks into Customers: Create seamless online stores that captivate shoppers and drive continuous sales. We design and develop platforms that boost conversions and grow your brand’s online presence. Get Your Ecommerce Development Started.",
    link: "/ecommerce-developement-company-india",
  },
  {
    id: 6,
    image: "/assets/images/service/devOps.png",
    name: "Cloud Engineering & DevOps",
    desc: "Cloud Agility, Streamlined Operations: Leverage the power of the cloud with our agile cloud engineering and DevOps services. Optimize costs, automate processes, and gain a competitive edge. Talk to our Cloud Architects Today.",
    link: "/cloud-app-development-company-india",
  },
];

const DigitalModernization = [
  {
    id: 1,
    image: "/assets/images/service/DigitalMarketingStrategy.png",
    name: "Digital Marketing Strategy",
    desc: "Unleash Digital Profits: Stop guessing and start growing. We build data-driven marketing plans that align with your goals, engage your audience, and drive profitable results. Get your Free Marketing Strategy Blueprint now.",
    link: "/digital-marketing-company-india",
  },
  {
    id: 2,
    image: "/assets/images/service/SearchEngineOptimization.png",
    name: "Search Engine Optimization (SEO)",
    desc: "Own the Search Engine Throne: Climb up to the charts of Google’s SERPs and attract organic traffic. Our SEO experts optimize your website and content, so customers can find you first. Boost Your Organic Traffic Today.",
    link: "/seo-company-india",
  }, {
    id: 3,
    image: "/assets/images/service/SearchEngineMarketing.png",
    name: "Search Engine Marketing (SEM)",
    desc: "Turn Pay into Results: Get real ROI from online ads. We manage your SEM campaigns to bring in qualified leads at the right price. Maximize Your Ad Spend with Expert SEM.",
    link: "/sem-company-india",
  }, {
    id: 4,
    image: "/assets/images/service/SocialMediaMarketing.png",
    name: "Social Media Marketing (SMM)",
    desc: "Begin Conversations, Supercharge Growth: Build a buzzing online community. We create engaging content and manage your social media presence to win hearts and convert fans. Get More Followers & Brand Advocates.",
    link: "/social-media-marketing-company-india",
  }, {
    id: 5,
    image: "/assets/images/service/PublicRelation.png",
    name: "Public Relations (PR)",
    desc: "Write Your Story, Value Your Voice: Become a media darling. We build positive media relationships and craft compelling narratives that elevate your brand image. Increase Your Brand Reputation & Trust.",
    link: "/pr-agency-india",
  }, {
    id: 6,
    image: "/assets/images/service/MediaBuyingandPlanning.png",
    name: "Media Buying and Planning",
    desc: "Reach the Right Audience, Every Time: Spend smarter, not harder. We target your ideal audience across platforms, track ad performance, and optimize your budget for maximum impact. Reach Your Dream Customers Efficiently.",
    link: "/media-buying-company-india",
  },

]
const Tabs = () => {
  const [select, setSelect] = React.useState(2);

  return (
    <div className="container-ack md:px-0 px-5">
      <div>
        <div className="flex justify-center md:space-x-3 space-x-2 cursor-pointer">
          {tabs.map((item, index) => (
            <div
              onClick={() => setSelect(item.id)}
              className="group py-10"
              key={index}
            >
              <div
                className={` md:px-12 px-3 py-2 rounded-md ${select === item.id
                  ? "bg-secondary text-white border-2 "
                  : "   border-2 border-black/90"
                  }`}
              >
                {item.text}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="">
        {select === 1 ? (
          <>
            <div className="grid md:grid-cols-3 gap-1">
              {productData.map((item, index) => (
                <div className="service-card" key={index}>
                  <div>
                    <div className="group p-6 " key="id">
                      <div className="sservice-content relative text-center  flex flex-col justify-between border-2 border-[#F6F8F9] duration duration-200 group-hover:-translate-y-2  hover:drop-shadow-[0px_0px_20px#f7ce4680] hover:bg-[#F6F8F9]/40 hover:border-2 rounded-xl md:h-[28rem] ">
                        <div className=" ">
                          <img
                            src={item.image}
                            alt=""
                            className="  rounded-lg  "
                          />
                        </div>

                        <h2 className="font-semibold text-lg pb-2 pt-5 text-black text-center">
                          {item.name}
                        </h2>

                        <p className="text-black/50 group-hover:text-black  pb-4  text-center px-3 text-sm ">
                          {item.desc}
                        </p>

                        <div className="pb-5">
                          <Link href={item.link}>
                            <button className="text-primary font-semibold py-2 text-sm border-b-2 group-hover:border-primary group-hover:border-b-2">
                              Know More
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : select === 2 ? (
          <>
            <div className="grid md:grid-cols-3 gap-1">
              {serviceData.map((item, index) => (
                <div className="service-card" key={index}>
                  <div>
                    <div className="group p-6 md:h-[33rem]" key="id">
                      <div className="service-content relative text-center  flex flex-col justify-between  border-2 border-[#F6F8F9] duration duration-200 group-hover:-translate-y-2  hover:drop-shadow-[0px_0px_20px#f7ce4680] hover:bg-[#F6F8F9]/40 hover:border-2 rounded-xl md:h-[26rem]">
                        <div className=" ">
                          <img
                            src={item.image}
                            alt=""
                            className="  rounded-lg  "
                          />
                        </div>

                        <h2 className="font-semibold text-lg pb-2 pt-5 text-black text-center">
                          {item.name}
                        </h2>

                        <p className="text-black/50 group-hover:text-black pb-4  text-center px-3 text-sm ">
                          {item.desc}
                        </p>

                        <div className="pb-5">
                          <Link href={item.link}>
                            <button className="text-primary font-semibold py-2 text-sm border-b-2 group-hover:border-primary group-hover:border-b-2">
                              Know More
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            <div className="grid md:grid-cols-3 gap-1 ">
              {DigitalModernization.map((item, index) => (
                <div className="service-card" key={index}>
                  <div>
                    <div className="group p-6 md:h-[39rem]" key="id">
                      <div className="service-content flex flex-col justify-between relative text-center  border-2 border-[#F6F8F9] duration duration-200 group-hover:-translate-y-2  hover:drop-shadow-[0px_0px_20px#f7ce4680] hover:bg-[#F6F8F9]/40 hover:border-2 rounded-xl ">
                        <div className=" ">
                          <img
                            src={item.image}
                            alt=""
                            className="  rounded-lg  "
                          />
                        </div>

                        <h2 className="font-semibold text-lg pb-2 pt-5 text-black text-center">
                          {item.name}
                        </h2>

                        <p className="text-black/50 group-hover:text-black pb-4  text-center px-3 text-sm ">
                          {item.desc}
                        </p>

                        <div className="pb-5">
                          <Link href={item.link}>
                            <button className="text-primary font-semibold py-2 text-sm border-b-2 group-hover:border-primary group-hover:border-b-2">
                              Know More
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Tabs;
