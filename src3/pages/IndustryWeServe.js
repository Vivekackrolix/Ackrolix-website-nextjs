import React from "react";
import Head from "next/head";
import Heading from "../components/Common/Heading";
import Header from "../components/Common/Header";
import Banner from "../components/Industry/Banner";
import ComponentHead from "../components/Common/ComponentHead";
import Card from "../components/Industry/Card";
import Band from "../components/Common/Band";
import Footer from "../components/Common/Footer";

const IndustryWeServe = () => {
  return (
    <>
      <div>
        <Head>
          <title> Industry </title>
        </Head>
        <Header />
        <Heading
          titletext="Industry"
          title="Industry We Serve"
          subtext="Nunc convallis semper justo quis tempor. Praesent molestie, lorem sed imperdiet tempor, libero urna semper urna, facilisis vulputate velit arcu vitae mi. Donec ac nisi ex. "
        />
        <Banner />
        <ComponentHead
          title="We Serve"
          head="Lorem Ipsum"
          sub="Lorem ipsum dolor sit amet consectetur. Leo tellus in maecenas tincidunt urna vulputate. Elit amet nam nulla "
        />
        <Card />
        <Band />
        <Footer />
      </div>
    </>
  );
};

export default IndustryWeServe;
