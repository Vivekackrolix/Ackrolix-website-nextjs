import Footer from "../components/Common/Footer";
import Header from "../components/Common/Header";
import Advisors from "../components/Technology/TechnologyDetail/Advisors";
import Band from "../components/Common/Band";
import Banner from "../components/Technology/TechnologyDetail/Banner";
import Section from "../components/Technology/TechnologyDetail/Section";
import React from "react";
import ComponentHead from "../components/Common/ComponentHead";
import Heading from "../components/Common/Heading";

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
