import Banner from "@component/components/About/Banner";
import Card from "@component/components/About/Card";
import Section from "@component/components/About/Section";
import SectionTwo from "@component/components/About/SectionTwo";
import ValuesMissions from "@component/components/About/ValuesMissions";
import VideoSection from "@component/components/About/VideoSection";
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
