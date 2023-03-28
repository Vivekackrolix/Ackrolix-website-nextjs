import React from "react";
import Header from "../components/Common/Header";
import Footer from "../components/Common/Footer";
import PortfolioListing from "../components/Portfolio/PortfolioListing";
import Head from "next/head";
import Heading from "../components/Common/Heading";
function portfolio() {
  return (
    <>
      <Head>
        <title> Portfolio </title>
      </Head>
      <Header />
      <Heading
        titletext="Portfolio"
        title="Portfolio "
        subtext="Nunc convallis semper justo quis tempor. Praesent molestie, lorem sed imperdiet tempor, libero urna semper urna, facilisis vulputate velit arcu vitae mi. Donec ac nisi ex."
      />
    
      <PortfolioListing />
      <Footer />
    </>
  );
}
export default portfolio;
