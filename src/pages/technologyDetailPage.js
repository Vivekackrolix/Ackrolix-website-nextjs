import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import Advisors from "../components/technology/technologyDetail/Advisors";
import Band from "../components/common/Band";
import Banner from "../components/technology/technologyDetail/Banner";
import Section from "../components/technology/technologyDetail/Section";
import React from "react";
import ComponentHead from "../components/common/ComponentHead";
import Heading from "../components/common/Heading";

const TechnologyDetailPage = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Section />
      <ComponentHead
        title=" Advisors"
        sub="Lorem ipsum dolor sit amet consectetur. Leo tellus in maecenas
            tincidunt urna vulputate. Elit amet nam nulla"
        head="Our Advisors"
      />
      <Advisors />
      <Band />
      <Footer />
    </div>
  );
};

export default TechnologyDetailPage;
