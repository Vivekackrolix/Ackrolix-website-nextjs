import React from "react";
import Footer from "@component/components/common/Footer";
import Banner from "@component/components/home/Banner";
import Header from "@component/components/common/Header";
import About from "@component/components/home/About";
import Advisors from "@component/components/home/Advisors";
import Memories from "@component/components/home/Memories";
import Leaders from "@component/components/home/Leaders";
import Videos from "@component/components/home/Videos";
import Blogs from "@component/components/home/Blogs";
import Testimonial from "@component/components/home/Testimonials";
import Clients from "@component/components/home/Clients";
import Card from "@component/components/home/Card";
import OurServices from "@component/components/home/OurServices";
import Portfolio from "@component/components/home/Portfolio";
const index = () => {
  return (
    <>
      <Header />
      <div className="pt-[20px]">
        <Banner />
        <About />
        <OurServices />
        <Portfolio />
        <Advisors />
        <Memories />
        <Card />
        <Leaders />
        <Videos />
        <Clients />
        <Blogs />
        <Testimonial />
        <Footer />
      </div>
    </>
  );
};

export default index;
