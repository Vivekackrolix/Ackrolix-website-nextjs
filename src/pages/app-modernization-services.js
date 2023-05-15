import React from "react";
import Footer from '../components/Common/Footer'
import Header from "../components/Common/Header";
import Banner from "../components/Services/DetailPage/Banner";
import AppModTech from "./AppModernization/AppModTech";
import AppModProccess from "./AppModernization/AppModProccess";
import AppModWork from "./AppModernization/AppModWork";
import AppModEnquiry from "./AppModernization/AppModEnquiry";
import AppModCards from "./AppModernization/AppModCards";
import AppModClients from "./AppModernization/AppModClients";

const AppModernizationDetails = () => {
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
      <AppModCards />
      <AppModTech />
      <AppModProccess />
      <AppModWork />
      {/* <Section /> */}
      <AppModEnquiry />
      <AppModClients />
      <Footer />
    </div>
  );
};

export default AppModernizationDetails;