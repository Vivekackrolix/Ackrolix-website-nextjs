import JobListingCareers from "../components/Career/JobListingCareers";
import TopHeaderCareer from "../components/Career/TopHeaderCareer";
import WhyJoinUsCareer from "../components/Career/WhyJoinUsCareer";
import Footer from "../components/Common/Footer";
import Header from "../components/Common/Header";
import Head from "next/head";
import React from "react";
const Career = () => {
  return (
    <div>
      <Head>
        <title> Career </title>
      </Head>
      <Header />
      <TopHeaderCareer />
      <WhyJoinUsCareer />
      <JobListingCareers />
      <Footer />
    </div>
  );
};

export default Career;
