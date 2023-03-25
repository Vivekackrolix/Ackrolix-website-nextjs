import Banner from "@component/components/about/Banner";
import Card from "@component/components/about/Card";
import Section from "@component/components/about/Section";
import SectionTwo from "@component/components/about/SectionTwo";
import ValuesMissions from "@component/components/about/ValuesMissions";
import VideoSection from "@component/components/about/VideoSection";
import Footer from "@component/components/common/Footer";
import Header from "@component/components/common/Header";
import Clients from "@component/components/home/Clients";
import React from "react";

const About = () => {
  return (
    <div className="">
      <Header />
      <Banner />
      <Section/>
      <Card/>
      <VideoSection/>
      <ValuesMissions/>
      <SectionTwo/>
      <Clients/>
      <Footer />
    </div>
  );
};

export default About;
