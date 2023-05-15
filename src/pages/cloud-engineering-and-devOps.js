import React from "react";
import Footer from '../components/Common/Footer'
import Header from "../components/Common/Header";
import Banner from "../components/Services/DetailPage/Banner";
import CldEngDevOpsTech from "./CloudEngineeringDevOps/CldEngDevOpsTech";
import CldEngDevOpsProccess from "./CloudEngineeringDevOps/CldEngDevOpsProccess";
import CldEngDevOpsWork from "./CloudEngineeringDevOps/CldEngDevOpsWork";
import CldEngDevOpsEnquiry from "./CloudEngineeringDevOps/CldEngDevOpsEnquiry";
import CldEngDevOpsCards from "./CloudEngineeringDevOps/CldEngDevOpsCards";
import CldEngDevOpsClients from "./CloudEngineeringDevOps/CldEngDevOpsClients";

const CloudEngineeringAndDevOps = () => {
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
      <CldEngDevOpsCards />
      {/* <CldEngDevOpsTech /> */}
      <CldEngDevOpsProccess />
      <CldEngDevOpsWork />
      {/* <Section /> */}
      <CldEngDevOpsEnquiry />
      <CldEngDevOpsClients />
      <Footer />
    </div>
  );
};

export default CloudEngineeringAndDevOps;