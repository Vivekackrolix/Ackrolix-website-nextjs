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
        <title> Career | Ackrolix </title>
        <meta
          name="description"
          content="Explore a fulfilling career journey with Ackrolix - Discover opportunities and growth paths. Elevate your career with Ackrolix today!"
        />
      </Head>
      <Header />
      <Heading
        titletext="Career"
        title="Career "
        subtext="Get ready to solve challenging problems and turn your ideas into reality with Ackrolix Innovations. At Ackrolix, we’re empowered, supported, and inspired to make a difference every day."
      />
      <TopHeaderCareer />
      <WhyJoinUsCareer />
      <JobListingCareers />
      <Footer />
    </div>
  );
};

export default Career;
