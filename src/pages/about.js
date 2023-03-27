import Banner from "../components/About/Banner";
import Card from "../components/About/Card";
import Section from "../components/About/Section";
import SectionTwo from "../components/About/SectionTwo";
import ValuesMissions from "../components/About/ValuesMissions";
import VideoSection from "../components/About/VideoSection";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import Clients from "../components/home/Clients";
import Head from "next/head";
import React from "react";

const About = () => {
  return (
    <div className="">
      <Head>
        <title>About Us</title>
      </Head>
      <Header />
      <Banner />
      <Section />
      <Card />
      <VideoSection />
      <ValuesMissions />
      <SectionTwo />
      <Clients />
      <Footer />
    </div>
  );
};

export default About;
