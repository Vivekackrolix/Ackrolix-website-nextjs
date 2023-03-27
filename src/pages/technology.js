import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import Backend from "../components/technology/Backend";
import Heading from "../components/technology/Heading";
import Section from "../components/technology/Section";

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
