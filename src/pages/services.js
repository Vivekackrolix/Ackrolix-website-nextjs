import Footer from "@component/components/common/Footer";
import Header from "@component/components/common/Header";
import Heading from "@component/components/common/Heading";
import Tabs from "@component/components/Services/Tabs";
import React from "react";

const Services = () => {
  return (
    <div>
      <Header />
      <Heading
      titletext="Services"
      title="Our Services "
      subtext="Nunc convallis semper justo quis tempor. Praesent molestie, lorem sed imperdiet tempor, libero urna semper urna, facilisis vulputate velit arcu vitae mi. Donec ac nisi ex."
      />
      <Tabs />
      <Footer />
    </div>
  );
};

export default Services;
