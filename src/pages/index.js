import React from "react";
import Head from "next/head";
import Footer from "../components/common/Footer";
import Banner from "../components/home/Banner";
import Header from "../components/common/Header";
import About from "../components/home/About";
import Advisors from "../components/home/Advisors";
import Memories from "../components/home/Memories";
import Leaders from "../components/home/Leaders";
import Videos from "../components/home/Videos";
import Blogs from "../components/home/Blogs";
import Testimonial from "../components/home/Testimonials";
import Clients from "../components/home/Clients";
import Card from "../components/home/Card";
import OurServices from "../components/home/OurServices";
import Portfolio from "../components/home/Portfolio";
const index = () => {
  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
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
