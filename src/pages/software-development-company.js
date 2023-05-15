import React from "react";
import Footer from '../components/Common/Footer'
import Header from "../components/Common/Header";
import Banner from "../components/Services/DetailPage/Banner";
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
        <Banner />
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