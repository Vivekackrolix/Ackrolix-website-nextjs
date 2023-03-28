// import Banner from "@component/components/About/Banner";
// import Card from "@component/components/About/Card";
// import Section from "@component/components/About/Section";
// import SectionTwo from "@component/components/About/SectionTwo";
// import ValuesMissions from "@component/components/About/ValuesMissions";
// import VideoSection from "@component/components/About/VideoSection";
// import Footer from "@component/components/Common/Footer";
// import Header from "@component/components/Common/Header";
// import Clients from "@component/components/Home/Clients";
import Banner from "../components/About/Banner";
import Card from "../components/About/Card";
import Section from "../components/About/Section";
import SectionTwo from "../components/About/SectionTwo";
import ValuesMissions from "../components/About/ValuesMissions";
import VideoSection from "../components/About/VideoSection";
import Footer from "../components/Common/Footer";
import Header from "../components/Common/Header";
import Clients from "../components/Home/Clients";
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
