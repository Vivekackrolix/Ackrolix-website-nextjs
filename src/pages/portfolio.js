import React from "react";
import Header from "@component/components/common/Header";
import Footer from "@component/components/common/Footer";
import PortfolioListing from "@component/components/portfolio/PortfolioListing";
import PortfolioTopHeader from "@component/components/portfolio/PortfolioTopHeader";
import Head from "next/head";
function portfolio() {
  return (
    <>
      <Head>
        <title> Portfolio </title>
      </Head>
      <Header />
      <PortfolioTopHeader />
      <PortfolioListing />
      <Footer />
    </>
  );
}
export default portfolio;
