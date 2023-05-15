import React from "react";
import Footer from '../components/Common/Footer'
import Header from "../components/Common/Header";
import Banner from "../components/Services/DetailPage/Banner";
import EcoDevTech from "./EcommerceDevelopment/EcoDevTech";
import EcoDevProccess from "./EcommerceDevelopment/EcoDevProccess";
import EcoDevWork from "./EcommerceDevelopment/EcoDevWork";
import EcoDevEnquiry from "./EcommerceDevelopment/EcoDevEnquiry";
import EcoDevCards from "./EcommerceDevelopment/EcoDevCards";
import EcoDevClients from "./EcommerceDevelopment/EcoDevClients";

const EcommerceDevelopmentCompany = () => {
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
      <EcoDevCards />
      <EcoDevTech />
      <EcoDevProccess />
      <EcoDevWork />
      {/* <Section /> */}
      <EcoDevEnquiry />
      <EcoDevClients />
      <Footer />
    </div>
  );
};

export default EcommerceDevelopmentCompany;