import React from "react";
import Footer from '../components/Common/Footer'
import Header from "../components/Common/Header";
import ServiceBanner from "../components/Services/DetailPage/ServiceBanner";
import SoftDevTech from "./SoftwareDevelopment/SoftDevTech";
import SoftDevProccess from "./SoftwareDevelopment/SoftDevProccess";
import SoftDevWork from "./SoftwareDevelopment/SoftDevWork";
import SoftDevEnquiry from "./SoftwareDevelopment/SoftDevEnquiry";
import SoftDevCards from "./SoftwareDevelopment/SoftDevCards";
import SoftDevClients from "./SoftwareDevelopment/SoftDevClients";

const SoftwareDevelopmentCompany = () => {
  return (
    <div>
      <Header />
      <div
        className=" bg-right"
        style={{
          backgroundImage: 'url("/assets/images/mainbackground.png ")',
        }}
      >
         <ServiceBanner 
          bannertitle="Unlocking Innovation Through Expert Software Architect Solutions"
          bannersubtext="We bring your ideas to life and drive innovation through cutting-edge technology solutions. Our team of skilled developers is committed to delivering high-quality software products tailored to meet your specific needs and fuel your business growth."
          serviceimg="/assets/images/aboutusimg3.png"
          servicehead="Put your present in order so you can focus on scaling up for new users"
          servicedesc1="Popular apps often fall victim to their own success. They grow fast to satisfy business requirements, patched up ad-hoc by different teams. Eventually, they become sluggish and difficult to maintain, let alone extend and improve. App modernization can turn it all around."
          servicedesc2="The Ackrolix Innovations development teams have been called to the rescue of many legacy projects. In their course, our developers carried out tech stack migrations and consolidations, refactored codebases, designed and redesigned architectures, moved from a monolith to microservices, and performed architecture audits."
        />
      </div>
      <SoftDevCards />
      <SoftDevTech />
      <SoftDevProccess />
      <SoftDevWork />
      {/* <Section /> */}
      <SoftDevEnquiry />
      <SoftDevClients />
      <Footer />
    </div>
  );
};

export default SoftwareDevelopmentCompany;