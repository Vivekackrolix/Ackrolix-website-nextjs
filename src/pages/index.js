import React from "react";
import Head from "next/head";
import Footer from "../components/Common/Footer";
import Banner from "../components/Home/Banner";
import Header from "../components/Common/Header";
import About from "../components/Home/About";
import Advisors from "../components/Home/Advisors";
import Memories from "../components/Home/Memories";
import Leaders from "../components/Home/Leaders";
import Videos from "../components/Home/Videos";
import Blogs from "../components/Home/Blogs";
import Testimonial from "../components/Home/Testimonials";
import Clients from "../components/Home/Clients";
import Card from "../components/Home/Card";
import OurServices from "../components/Home/OurServices";
import Portfolio from "../components/Home/Portfolio";
import OurGroups from "../components/Home/OurGroups";
import BannerResponsive from "../components/Home/BannerResponsive";
const index = () => {
  return (
    <>
       <Head>
        <title>Advertising Agency in Gurgaon - Ackrolix</title>
        <meta
          name="description"
          content="Looking for the best advertising agency in Gurgaon? Look no further than Ackrolix! Our team of experts will help you achieve your marketing goals."
          />
         <link rel="canonical" href="https://www.ackrolix.com/"/>

          <meta property="og:title" content="Advertising Agency in Gurgaon - Ackrolix" />
          <meta
            property="og:description"
            content="Looking for the best advertising agency in Gurgaon? Look no further than Ackrolix! Our team of experts will help you achieve your marketing goals."
          />
           <meta
            property="og:url"
            content="https://www.ackrolix.com/"
          />
          <meta
            property="og:image"
            content="https://www.ackrolix.com/assets/images/logoack.png"
        />    
         <meta name="robots" 
        content="index,follow" />    
      </Head>
      <Header />
      <Banner />
      <BannerResponsive/>
      <About />
      <OurServices />
      <OurGroups/>
      <Advisors />
      <Memories />
      <Card />
      <Portfolio />
      <Leaders />
      <Videos />
      <Clients />
      <Blogs />
      <Testimonial />
      <Footer />
    </>
  );
};

export default index;
