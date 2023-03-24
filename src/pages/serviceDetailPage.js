import Footer from "@component/components/common/Footer";
import Header from "@component/components/common/Header";
import Banner from "@component/components/Services/DetailPage/Banner";
import Cards from "@component/components/Services/DetailPage/Cards";
import Enquiry from "@component/components/Services/DetailPage/Enquiry";
import Process from "@component/components/Services/DetailPage/Process";
import Section from "@component/components/Services/DetailPage/Section";
import Technology from "@component/components/Services/DetailPage/Technology";
import Work from "@component/components/Services/DetailPage/Work";
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
