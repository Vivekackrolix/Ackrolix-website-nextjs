import Footer from "../components/Common/Footer";
import Header from "../components/Common/Header";
import Banner from "../components/Services/detailPage/Banner";
import Cards from "../components/Services/detailPage/Cards";
import Enquiry from "../components/Services/detailPage/Enquiry";
import Process from "../components/Services/detailPage/Process";
import Section from "../components/Services/detailPage/Section";
import Technology from "../components/Services/detailPage/Technology";
import Work from "../components/Services/detailPage/Work";
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
