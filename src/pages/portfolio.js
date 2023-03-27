import React from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import PortfolioListing from "../components/Portfolio/PortfolioListing";
import PortfolioTopHeader from "../components/Portfolio/PortfolioTopHeader";
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
