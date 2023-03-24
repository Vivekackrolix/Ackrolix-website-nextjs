import Header from "@component/components/common/Header";
import Head from "next/head";
import React from "react";
import TopHeaderCareer from "@component/components/Career/TopHeaderCareer";
import WhyJoinUsCareer from "@component/components/Career/WhyJoinUsCareer";
import JobListingCareer from "@component/components/Career/JobListingCareer";
import Footer from "@component/components/common/Footer";
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
