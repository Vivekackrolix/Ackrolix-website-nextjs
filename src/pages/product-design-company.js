import React from "react";
import Footer from '../components/Common/Footer'
import Header from "../components/Common/Header";
import ProDesignTech from "./ProductDesign/ProDesignTech";
import ProDesignProccess from "./ProductDesign/ProDesignProccess";
import ProDesignWork from "./ProductDesign/ProDesignWork";
import ProDesignEnquiry from "./ProductDesign/ProDesignEnquiry";
import ProDesignCards from "./ProductDesign/ProDesignCards";
import ProDesignClients from "./ProductDesign/ProDesignClients";
import ServiceBanner from "../components/Services/DetailPage/ServiceBanner";

const ProductDdesignCompany = () => {
  return (
    <div>
      <Header />
      <div
        className=" bg-right"
        style={{
          backgroundImage: 'url("/assets/images/mainbackground.png ")',
        }}
      >
      <ServiceBanner 
          bannertitle="Craft delightful UX for your digital products"
          bannersubtext="Software supports your business growth, and you need more from it. We’ve helped over 160+ companies build scalable products with confidence. Technology executives chose our development teams because of their skills tested in 7+ markets."
          serviceimg="/assets/images/aboutusimg3.png"
          servicehead="One scalable team for start-to-finish development"
          servicedesc1="What does it mean to be reliable? <strong> It means your outsourced team works as well as your web developers </strong> do. Access web development services trusted by 98% of CTOs that you’ll find understanding with. They made APIs, custom web applications, hybrid mobile app development, provided web design services, updated stacks, and build cloud-native systems."
          servicedesc2="One place — everyone you need: Business Analysts, Product Designers, Project Managers, QA Engineers, DevOps, and Full-stack developers. Expect our web development team to be proactive throughout the project with an abundance of improvement suggestions that will get business moving even in areas such as search engine optimization."
        />
        {/* <ProDesignBanner /> */}
      </div>
      <ProDesignCards />
      <ProDesignTech />
      <ProDesignProccess />
      <ProDesignWork />
      {/* <Section /> */}
      <ProDesignEnquiry />
      <ProDesignClients />
      <Footer />
    </div>
  );
};

export default ProductDdesignCompany;