import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import Heading from "../components/common/Heading";
import Tabs from "../components/Services/Tabs";
import Head from "next/head";
import React from "react";

const Services = () => {
  return (
    <div>
      <Header />
      <Head>
        <title>Service</title>
      </Head>
      <Heading
        titletext="Services"
        title="Our Services "
        subtext="Nunc convallis semper justo quis tempor. Praesent molestie, lorem sed imperdiet tempor, libero urna semper urna, facilisis vulputate velit arcu vitae mi. Donec ac nisi ex."
      />
      <Tabs />
      <Footer />
    </div>
  );
};

export default Services;
