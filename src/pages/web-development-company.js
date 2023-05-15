import Footer from "../components/Common/Footer";
import Header from "../components/Common/Header";
import Banner from "../components/Services/DetailPage/Banner";
import Cards from "../components/Services/DetailPage/Cards";
import Enquiry from "../components/Services/DetailPage/Enquiry";
import Process from "../components/Services/DetailPage/Process";
import Technology from "../components/Services/DetailPage/Technology";
import Work from "../components/Services/DetailPage/Work";
import React from "react";
import Clients from "../components/Home/Clients";

const webDevDetail = () => {
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
      <Cards />
      <Technology />
      <Process />
      <Work />
      <Enquiry />
      <Clients/>
      <Footer />
    </div>
  );
};

export default webDevDetail;
