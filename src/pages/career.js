import JobListingCareers from "../components/Career/JobListingCareers";
import TopHeaderCareer from "../components/Career/TopHeaderCareer";
import WhyJoinUsCareer from "../components/Career/WhyJoinUsCareer";
import Footer from "../components/Common/Footer";
import Header from "../components/Common/Header";
import Head from "next/head";
import React from "react";
import Heading from "../components/Common/Heading";
const Career = () => {
  return (
    <div>
      <Head>
        <title> Career </title>
      </Head>
      <Header />
      <Heading
        titletext="Career"
        title="Career "
        subtext="Nunc convallis semper justo quis tempor. Praesent molestie, lorem sed imperdiet tempor, libero urna semper urna, facilisis vulputate velit arcu vitae mi. Donec ac nisi ex."
      />
      <TopHeaderCareer />
      <WhyJoinUsCareer />
      <JobListingCareers />
      <Footer />
    </div>
  );
};

export default Career;
