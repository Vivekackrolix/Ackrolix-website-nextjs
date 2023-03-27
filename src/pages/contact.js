import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import FormSection from "../components/contact/FormSection";
import Location from "../components/contact/Location";
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
