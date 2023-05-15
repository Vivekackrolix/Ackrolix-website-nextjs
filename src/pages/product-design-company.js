import React from "react";
import Footer from '../components/Common/Footer'
import Header from "../components/Common/Header";
import ProDesignTech from "./ProductDesign/ProDesignTech";
import ProDesignProccess from "./ProductDesign/ProDesignProccess";
import ProDesignWork from "./ProductDesign/ProDesignWork";
import ProDesignEnquiry from "./ProductDesign/ProDesignEnquiry";
import ProDesignCards from "./ProductDesign/ProDesignCards";
import ProDesignClients from "./ProductDesign/ProDesignClients";
import ProDesignBanner from "./ProductDesign/ProDesignBanner";

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
        <ProDesignBanner />
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