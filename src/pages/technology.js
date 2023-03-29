import Footer from "../components/Common/Footer";
import Header from "../components/Common/Header";
import Backend from "../components/Technology/Backend";
import Section from "../components/Technology/Section";

import Head from "next/head";
import React from "react";
import Heading from "../components/Common/Heading";

const Technology = () => {
  return (
    <div>
      <Header />
      <Head>
        <title>Technology</title>
      </Head>
      <Heading
        titletext="Technologies"
        title="Technologies "
        subtext="Nunc convallis semper justo quis tempor. Praesent molestie, lorem sed imperdiet tempor, libero urna semper urna, facilisis vulputate velit arcu vitae mi. Donec ac nisi ex."
      />
      <Section />
      <Backend />
      <Footer />
    </div>
  );
};

export default Technology;
