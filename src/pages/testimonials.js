import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import List from "../components/testimonial/List";
import Head from "next/head";
import React from "react";

const Testimonials = () => {
  return (
    <div>
      <Header />
      <Head>
        <title>Testimonial</title>
      </Head>
      <List />
      <Footer />
    </div>
  );
};

export default Testimonials;
