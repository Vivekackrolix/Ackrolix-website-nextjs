import List from "../components/Advisors/List";
import Footer from "../components/Common/Footer";
import Header from "../components/Common/Header";
import Heading from "../components/Common/Heading";
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
      <div
      className="pb-10 bg-right"
      style={{
        backgroundImage: 'url("/assets/images/mainbackground.png ")',
      }}
    >
      <Heading
        titletext="Advisors"
        title="Our Advisors"
        subtext="Nunc convallis semper justo quis tempor. Praesent molestie, lorem sed imperdiet tempor, libero urna semper urna, facilisis vulputate velit arcu vitae mi. Donec ac nisi ex."
      />

      </div>
      <List />
      <Footer />
    </div>
  );
};

export default Advisors;
