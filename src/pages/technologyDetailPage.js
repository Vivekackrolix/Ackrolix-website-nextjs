import Footer from "@component/components/common/Footer";
import Header from "@component/components/common/Header";
import Advisors from "@component/components/technology/technologyDetail/Advisors";
import Band from "@component/components/common/Band";
import Banner from "@component/components/technology/technologyDetail/Banner";
import Section from "@component/components/technology/technologyDetail/Section";
import React from "react";

const TechnologyDetailPage = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Section />
      <Advisors/>
      <Band/>
      <Footer />
    </div>
  );
};

export default TechnologyDetailPage;
