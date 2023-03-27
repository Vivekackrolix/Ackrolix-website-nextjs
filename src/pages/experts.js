import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import Heading from "../components/common/Heading";
import AllExperts from "../components/expert/AllExperts";
import Head from "next/head";
import React from "react";

const Experts = () => {
  return (
    <div>
      <Header />
      <Head>
        <title>Experts</title>
      </Head>
      <Heading
        titletext="Experts"
        title="Our Experts "
        subtext="Nunc convallis semper justo quis tempor. Praesent molestie, lorem sed imperdiet tempor, libero urna semper urna, facilisis vulputate velit arcu vitae mi. Donec ac nisi ex."
      />
      <AllExperts />
      <Footer />
    </div>
  );
};

export default Experts;
