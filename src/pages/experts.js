import Footer from "../components/Common/Footer";
import Header from "../components/Common/Header";
import Heading from "../components/Common/Heading";
import AllExperts from "../components/Expert/AllExperts";
import Head from "next/head";
import React from "react";

const Experts = () => {
  return (
    <div>
      <Header />
      <Head>
        <title>Experts</title>
      </Head>
      <div
      className="pb-10 bg-right"
      style={{
        backgroundImage: 'url("/assets/images/mainbackground.png ")',
      }}
    >
      <Heading
        titletext="Experts"
        title="Our Experts "
        subtext="Nunc convallis semper justo quis tempor. Praesent molestie, lorem sed imperdiet tempor, libero urna semper urna, facilisis vulputate velit arcu vitae mi. Donec ac nisi ex."
      />

      </div>
      <AllExperts />
      <Footer />
    </div>
  );
};

export default Experts;
