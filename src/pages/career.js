import JobListingCareer from "../components/career/JobListingCareer";
import TopHeaderCareer from "../components/Career/TopHeaderCareer";
import WhyJoinUsCareer from "../components/Career/WhyJoinUsCareer";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import Head from "next/head";
import React from "react";
const career = () => {
  return (
    <div>
      <Head>
        <title> Career </title>
      </Head>
      <Header />
      <TopHeaderCareer />
      <WhyJoinUsCareer />
      <JobListingCareer />
      <Footer />
    </div>
  );
};

export default career;
