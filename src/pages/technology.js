import Footer from "../components/Common/Footer";
import Header from "../components/Common/Header";
import Backend from "../components/Technology/Backend";
import Heading from "../components/Technology/Heading";
import Section from "../components/Technology/Section";

import Head from "next/head";
import React from "react";

const Technology = () => {
  return (
    <div>
      <Header />
      <Head>
        <title>Technology</title>
      </Head>
      <Heading />
      <Section />
      <Backend />
      <Footer />
    </div>
  );
};

export default Technology;
