import Footer from "../components/Common/Footer";
import Header from "../components/Common/Header";
import Banner from "../components/Services/DetailPage/Banner";
import Cards from "../components/Services/DetailPage/Cards";
import Enquiry from "../components/Services/DetailPage/Enquiry";
import Process from "../components/Services/DetailPage/Process";
import Section from "../components/Services/DetailPage/Section";
import Technology from "../components/Services/DetailPage/Technology";
import Work from "../components/Services/DetailPage/Work";
import React from "react";

const serviceDetailPage = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Cards />
      <Technology />
      <Process />
      <Work />
      <Section />
      <Enquiry />
      <Footer />
    </div>
  );
};

export default serviceDetailPage;
