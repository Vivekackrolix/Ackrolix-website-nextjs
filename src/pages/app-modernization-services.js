import React from "react";
import Footer from '../components/Common/Footer'
import Header from "../components/Common/Header";
import ServiceBanner from "../components/Services/DetailPage/ServiceBanner";
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
        <ServiceBanner 
          bannertitle="Make your systems efficient & scalable with our app modernization expertise"
          bannersubtext="Get your app back on track for growth with our practice-driven app modernization skills.
We provide full-scope app modernization services you can start using quickly to fix, boost, and revamp your systems with teams that have worked for over 160 companies.
"
          serviceimg="/assets/images/aboutusimg3.png"
          servicehead="Put your present in order so you can focus on scaling up for new users"
          servicedesc1="Popular apps often fall victim to their own success. They grow fast to satisfy business requirements, patched up ad-hoc by different teams. Eventually, they become sluggish and difficult to maintain, let alone extend and improve. App modernization can turn it all around."
          servicedesc2="The Ackrolix Innovations development teams have been called to the rescue of many legacy projects. In their course, our developers carried out tech stack migrations and consolidations, refactored codebases, designed and redesigned architectures, moved from a monolith to microservices, and performed architecture audits."
        />
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