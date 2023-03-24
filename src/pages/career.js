import Header from "@component/components/common/Header";
import Head from "next/head";
import React from "react";
import TopHeaderCareer from "@component/components/Career/TopHeaderCareer";
import WhyJoinUsCareer from "@component/components/Career/WhyJoinUsCareer";

const career = () => {
  return (
    <div>
      <Head>
        <title> Career </title>
      </Head>
      <Header />
      <TopHeaderCareer />
      <WhyJoinUsCareer />
    </div>
  );
};

export default career;
