import Footer from "@component/components/common/Footer";
import Header from "@component/components/common/Header";
import Banner from "@component/components/Services/detailPage/Banner";
import Cards from "@component/components/Services/detailPage/Cards";
import Enquiry from "@component/components/Services/detailPage/Enquiry";
import Process from "@component/components/Services/detailPage/Process";
import Section from "@component/components/Services/detailPage/Section";
import Technology from "@component/components/Services/detailPage/Technology";
import Work from "@component/components/Services/detailPage/Work";
import React from "react";

const serviceDetailPage = () => {
  return (
    <div>
      <Header />
     <Banner/>
     <Cards/>
     <Technology/>
     <Process/>
     <Work/>
     <Section/>
     <Enquiry/>
      <Footer />
    </div>
  );
};

export default serviceDetailPage;
