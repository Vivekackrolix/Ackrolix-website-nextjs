import Footer from "@component/components/common/Footer";
import Header from "@component/components/common/Header";
import FormSection from "@component/components/contact/FormSection";
import Location from "@component/components/contact/Location";
import Head from "next/head";
import React from "react";

const contact = () => {
  return (
    <>
      <Header />
      <Head>
        <title>Contact</title>
      </Head>
      <FormSection />
      <Location />
      <Footer />
    </>
  );
};

export default contact;
