import Footer from "@component/components/common/Footer";
import Header from "@component/components/common/Header";
import Banner from "@component/components/moments/Banner";
import Gallery from "@component/components/moments/Gallery";
import React from "react";

const moments = () => {
  return (
    <>
      <Header />
      <Banner />
      <Gallery />
      <Footer />
    </>
  );
};

export default moments;
