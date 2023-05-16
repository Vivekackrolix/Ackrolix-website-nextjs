import React from "react";
import Head from "next/head";
import Footer from "../components/Common/Footer";
import Header from "../components/Common/Header";
import ServiceBanner from "../components/Services/DetailPage/ServiceBanner";
import SoftDevTech from "./SoftwareDevelopment/SoftDevTech";
import SoftDevProccess from "./SoftwareDevelopment/SoftDevProccess";
import SoftDevWork from "./SoftwareDevelopment/SoftDevWork";
import SoftDevEnquiry from "./SoftwareDevelopment/SoftDevEnquiry";
import SoftDevCards from "./SoftwareDevelopment/SoftDevCards";
import Clients from "../components/Home/Clients";

const SoftwareDevelopmentCompany = () => {
  return (
    <div>
      <Head>
        Software Architect Company
      </Head>
      <Header />
      <div
        className=" bg-right"
        style={{
          backgroundImage: 'url("/assets/images/mainbackground.png ")',
        }}
      >
         <ServiceBanner 
          bannertitle="Unlocking Innovation Through Expert Software Architect Solutions"
          bannersubtext="Technology moves faster than ever, and you need to catch up. Reach measurably higher scalability, performance, and cost optimization thanks to resilient software architecture development."
          serviceimg="/assets/images/aboutusimg3.png"
          servicehead="A well-designed software architecture saves thousands of development hours"
          servicedesc1="We’ve seen it happen many times in our software engineering work for 200+ projects. Last client dropped server maintenance and operation costs by 300 times. Time to see what performance you can achieve."
          servicedesc2="Our software architects will help you establish a secure, flexible, and efficient software development process that meets your needs. Aa a well-structured software architecture yields substantial benefits by drastically reducing development time, resulting in significant cost savings equivalent to thousands of hours that would otherwise be expended during the development process."
        />
      </div>
      <SoftDevCards />
      <SoftDevTech />
      <SoftDevProccess />
      <SoftDevWork />
      {/* <Section /> */}
      <SoftDevEnquiry />
      <Clients />
      <Footer />
    </div>
  );
};

export default SoftwareDevelopmentCompany;