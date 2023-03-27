import JobListingCareer from "@component/components/career/JobListingCareer";
import TopHeaderCareer from "@component/components/Career/TopHeaderCareer";
import WhyJoinUsCareer from "@component/components/Career/WhyJoinUsCareer";
import Footer from "@component/components/common/Footer";
import Header from "@component/components/common/Header";
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
