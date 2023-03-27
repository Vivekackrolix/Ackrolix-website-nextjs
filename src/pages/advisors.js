import List from "../components/Advisors/List";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import Heading from "../components/common/Heading";
import Head from "next/head";
import React from "react";

const Advisors = () => {
  return (
    <div>
      {" "}
      <Header />
      <Head>
        <title>Advisors</title>
      </Head>
      <Heading
        titletext="Advisors"
        title="Our Advisors"
        subtext="Nunc convallis semper justo quis tempor. Praesent molestie, lorem sed imperdiet tempor, libero urna semper urna, facilisis vulputate velit arcu vitae mi. Donec ac nisi ex."
      />
      <List />
      <Footer />
    </div>
  );
};

export default Advisors;
