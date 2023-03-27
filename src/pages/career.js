import Header from "@component/components/common/Header";
import Head from "next/head";
import React from "react";
import WhyJoinUsCareer from "@component/components/career/WhyJoinUsCareer";
import JobListingCareer from "@component/components/career/JobListingCareer";
import Footer from "@component/components/common/Footer";
import TopHeaderCareer from "@component/components/Career/TopHeaderCareer";
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
