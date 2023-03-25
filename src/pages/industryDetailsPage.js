import React from "react";
import Head from "next/head";
import Heading from "@component/components/common/Heading";
import Header from "@component/components/common/Header";
import ComponentHead from "@component/components/common/ComponentHead";
import Card from "@component/components/industry/Card";
import Band from "@component/components/common/Band";
import Footer from "@component/components/common/Footer";
import Banner from "@component/components/industry/industryDetails/Banner";
import Advisors from "@component/components/common/Advisor";

const industryDetailsPage = () => {
  return (
    <>
      <div>
        <Head>
          <title> Industry </title>
        </Head>
        <Header />
        <Heading
          titletext="We Serve"
          title="HealthCare And Medical Website Design Company"
          subtext="Nunc convallis semper justo quis tempor. Praesent molestie, lorem sed imperdiet tempor, libero urna semper urna, facilisis vulputate velit arcu vitae mi. Donec ac nisi ex.  "
        />
        <Banner />
        <ComponentHead
          title="Sample"
          head="Work Sample"
          sub="Lorem ipsum dolor sit amet consectetur. Leo tellus in maecenas tincidunt urna vulputate. Elit amet nam nulla "
        />
        <Card />
        <ComponentHead
          title="Advisors"
          head="Our Advisors in This Industry"
          sub="Lorem ipsum dolor sit amet consectetur. Leo tellus in maecenas tincidunt urna vulputate. Elit amet nam nulla "
        />
        <Advisors />
        <Band />
        <Footer />
      </div>
    </>
  );
};

export default industryDetailsPage;
